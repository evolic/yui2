/**
 * DraggableLineChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class LineChart
 * @uses YAHOO.widget.LineChart
 * @constructor
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
YAHOO.widget.DraggableLineChart = function(containerId, dataSource, attributes)
{
	YAHOO.widget.DraggableLineChart.superclass.constructor.call(this, containerId, dataSource, attributes);

	/**
	 * 
	 */
	this.createEvent("itemDDStartEvent");
	/**
	 * 
	 */
	this.createEvent("itemDDEvent");
	/**
	 * 
	 */
	this.createEvent("itemDDEndEvent");
};

YAHOO.lang.extend(YAHOO.widget.DraggableLineChart, YAHOO.widget.LineChart, {
	mouseX: 0,
	mouseY: 0,
	valueTracker: {
		id: 'valueTracker',
		enabled: false,
		padding: 10,
		backgroundColor: 'rgb(221, 221, 221)',
		top: 0,
		left: 0,
		fix: 10
	},

	draggedItemIdx: null,
//	SWFURL: '../../resources/charts-2013.swf',

	/**
	 * @cfg {String} wmode
	 * Overriden wmode of the flash object. <tt>'transparent'</tt> allows to display some HTML objects over Flash.
	 */
	wmode: 'transparent',


	/**
	 * Handles or re-dispatches events received from the SWF.
	 *
	 * @method _eventHandler
	 * @private
	 */
	_eventHandler: function(event)
	{
		YAHOO.widget.DraggableLineChart.superclass._eventHandler.call(this, event);

		var type = event.type;
		switch(type)
		{
			case "swfReady":
				this.onSwfReady(event);
				return;
			case "itemDDStartEvent":
				this.onItemDDStart(event);
				return;
			case "itemDDEvent":
				this.onItemDD(event);
				return;
			case "itemDDEndEvent":
				this.onItemDDEnd(event);
				return;
			default:
				YAHOO.log(type, event.message, event.category, this.toString());
				return;
		}
	},

	onDestroy: function(){
		YAHOO.widget.DraggableLineChart.superclass.onDestroy.call(this);
		delete window[this.temporaryValueTipFnName];
	},

	setTemporaryValueTipRenderer : function(fn){
		var chart = this;
		this.temporaryValueTipFnName = this.createFnProxy(function(item, index, series){
			var record = chart._dataSource.liveData[o.index];
			return fn(record, index, series);
		}, this.temporaryValueTipFnName);
		this.swf.setTemporaryValueTipFunction(this.temporaryValueTipFnName);
	},

	onSwfReady : function(o) {
		if (this.temporaryValueTipRenderer) {
			this.setTemporaryValueTipRenderer(this.temporaryValueTipRenderer);
		}
	},

	onItemDDStart : function(o) {
		if (this._seriesDefs[o.seriesIndex].dragable) {
			this.draggedItemIdx = o.index;
		}
	},

	onItemDD : function(o) {
		this.draggedItemIdx = o.index;
	},

	onItemDDEnd : function(o) {
		if (this._seriesDefs[o.seriesIndex].dragable) {
			var yField = this._seriesDefs[o.seriesIndex].yField;
			this._dataSource.liveData[o.index][yField] = o.newValue;
			this._setDataSource(this._dataSource);
			this.draggedItemIdx = null;
		}
	},

	getXAxis : function(){
		return this._swf.getHorizontalAxis();
	},

	getYAxis : function(){
		return this._swf.getVerticalAxis();
	}
});