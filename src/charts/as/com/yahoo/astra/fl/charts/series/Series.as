package com.yahoo.astra.fl.charts.series
{
    import com.yahoo.astra.fl.charts.events.ChartEvent;

    import fl.core.InvalidationType;
    import fl.core.UIComponent;
    import fl.transitions.easing.Strong;

    import flash.display.DisplayObject;
    import flash.display.InteractiveObject;
    import flash.display.Shape;
    import flash.geom.Point;
    import flash.geom.Rectangle;
    import flash.events.Event;
    import flash.events.MouseEvent;
    import flash.utils.Dictionary;
    import flash.utils.getQualifiedClassName;

    //--------------------------------------
    //  Styles
    //--------------------------------------

    /**
     * The easing function for animations that occur on data changes.
     */
    [Style(name="animationEasingFunction", type="Function")]

    /**
     * The duration for animations that occur on data changes.
     */
    [Style(name="animationDuration", type="int")]

    /**
     * If true, data changes will be displayed with animations. If false, changes will happen instantly.
     */
    [Style(name="animationEnabled", type="Boolean")]

    /**
     * The base color used by objects displayed in this series.
     */
    [Style(name="fillColor", type="uint")]

    /**
     * The border color used by programatic skins in this series.
     */
    [Style(name="borderColor", type="uint")]

    /**
     * The Class used to instantiate each marker's skin.
     */
    [Style(name="markerSkin", type="Class")]

    /**
     * The size, in pixels, of each marker.
     */
    [Style(name="markerSize", type="Number")]

    /**
     * The alpha value from 0.0 to 1.0 to use for drawing the markers.
     */
    [Style(name="markerAlpha", type="Number")]

    /**
     * The alpha value from 0.0 to 1.0 to use for drawing the fills of markers.
     */
    [Style(name="fillAlpha", type="Number")]

    /**
     * The alpha value from 0.0 to 1.0 to use for drawing the border of markers.
     */
    [Style(name="borderAlpha", type="Number")]

    /**
     * Functionality common to most series. Generally, a <code>Series</code> object
     * shouldn't be instantiated directly. Instead, a subclass with a concrete
     * implementation should be used.
     *
     * @author Josh Tynjala
     */
    public class Series extends UIComponent implements ISeries
    {

    //--------------------------------------
    //  Class Variables
    //--------------------------------------

        /**
         * @private
         */
        private static var defaultStyles:Object =
        {
            markerSkin: Shape, //an empty display object
            fillColor: 0x00b8bf,
            markerSize: 10,
            markerAlpha: 1.0,
            fillAlpha: 1.0,
            borderAlpha: 1.0,
            animationEnabled: true,
            animationEasingFunction: fl.transitions.easing.Strong.easeOut,
            animationDuration: 500,
            borderColor: 0x00b8bf,
            color: 0x00b8bf
        };

        /**
         * @private
         */
        private static const RENDERER_STYLES:Object =
        {
            skin: "markerSkin",
            fillColor: "fillColor",
            borderColor: "borderColor",
            color: "color",
            fillAlpha: "fillAlpha",
            borderAlpha: "borderAlpha"
        };

    //--------------------------------------
    //  Class Methods
    //--------------------------------------

        /**
         * @copy fl.core.UIComponent#getStyleDefinition()
         */
        public static function getStyleDefinition():Object
        {
            return mergeStyles(defaultStyles, UIComponent.getStyleDefinition());
        }

    //--------------------------------------
    //  Constructor
    //--------------------------------------

        /**
         * Constructor.
         */
        public function Series(dataProvider:Object = null)
        {
            super();
            this._dataProvider = dataProvider;
        }

    //--------------------------------------
    //  Properties
    //--------------------------------------

        /**
         * @private
         */
        protected var markers:Array = [];

        /**
         * @private
         * A set of flags to indicate if special considerations need to be taken for the markers.
         */
        protected var markerInvalidHash:Dictionary = new Dictionary(true);

        /**
         * @private
         * Storage for the chart property.
         */
        private var _chart:Object;

        /**
         * @copy com.yahoo.astra.fl.charts.ISeries#chart
         */
        public function get chart():Object
        {
            return this._chart;
        }

        /**
         * @private
         */
        public function set chart(value:Object):void
        {
            this._chart = value;
            //this is a fun hack to ensure that series know if their parent charts are in live preview
            if(this._chart == null || this._chart.parent == null)
            {
                this.isLivePreview = false;
            }
            var className:String;
            try
            {
                className = getQualifiedClassName(this._chart.parent);
            }
            catch (e:Error) {}
            this.isLivePreview = (className == "fl.livepreview::LivePreviewParent");
        }

        /**
         * @private
         * A lookup system to convert from an item to its item renderer.
         */
        private var _itemToItemRendererHash:Dictionary = new Dictionary();

        /**
         * @private
         * Storage for the itemRenderer property.
         */
        private var _itemRenderer:Object = SeriesItemRenderer;


        private var _lastMouseItem:ISeriesItemRenderer;

        /**
         * @private
         */
        public function get lastMouseItem():ISeriesItemRenderer
        {
            return this._lastMouseItem;
        }


        private var _lastItemIndex:int;

        /**
         * @private
         */
        public function get lastItemIndex():int
        {
            return this._lastItemIndex;
        }


        private var _startingItemPosition:Point;

        /**
         * @private
         */
        public function get startingItemPosition():Point
        {
            return this._startingItemPosition;
        }


        private var _lastItemPosition:Point;

        /**
         * @private
         */
        public function get lastItemPosition():Point
        {
            return this._lastItemPosition;
        }


        private var _startingMousePosition:Point;

        /**
         * @private
         */
        public function get startingMousePosition():Point
        {
            return this._startingMousePosition;
        }


        private var _lastMousePosition:Point;

        /**
         * @private
         */
        public function get lastMousePosition():Point
        {
            return this._lastMousePosition;
        }


        /**
         * The class used to instantiate item renderers.
         */
        public function get itemRenderer():Object
        {
            return this._itemRenderer;
        }

        /**
         * @private
         */
        public function set itemRenderer(value:Object):void
        {
            if(this._itemRenderer != value)
            {
                this._itemRenderer = value;
                this.invalidate("itemRenderer");
            }
        }

        /**
         * @private
         * Storage for the data property.
         */
        private var _dataProvider:Object;

        /**
         * @copy com.yahoo.astra.fl.charts.ISeries#data
         */
        public function get dataProvider():Object
        {
            return this._dataProvider;
        }

        /**
         * @private
         */
        public function set dataProvider(value:Object):void
        {
            if(this._dataProvider != value)
            {
                //if we get XML data and it isn't an XMLList,
                //ignore the root tag
                if(value is XML && !(value is XMLList))
                {
                    value = value.elements();
                }

                if(value is XMLList)
                {
                    value = XMLList(value).copy();
                }
                else if(value is Array)
                {
                    value = (value as Array).concat();
                }

                this._dataProvider = value;
                this.dispatchEvent(new Event("dataChange"));
                this.invalidate(InvalidationType.DATA);
            }
        }

        /**
         * @private
         * Storage for the displayName property.
         */
        private var _displayName:String;

        /**
         * @copy com.yahoo.astra.fl.charts.ISeries#data
         */
        public function get displayName():String
        {
            return this._displayName;
        }

        /**
         * @private
         */
        public function set displayName(value:String):void
        {
            this._displayName = value;
        }

        /**
         * @private
         * Storage for the dragable property.
         */
        private var _dragable:Boolean = false;

        /**
         * @copy com.yahoo.astra.fl.charts.ISeries#data
         */
        public function get dragable():Boolean
        {
            return this._dragable;
        }

        /**
         * @private
         */
        public function set dragable(value:Boolean):void
        {
            this._dragable = value;
        }

        /**
         * @copy com.yahoo.astra.fl.charts.ISeries#length
         */
        public function get length():int
        {
            if(this._dataProvider is Array)
            {
                return (this._dataProvider as Array).length;
            }
            else if(this._dataProvider is XMLList)
            {
                return (this._dataProvider as XMLList).length();
            }

            return 0;
        }

    //--------------------------------------
    //  Public Methods
    //--------------------------------------

        /**
         * @copy com.yahoo.astra.fl.charts.ISeries#clone()
         */
        public function clone():ISeries
        {
            var series:Series = new Series();
            series.dataProvider = this.dataProvider;
            series.displayName = this.displayName;
            series.dragable = this.dragable;
            return series;
        }

        /**
         * @copy com.yahoo.astra.fl.charts.ISeries#itemRendererToIndex()
         */
        public function itemRendererToIndex(renderer:ISeriesItemRenderer):int
        {
            return this.markers.indexOf(renderer);
        }

        public function itemToItemRenderer(item:Object):ISeriesItemRenderer
        {
            return this._itemToItemRendererHash[item] as ISeriesItemRenderer;
        }

    //--------------------------------------
    //  Protected Methods
    //--------------------------------------

        /**
         * @private
         */
        override protected function draw():void
        {
            //the class for the item renderers has changed. remove all markers
            //so that they may be recreated.
            if(this.isInvalid("itemRenderer"))
            {
                this.removeAllMarkers();
            }

            if(this.isInvalid("itemRenderer", InvalidationType.DATA, InvalidationType.STYLES))
            {
                this.refreshMarkers();
                this._itemToItemRendererHash = new Dictionary(true);
                var itemCount:int = this.markers.length;
                for(var i:int = 0; i < itemCount; i++)
                {
                    var marker:ISeriesItemRenderer = this.markers[i] as ISeriesItemRenderer;
                    if(this.isInvalid(InvalidationType.DATA)) //update data if needed
                    {
                        marker.data = this.dataProvider[i];
                    }
                    this._itemToItemRendererHash[marker.data] = marker;

                    var markerComponent:UIComponent = marker as UIComponent;
                    this.copyStylesToChild(markerComponent, RENDERER_STYLES);
                    markerComponent.drawNow();
                }
            }

            super.draw();
        }

        /**
         * @private
         * All markers are removed from the display list.
         */
        protected function removeAllMarkers():void
        {
            var markerCount:int = this.markers.length;
            for(var i:int = 0; i < markerCount; i++)
            {
                var marker:ISeriesItemRenderer = this.markers.pop() as ISeriesItemRenderer;
                marker.removeEventListener(MouseEvent.ROLL_OVER, markerRollOverHandler);
                marker.removeEventListener(MouseEvent.ROLL_OUT, markerRollOutHandler);
                marker.removeEventListener(MouseEvent.CLICK, markerClickHandler);
                marker.removeEventListener(MouseEvent.DOUBLE_CLICK, markerDoubleClickHandler);

                if (this.dragable) {
                    marker.addEventListener(MouseEvent.MOUSE_DOWN, markerDragStartHandler, false, 0, true);
                }

                this.removeChild(DisplayObject(marker));
            }
        }

        /**
         * @private
         * Add or remove markers as needed. current markers will be reused.
         */
        protected function refreshMarkers():void
        {
            var itemCount:int = this.length;
            var difference:int = itemCount - this.markers.length;
            if(difference > 0)
            {
                for(var i:int = 0; i < difference; i++)
                {
                    var marker:ISeriesItemRenderer = new this.itemRenderer();
                    marker.series = this;
                    InteractiveObject(marker).doubleClickEnabled = true;
                    marker.addEventListener(MouseEvent.ROLL_OVER, markerRollOverHandler, false, 0, true);
                    marker.addEventListener(MouseEvent.ROLL_OUT, markerRollOutHandler, false, 0, true);
                    marker.addEventListener(MouseEvent.CLICK, markerClickHandler, false, 0, true);
                    marker.addEventListener(MouseEvent.DOUBLE_CLICK, markerDoubleClickHandler, false, 0, true);

                    if (this.dragable) {
                        marker.addEventListener(MouseEvent.MOUSE_DOWN, markerDragStartHandler, false, 0, true);
                    }

                    this.addChild(DisplayObject(marker));
                    this.markers.push(marker);
                    this.invalidateMarker(marker);
                }
            }
            else if(difference < 0)
            {
                difference = Math.abs(difference);
                for(i = 0; i < difference; i++)
                {
                    marker = this.markers.pop() as ISeriesItemRenderer;
                    this.validateMarker(marker);
                    marker.removeEventListener(MouseEvent.ROLL_OVER, markerRollOverHandler);
                    marker.removeEventListener(MouseEvent.ROLL_OUT, markerRollOutHandler);
                    marker.removeEventListener(MouseEvent.CLICK, markerClickHandler);
                    marker.removeEventListener(MouseEvent.DOUBLE_CLICK, markerDoubleClickHandler);

                    if (this.dragable) {
                        marker.removeEventListener(MouseEvent.MOUSE_DOWN, markerDragStartHandler);
                    }

                    this.removeChild(DisplayObject(marker));
                }
            }

            var markerCount:int = this.markers.length;
            for(i = 0; i < markerCount; i++)
            {
                marker = ISeriesItemRenderer(this.markers[i]);
                marker.data = this.dataProvider[i];
                DisplayObject(marker).alpha = this.getStyleValue("markerAlpha") as Number;
                this.copyStylesToChild(UIComponent(marker), RENDERER_STYLES);
            }
        }

        /**
         * Indicates whether special considerations should be taken for a newly created marker.
         */
        protected function isMarkerInvalid(marker:ISeriesItemRenderer):Boolean
        {
            return this.markerInvalidHash[marker];
        }

        /**
         * Invalidates a marker (considered new).
         */
        protected function invalidateMarker(marker:ISeriesItemRenderer):void
        {
            markerInvalidHash[marker] = true;
            DisplayObject(marker).visible = false;
        }

        /**
         * @private
         * We never want the series to callLater after invalidating.
         * The chart will ALWAYS handle drawing.
         */
        override public function invalidate(property:String = InvalidationType.ALL, callLater:Boolean = true):void
        {
            //never call later!
            super.invalidate(property, false);
        }

        /**
         * Makes a marker valid. To be used by subclasses.
         */
        protected function validateMarker(marker:ISeriesItemRenderer):void
        {
            DisplayObject(marker).visible = true;
            delete markerInvalidHash[marker];
        }

        /**
         * @private
         * Notify the parent chart that the user's mouse is over this marker.
         */
        protected function markerRollOverHandler(event:MouseEvent):void
        {
            var itemRenderer:ISeriesItemRenderer = ISeriesItemRenderer(event.currentTarget);
            var index:int = this.itemRendererToIndex(itemRenderer);
            var item:Object = this.dataProvider[index];
            var rollOver:ChartEvent = new ChartEvent(ChartEvent.ITEM_ROLL_OVER, index, item, itemRenderer, this);
            this.dispatchEvent(rollOver);
        }

        /**
         * @private
         * Notify the parent chart that the user's mouse has left this marker.
         */
        protected function markerRollOutHandler(event:MouseEvent):void
        {
            var itemRenderer:ISeriesItemRenderer = ISeriesItemRenderer(event.currentTarget);
            var index:int = this.itemRendererToIndex(itemRenderer);
            var item:Object = this.dataProvider[index];
            var rollOut:ChartEvent = new ChartEvent(ChartEvent.ITEM_ROLL_OUT, index, item, itemRenderer, this);
            this.dispatchEvent(rollOut);
        }

        /**
         * @private
         * Notify the parent chart that the user clicked this marker.
         */
        protected function markerClickHandler(event:MouseEvent):void
        {
            var itemRenderer:ISeriesItemRenderer = ISeriesItemRenderer(event.currentTarget);
            var index:int = this.itemRendererToIndex(itemRenderer);
            var item:Object = this.dataProvider[index];
            var click:ChartEvent = new ChartEvent(ChartEvent.ITEM_CLICK, index, item, itemRenderer, this);
            this.dispatchEvent(click);
        }

        /**
         * @private
         * Notify the parent chart that the user double-clicked this marker.
         */
        protected function markerDoubleClickHandler(event:MouseEvent):void
        {
            var itemRenderer:ISeriesItemRenderer = ISeriesItemRenderer(event.currentTarget);
            var index:int = this.itemRendererToIndex(itemRenderer);
            var item:Object = this.dataProvider[index];
            var doubleClick:ChartEvent = new ChartEvent(ChartEvent.ITEM_DOUBLE_CLICK, index, item, itemRenderer, this);
            this.dispatchEvent(doubleClick);
        }

        /**
         * @private
         * Notify the parent chart that the user started dragging this marker.
         */
        protected function markerDragStartHandler(event:MouseEvent):void
        {
            var itemRenderer:ISeriesItemRenderer = ISeriesItemRenderer(event.currentTarget);
            var marker:DisplayObject = itemRenderer as DisplayObject;
            var index:int = this.itemRendererToIndex(itemRenderer);
            var item:Object = this.dataProvider[index];
            var markerSize:Number = this.getStyleValue("markerSize") as Number;

            this._lastItemIndex = index;
            this._lastMouseItem = null;
            this._lastMouseItem = itemRenderer;
            this._startingItemPosition = new Point(marker.x, marker.y);
            this._lastItemPosition = this._startingItemPosition;
            this._startingMousePosition = new Point(mouseX, this.fixMouseY(mouseY));
            this._lastMousePosition = this._startingMousePosition;

            this.chart.isBeingChanged = true;

            // setup events listeners
            marker.addEventListener(MouseEvent.MOUSE_MOVE, markerDragHandler, false, 0, true);
            marker.addEventListener(MouseEvent.MOUSE_UP, markerDragStopHandler, false, 0, true);
            this.stage.addEventListener(MouseEvent.MOUSE_UP, seriesDragStopHandler, false, 0, true);

            // stop Drag&Drop
            (itemRenderer as UIComponent).startDrag(false, new Rectangle(Math.round(marker.x), -marker.height/2, 0, this.height));
            (itemRenderer as UIComponent).addEventListener(Event.ENTER_FRAME, onMarkerDD);

            // TODO: add timer: script will take last mouse position if there will be no ChartEvent.ITEM_DD_END event
            // after 30 seconds from the beginning of the D'n'D

            var dragStart:ChartEvent = new ChartEvent(ChartEvent.ITEM_DD_START, index, item, itemRenderer, this);
            this.dispatchEvent(dragStart);
        }

        /**
         * @private
         * Notify the parent chart that the user is dragging this marker.
         */
        protected function markerDragHandler(event:MouseEvent):void
        {
            var itemRenderer:ISeriesItemRenderer = ISeriesItemRenderer(event.currentTarget);
            var marker:DisplayObject = itemRenderer as DisplayObject;
            var index:int = this.itemRendererToIndex(itemRenderer);
            var item:Object = this.dataProvider[index];

            this._lastItemIndex = index;
            this._lastMouseItem = null;
            this._lastMouseItem = itemRenderer;
            this._lastItemPosition = new Point(event.currentTarget.x, event.currentTarget.y);
            this._lastMousePosition = new Point(mouseX, this.fixMouseY(mouseY));

            var drag:ChartEvent = new ChartEvent(ChartEvent.ITEM_DD, index, item, itemRenderer, this);
            this.dispatchEvent(drag);
        }

        /**
         * @private
         * Notify the parent chart that the user ended dragging this marker.
         */
        protected function markerDragStopHandler(event:MouseEvent):void
        {
            var itemRenderer:ISeriesItemRenderer = ISeriesItemRenderer(event.currentTarget);
            var marker:DisplayObject = itemRenderer as DisplayObject;
            var index:int = this.itemRendererToIndex(itemRenderer);
            var item:Object = this.dataProvider[index];

            this._lastItemIndex = index;
            this._lastMouseItem = null;
            this._lastMouseItem = itemRenderer;
            this._lastItemPosition = new Point(event.currentTarget.x, event.currentTarget.y);
            this._lastMousePosition = new Point(mouseX, this.fixMouseY(mouseY));

            this.chart.isBeingChanged = false;

            // setup events listeners
            marker.removeEventListener(MouseEvent.MOUSE_MOVE, markerDragHandler);
            marker.removeEventListener(MouseEvent.MOUSE_UP, markerDragStopHandler);
            this.stage.removeEventListener(MouseEvent.MOUSE_UP, seriesDragStopHandler);

            // stop Drag&Drop
            (itemRenderer as UIComponent).stopDrag();
            (itemRenderer as UIComponent).removeEventListener(Event.ENTER_FRAME, onMarkerDD);

            var dragEnd:ChartEvent = new ChartEvent(ChartEvent.ITEM_DD_END, index, item, itemRenderer, this);
            this.dispatchEvent(dragEnd);
        }

        /**
         * @private
         * Notify the parent chart that the user ended dragging some marker.
         */
        protected function seriesDragStopHandler(event:MouseEvent):void
        {
            var marker:DisplayObject = this._lastMouseItem as DisplayObject;
            var index:int = this.itemRendererToIndex(this._lastMouseItem);
            var item:Object = this.dataProvider[index];

            this._lastMousePosition = new Point(mouseX, this.fixMouseY(mouseY));

            this.chart.isBeingChanged = false;

            // setup events listeners
            marker.removeEventListener(MouseEvent.MOUSE_MOVE, markerDragHandler);
            marker.removeEventListener(MouseEvent.MOUSE_UP, markerDragStopHandler);
            this.stage.removeEventListener(MouseEvent.MOUSE_UP, seriesDragStopHandler);

            // stop Drag&Drop
            (this._lastMouseItem as UIComponent).stopDrag();
            (this._lastMouseItem as UIComponent).removeEventListener(Event.ENTER_FRAME, onMarkerDD);

            var dragEnd:ChartEvent = new ChartEvent(ChartEvent.ITEM_DD_END, index, item, this._lastMouseItem, this);
            this.dispatchEvent(dragEnd);
        }

        protected function onMarkerDD(event:Event):void
        {
        }

        public function fixMouseY(value:Number):Number
        {
            var markerSize:Number = this.getStyleValue("markerSize") as Number;
            var chartInfo:Object = this.chart.getInfo();
            var minY:Number = 0 - markerSize/4;
            var maxY:Number = this.height + markerSize/4;

            if (value >= minY && value <= maxY) {
                return value;
            } else if (value < minY) {
                return minY
            } else {
                return maxY;
            }
        }
    }
}