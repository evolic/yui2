package com.yahoo.yui.charts
{
    import com.yahoo.astra.fl.charts.axes.CategoryAxis;
    import com.yahoo.astra.fl.charts.axes.IAxis;
    import com.yahoo.astra.fl.charts.axes.NumericAxis;
    import com.yahoo.astra.fl.charts.axes.TimeAxis;
    import com.yahoo.astra.utils.JavaScriptUtil;

    import com.yahoo.astra.fl.charts.axes.ICartesianAxisRenderer;
    import flash.geom.Rectangle;

    import flash.utils.Dictionary;
    import flash.utils.getDefinitionByName;
    import flash.utils.getQualifiedClassName;

    public class AxisSerializer
    {

    //--------------------------------------
    //  Class Properties
    //--------------------------------------

        private static var shortNameToType:Object = {};
        shortNameToType.numeric = NumericAxis;
        shortNameToType.category = CategoryAxis;
        shortNameToType.time = TimeAxis;

        private static var typeToShortName:Dictionary = new Dictionary(true);
        typeToShortName[NumericAxis] = "numeric";
        typeToShortName[CategoryAxis] = "category";
        typeToShortName[TimeAxis] = "time";

    //--------------------------------------
    //  Static Methods
    //--------------------------------------

        public static function getShortName(input:Object):String
        {
            if(!input) return null;

            if(input is String)
            {
                input = getDefinitionByName(input as String);
            }
            var shortName:String = shortNameToType[input];
            return shortName;
        }

        public static function getType(shortName:String):Class
        {
            return shortNameToType[shortName];
        }

        public static function writeAxis(input:IAxis):Object
        {
            var axis:Object = {type: getShortName(getQualifiedClassName(input))};
            return axis;
        }

        public static function readAxis(input:Object):IAxis
        {
            var AxisType:Class = AxisSerializer.getType(input.type);
            var axis:IAxis = new AxisType();
            axis.title = input.title;
            axis.reverse = input.reverse;
            if(input.labelFunction)
            {
                axis.labelFunction = JavaScriptUtil.createCallbackFunction(input.labelFunction).callback;
            }

            if(axis is NumericAxis)
            {
                var numericAxis:NumericAxis = NumericAxis(axis);
                if(input.minimum != null && !isNaN(input.minimum))
                {
                    numericAxis.minimum = input.minimum;
                }
                if(input.maximum != null && !isNaN(input.maximum))
                {
                    numericAxis.maximum = input.maximum;
                }
                if(input.majorUnit != null && !isNaN(input.majorUnit))
                {
                    numericAxis.majorUnit = input.majorUnit;
                }
                if(input.minorUnit != null && !isNaN(input.minorUnit))
                {
                    numericAxis.minorUnit = input.minorUnit;
                }
                if(input.numLabels != null && !isNaN(input.numLabels))
                {
                    numericAxis.numLabels = input.numLabels;
                }
                if(input.roundMajorUnit != null)
                {
                    numericAxis.roundMajorUnit = input.roundMajorUnit;
                }
                numericAxis.snapToUnits = input.snapToUnits;
                numericAxis.alwaysShowZero = input.alwaysShowZero;
                numericAxis.scale = input.scale;
                numericAxis.stackingEnabled = input.stackingEnabled;
            }
            else if(axis is TimeAxis)
            {
                var timeAxis:TimeAxis = TimeAxis(axis);
                if(input.minimum != null && !isNaN(input.minimum))
                {
                    timeAxis.minimum = input.minimum;
                }
                if(input.maximum != null && !isNaN(input.maximum))
                {
                    timeAxis.maximum = input.maximum;
                }
                if(input.majorUnit != null && !isNaN(input.majorUnit))
                {
                    timeAxis.majorUnit = input.majorUnit;
                }
                if(input.majorTimeUnit != null)
                {
                    timeAxis.majorTimeUnit = input.majorTimeUnit;
                }
                if(input.minorUnit != null && !isNaN(input.minorUnit))
                {
                    timeAxis.minorUnit = input.minorUnit;
                }
                if(input.minorTimeUnit != null)
                {
                    timeAxis.minorTimeUnit = input.minorTimeUnit;
                }
                if(input.numLabels != null && !isNaN(input.numLabels))
                {
                    timeAxis.numLabels = input.numLabels;
                }
                timeAxis.snapToUnits = input.snapToUnits;
                timeAxis.stackingEnabled = input.stackingEnabled;
            }
            else if(axis is CategoryAxis)
            {
                var categoryAxis:CategoryAxis = CategoryAxis(axis);
                if(input.categoryNames != null)
                {
                    categoryAxis.categoryNames = input.categoryNames;
                }
                if(input.numLabels != null && !isNaN(input.numLabels))
                {
                    categoryAxis.numLabels = input.numLabels;
                }
                if(input.calculateCategoryCount)
                {
                    categoryAxis.calculateCategoryCount = input.calculateCategoryCount;
                }
            }
            return axis;
        }

        public static function getAxis(axis:IAxis):Object
        {
            var results:Object = {
                type: null
            };

            if(axis is NumericAxis)
            {
                results = {
                    type: 'numeric',
                    minimum: null,
                    maximum: null,
                    majorUnit: null,
                    numLabel: null,
                    roundMajorUnit: null,

                    positionMultiplier: null,
                    contentBounds: null,
                    length: null,
                    reverse: null,

                    snapToUnits: null,
                    alwaysShowZero: null,
                    scale: null,
                    stackingEnabled: null
                };

                var contentBounds:Object = {
                    x: null,
                    y: null,
                    width: null,
                    height: null
                };

                var numericAxis:NumericAxis = NumericAxis(axis);

                results.minimum = numericAxis.minimum;
                results.maximum = numericAxis.maximum;
                results.majorUnit = numericAxis.majorUnit;
                results.minorUnit = numericAxis.minorUnit;
                results.numLabels = numericAxis.numLabels;
                results.roundMajorUnit = numericAxis.roundMajorUnit;

                results.positionMultiplier = numericAxis.getPositionMultiplier();
                results.reverse = numericAxis.reverse;

                //the vertical axis has its origin on the bottom
                if(numericAxis.renderer is ICartesianAxisRenderer)
                {
                    var renderer:ICartesianAxisRenderer = ICartesianAxisRenderer(numericAxis.renderer);
                    results.length = renderer.length;

                    if(renderer.contentBounds is Rectangle)
                    {
                        var _contentBounds:Rectangle = Rectangle(renderer.contentBounds);

                        var x:Number = _contentBounds.x;
                        var y:Number = _contentBounds.y;
                        var width:Number = _contentBounds.width;
                        var height:Number = _contentBounds.height;

                        contentBounds.x = x;
                        contentBounds.y = y;
                        contentBounds.width = width;
                        contentBounds.height = height;
                    }
                }

                results.contentBounds = contentBounds;

                results.snapToUnits = numericAxis.snapToUnits;
                results.alwaysShowZero = numericAxis.alwaysShowZero;
                results.scale = numericAxis.scale;
                results.stackingEnabled = numericAxis.stackingEnabled;
            }
            else if(axis is TimeAxis)
            {
                results = {
                    type: 'time',
                    minimum: null,
                    maximum: null,
                    majorUnit: null,
                    majorTimeUni: null,
                    minorUnit: null,
                    minorTimeUnit: null,
                    numLabel: null,

                    positionMultiplier: null,

                    snapToUnits: null,
                    stackingEnabled: null
                };

                var timeAxis:TimeAxis = TimeAxis(axis);

                results.minimum = timeAxis.minimum;
                results.maximum = timeAxis.maximum;
                results.majorUnit = timeAxis.majorUnit;
                results.majorTimeUnit = timeAxis.majorTimeUnit;
                results.minorUnit = timeAxis.minorUnit;
                results.minorTimeUnit = timeAxis.minorTimeUnit;
                results.numLabels = timeAxis.numLabels;

                results.positionMultiplier = timeAxis.getPositionMultiplier();

                results.snapToUnits = timeAxis.snapToUnits;
                results.stackingEnabled = timeAxis.stackingEnabled;
            }
            else if(axis is CategoryAxis)
            {
                results = {
                    type: 'category',
                    categoryNames: null,
                    numLabels: null,
                    calculateCategoryCount: null
                };

                var categoryAxis:CategoryAxis = CategoryAxis(axis);

                results.categoryNames = categoryAxis.categoryNames;
                results.numLabels = categoryAxis.numLabels;
                results.calculateCategoryCount = categoryAxis.calculateCategoryCount;
            }

            return results;
        }
    }
}