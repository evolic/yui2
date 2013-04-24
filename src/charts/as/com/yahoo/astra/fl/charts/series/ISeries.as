package com.yahoo.astra.fl.charts.series
{
    import com.yahoo.astra.fl.charts.Chart;
    import com.yahoo.astra.fl.charts.IChart;

    import flash.geom.Point;
    import flash.events.IEventDispatcher;

    //--------------------------------------
    //  Events
    //--------------------------------------

    /**
     * Dispatched when the data property for an ISeries changes.
     */
    [Event(name="dataChange", type="flash.events.Event")]

    /**
     * A renderer for a series displayed on a chart.
     *
     * <p>Important: Must be a subclass of DisplayObject</p>
     *
     * @see flash.display.DisplayObject
     * @author Josh Tynjala
     */
    public interface ISeries extends IEventDispatcher
    {

    //--------------------------------------
    //  Properties
    //--------------------------------------

        /**
         * The chart in which this series appears.
         */
        function get chart():Object;

        /**
         * @private
         */
        function set chart(value:Object):void;


        /**
         * Last item during Drag&Drop event.
         */
        function get lastMouseItem():ISeriesItemRenderer;

        /**
         * Starting item position during Drag&Drop event.
         */
        function get startingItemPosition():Point;

        /**
         * Last item position during Drag&Drop event.
         */
        function get lastItemPosition():Point;

        /**
         * Starting mouse position during Drag&Drop event.
         */
        function get startingMousePosition():Point;

        /**
         * Last mouse position during Drag&Drop event.
         */
        function get lastMousePosition():Point

        /**
         * The data provider for this series. Accepts <code>Array</code> or <code>XMLList</code> objects.
         */
        function get dataProvider():Object;

        /**
         * @private
         */
        function set dataProvider(value:Object):void;

        /**
         * The name of the series as it appears to the user.
         */
        function get displayName():String;

        /**
         * @private
         */
        function set displayName(value:String):void;

        /**
         * Specifies if series markers can be dragable.
         */
        function get dragable():Boolean;

        /**
         * @private
         */
        function set dragable(value:Boolean):void;

        /**
         * The number of items in the series.
         */
        function get length():int;

    //--------------------------------------
    //  Methods
    //--------------------------------------

        /**
         * Creates a copy of the ISeries object.
         *
         * @return a new ISeries object
         */
        function clone():ISeries;

        function itemRendererToIndex(renderer:ISeriesItemRenderer):int;

        function itemToItemRenderer(item:Object):ISeriesItemRenderer;
    }
}
