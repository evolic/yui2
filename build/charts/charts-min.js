/*!
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * @namespace YAHOO
 */
YAHOO.namespace("deconcept");YAHOO.deconcept=YAHOO.deconcept||{};if(typeof YAHOO.deconcept.util=="undefined"||!YAHOO.deconcept.util){YAHOO.deconcept.util={};}if(typeof YAHOO.deconcept.SWFObjectUtil=="undefined"||!YAHOO.deconcept.SWFObjectUtil){YAHOO.deconcept.SWFObjectUtil={};}YAHOO.deconcept.SWFObject=function(f,d,m,g,j,l,n,i,a,e){if(!document.getElementById){return;}this.DETECT_KEY=e?e:"detectflash";this.skipDetect=YAHOO.deconcept.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];if(f){this.setAttribute("swf",f);}if(d){this.setAttribute("id",d);}if(m){this.setAttribute("width",m);}if(g){this.setAttribute("height",g);}if(j){this.setAttribute("version",new YAHOO.deconcept.PlayerVersion(j.toString().split(".")));}this.installedVer=YAHOO.deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){YAHOO.deconcept.SWFObject.doPrepUnload=true;}if(l){this.addParam("bgcolor",l);}var b=n?n:"high";this.addParam("quality",b);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var k=(i)?i:window.location;this.setAttribute("xiRedirectUrl",k);this.setAttribute("redirectUrl","");if(a){this.setAttribute("redirectUrl",a);}};YAHOO.deconcept.SWFObject.prototype={useExpressInstall:function(a){this.xiSWFPath=!a?"expressinstall.swf":a;this.setAttribute("useExpressInstall",true);},setAttribute:function(a,b){this.attributes[a]=b;},getAttribute:function(a){return this.attributes[a];},addParam:function(a,b){this.params[a]=b;},getParams:function(){return this.params;},addVariable:function(a,b){this.variables[a]=b;},getVariable:function(a){return this.variables[a];},getVariables:function(){return this.variables;},getVariablePairs:function(){var a=[];var b;var c=this.getVariables();for(b in c){if(c.hasOwnProperty(b)){a[a.length]=b+"="+c[b];}}return a;},getSWFHTML:function(){var d="";var c={};var a="";var b="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}d='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'"';d+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';c=this.getParams();for(a in c){if(c.hasOwnProperty(a)){d+=[a]+'="'+c[a]+'" ';}}b=this.getVariablePairs().join("&");if(b.length>0){d+='flashvars="'+b+'"';}d+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}d='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'">';d+='<param name="movie" value="'+this.getAttribute("swf")+'" />';c=this.getParams();for(a in c){if(c.hasOwnProperty(a)){d+='<param name="'+a+'" value="'+c[a]+'" />';}}b=this.getVariablePairs().join("&");if(b.length>0){d+='<param name="flashvars" value="'+b+'" />';}d+="</object>";}return d;},write:function(a){if(this.getAttribute("useExpressInstall")){var b=new YAHOO.deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(b)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var c=(typeof a=="string")?document.getElementById(a):a;c.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!==""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};YAHOO.deconcept.SWFObjectUtil.getPlayerVersion=function(){var d=null;var c=new YAHOO.deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description){c=new YAHOO.deconcept.PlayerVersion(a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var b=3;while(d){try{b++;d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+b);c=new YAHOO.deconcept.PlayerVersion([b,0,0]);}catch(f){d=null;}}}else{try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(f){try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");c=new YAHOO.deconcept.PlayerVersion([6,0,21]);d.AllowScriptAccess="always";}catch(f){if(c.major==6){return c;}}try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(f){}}if(d!==null){c=new YAHOO.deconcept.PlayerVersion(d.GetVariable("$version").split(" ")[1].split(","));}}}return c;};YAHOO.deconcept.PlayerVersion=function(a){this.major=a[0]!==null?parseInt(a[0],0):0;this.minor=a[1]!==null?parseInt(a[1],0):0;this.rev=a[2]!==null?parseInt(a[2],0):0;};YAHOO.deconcept.PlayerVersion.prototype.versionIsValid=function(a){if(this.major<a.major){return false;}if(this.major>a.major){return true;}if(this.minor<a.minor){return false;}if(this.minor>a.minor){return true;}if(this.rev<a.rev){return false;}return true;};YAHOO.deconcept.util={getRequestParameter:function(d){var c=document.location.search||document.location.hash;if(d===null){return c;}if(c){var b=c.substring(1).split("&");for(var a=0;a<b.length;a++){if(b[a].substring(0,b[a].indexOf("="))==d){return b[a].substring((b[a].indexOf("=")+1));}}}return"";
}};YAHOO.deconcept.SWFObjectUtil.cleanupSWFs=function(){var c=document.getElementsByTagName("OBJECT");for(var b=c.length-1;b>=0;b--){c[b].style.display="none";for(var a in c[b]){if(typeof c[b][a]=="function"){c[b][a]=function(){};}}}};if(YAHOO.deconcept.SWFObject.doPrepUnload){if(!YAHOO.deconcept.unloadSet){YAHOO.deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",YAHOO.deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",YAHOO.deconcept.SWFObjectUtil.prepUnload);YAHOO.deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(a){return document.all[a];};}YAHOO.widget.FlashAdapter=function(d,a,b){this._queue=this._queue||[];this._events=this._events||{};this._configs=this._configs||{};b=b||{};this._id=b.id=b.id||YAHOO.util.Dom.generateId(null,"yuigen");b.version=b.version||"9.0.45";b.backgroundColor=b.backgroundColor||"#ffffff";this._attributes=b;this._swfURL=d;this._containerID=a;this._embedSWF(this._swfURL,this._containerID,b.id,b.version,b.backgroundColor,b.expressInstall,b.wmode);try{this.createEvent("contentReady");}catch(c){}};YAHOO.extend(YAHOO.widget.FlashAdapter,YAHOO.util.AttributeProvider,{_swfURL:null,_containerID:null,_swf:null,_id:null,_initialized:false,_attributes:null,toString:function(){return"FlashAdapter "+this._id;},destroy:function(){if(this._swf){var b=YAHOO.util.Dom.get(this._containerID);b.removeChild(this._swf);}var a=this._id;for(var c in this){if(YAHOO.lang.hasOwnProperty(this,c)){this[c]=null;}}},_embedSWF:function(i,h,d,c,f,g,b){var e=new YAHOO.deconcept.SWFObject(i,d,"100%","100%",c,f);if(g){e.useExpressInstall(g);}e.addParam("allowScriptAccess","always");if(b){e.addParam("wmode",b);}e.addVariable("allowedDomain",document.location.hostname);e.addVariable("elementID",d);e.addVariable("eventHandler","YAHOO.widget.FlashAdapter.eventHandler");var a=YAHOO.util.Dom.get(h);var j=e.write(a);if(j){this._swf=YAHOO.util.Dom.get(d);this._swf.owner=this;}else{}},_eventHandler:function(b){var a=b.type;switch(a){case"swfReady":this._loadHandler();this.fireEvent("contentReady");return;case"log":return;}this.fireEvent(a,b);},_loadHandler:function(){this._initialized=false;this._initAttributes(this._attributes);this.setAttributes(this._attributes,true);this._initialized=true;},set:function(a,b){this._attributes[a]=b;YAHOO.widget.FlashAdapter.superclass.set.call(this,a,b);},_initAttributes:function(a){this.getAttributeConfig("altText",{method:this._getAltText});this.setAttributeConfig("altText",{method:this._setAltText});this.getAttributeConfig("swfURL",{method:this._getSWFURL});},_getSWFURL:function(){return this._swfURL;},_getAltText:function(){return this._swf.getAltText();},_setAltText:function(a){return this._swf.setAltText(a);}});YAHOO.widget.FlashAdapter.eventHandler=function(a,c){var b=YAHOO.util.Dom.get(a);if(!b.owner){setTimeout(function(){YAHOO.widget.FlashAdapter.eventHandler(a,c);},0);}else{b.owner._eventHandler(c);}};YAHOO.widget.FlashAdapter.proxyFunctionCount=0;YAHOO.widget.FlashAdapter.createProxyFunction=function(b){var a=YAHOO.widget.FlashAdapter.proxyFunctionCount;YAHOO.widget.FlashAdapter["proxyFunction"+a]=function(){return b.apply(null,arguments);};YAHOO.widget.FlashAdapter.proxyFunctionCount++;return"YAHOO.widget.FlashAdapter.proxyFunction"+a.toString();};YAHOO.widget.FlashAdapter.removeProxyFunction=function(a){if(!a||a.indexOf("YAHOO.widget.FlashAdapter.proxyFunction")<0){return;}a=a.substr(26);YAHOO.widget.FlashAdapter[a]=null;};YAHOO.widget.Chart=function(c,a,d,b){YAHOO.widget.Chart.superclass.constructor.call(this,YAHOO.widget.Chart.SWFURL,a,b);this._type=c;this._dataSource=d;this.createEvent("itemMouseOverEvent");this.createEvent("itemMouseOutEvent");this.createEvent("itemClickEvent");this.createEvent("itemDoubleClickEvent");this.createEvent("itemDragStartEvent");this.createEvent("itemDragEvent");this.createEvent("itemDragEndEvent");};YAHOO.extend(YAHOO.widget.Chart,YAHOO.widget.FlashAdapter,{_type:null,_pollingID:null,_pollingInterval:null,_dataTipFunction:null,_seriesLabelFunctions:null,toString:function(){return"Chart "+this._id;},setStyle:function(a,b){b=YAHOO.lang.JSON.stringify(b);this._swf.setStyle(a,b);},setStyles:function(a){a=YAHOO.lang.JSON.stringify(a);this._swf.setStyles(a);},setSeriesStyles:function(b){for(var a=0;a<b.length;a++){b[a]=YAHOO.lang.JSON.stringify(b[a]);}this._swf.setSeriesStyles(b);},destroy:function(){if(this._dataSource!==null){if(this._pollingID!==null){this._dataSource.clearInterval(this._pollingID);this._pollingID=null;}}if(this._dataTipFunction){YAHOO.widget.FlashAdapter.removeProxyFunction(this._dataTipFunction);}YAHOO.widget.Chart.superclass.destroy.call(this);},_initAttributes:function(a){YAHOO.widget.Chart.superclass._initAttributes.call(this,a);this.getAttributeConfig("request",{method:this._getRequest});this.setAttributeConfig("request",{method:this._setRequest});this.getAttributeConfig("dataSource",{method:this._getDataSource});this.setAttributeConfig("dataSource",{method:this._setDataSource});this.getAttributeConfig("series",{method:this._getSeriesDefs});this.setAttributeConfig("series",{method:this._setSeriesDefs});this.getAttributeConfig("categoryNames",{method:this._getCategoryNames});this.setAttributeConfig("categoryNames",{validator:YAHOO.lang.isArray,method:this._setCategoryNames});this.getAttributeConfig("dataTipFunction",{method:this._getDataTipFunction});this.setAttributeConfig("dataTipFunction",{method:this._setDataTipFunction});this.getAttributeConfig("polling",{method:this._getPolling});this.setAttributeConfig("polling",{method:this._setPolling});},_loadHandler:function(){this._swf.setType(this._type);if(this._attributes.style){var a=this._attributes.style;this.setStyles(a);}YAHOO.widget.Chart.superclass._loadHandler.call(this);if(this._dataSource){this.set("dataSource",this._dataSource);}},refreshData:function(){if(!this._initialized){return;
}if(this._dataSource!==null){if(this._pollingID!==null){this._dataSource.clearInterval(this._pollingID);this._pollingID=null;}if(this._pollingInterval>0){this._pollingID=this._dataSource.setInterval(this._pollingInterval,this._request,this._loadDataHandler,this);}this._dataSource.sendRequest(this._request,this._loadDataHandler,this);}},_loadDataHandler:function(d,c,k){if(this._swf){if(k){}else{var h;if(this._seriesLabelFunctions){var j=this._seriesLabelFunctions.length;for(h=0;h<j;h++){YAHOO.widget.FlashAdapter.removeProxyFunction(this._seriesLabelFunctions[h]);}this._seriesLabelFunction=null;}this._seriesLabelFunctions=[];var f=[];var e=0;var l=null;if(this._seriesDefs!==null){e=this._seriesDefs.length;for(h=0;h<e;h++){l=this._seriesDefs[h];var b={};for(var a in l){if(YAHOO.lang.hasOwnProperty(l,a)){if(a=="style"){if(l.style!==null){b.style=YAHOO.lang.JSON.stringify(l.style);}}else{if(a=="labelFunction"){if(l.labelFunction!==null&&typeof l.labelFunction=="function"){b.labelFunction=YAHOO.widget.FlashAdapter.createProxyFunction(l.labelFunction);this._seriesLabelFunctions.push(b.labelFunction);}}else{b[a]=l[a];}}}}f.push(b);}}if(e>0){for(h=0;h<e;h++){l=f[h];if(!l.type){l.type=this._type;}l.dataProvider=c.results;}}else{var g={type:this._type,dataProvider:c.results};f.push(g);}this._swf.setDataProvider(f);}}},_request:"",_getRequest:function(){return this._request;},_setRequest:function(a){this._request=a;this.refreshData();},_dataSource:null,_getDataSource:function(){return this._dataSource;},_setDataSource:function(a){this._dataSource=a;this.refreshData();},_seriesDefs:null,_getSeriesDefs:function(){return this._seriesDefs;},_setSeriesDefs:function(a){this._seriesDefs=a;this.refreshData();},_getCategoryNames:function(){this._swf.getCategoryNames();},_setCategoryNames:function(a){this._swf.setCategoryNames(a);},_setDataTipFunction:function(a){if(this._dataTipFunction){YAHOO.widget.FlashAdapter.removeProxyFunction(this._dataTipFunction);}if(a&&typeof a=="function"){a=YAHOO.widget.FlashAdapter.createProxyFunction(a);this._dataTipFunction=a;}this._swf.setDataTipFunction(a);},_getPolling:function(){return this._pollingInterval;},_setPolling:function(a){this._pollingInterval=a;this.refreshData();}});YAHOO.widget.Chart.SWFURL="assets/charts.swf";YAHOO.widget.PieChart=function(a,c,b){YAHOO.widget.PieChart.superclass.constructor.call(this,"pie",a,c,b);};YAHOO.lang.extend(YAHOO.widget.PieChart,YAHOO.widget.Chart,{_initAttributes:function(a){YAHOO.widget.PieChart.superclass._initAttributes.call(this,a);this.getAttributeConfig("dataField",{method:this._getDataField});this.setAttributeConfig("dataField",{validator:YAHOO.lang.isString,method:this._setDataField});this.getAttributeConfig("categoryField",{method:this._getCategoryField});this.setAttributeConfig("categoryField",{validator:YAHOO.lang.isString,method:this._setCategoryField});},_getDataField:function(){return this._swf.getDataField();},_setDataField:function(a){this._swf.setDataField(a);},_getCategoryField:function(){return this._swf.getCategoryField();},_setCategoryField:function(a){this._swf.setCategoryField(a);}});YAHOO.widget.CartesianChart=function(c,a,d,b){YAHOO.widget.CartesianChart.superclass.constructor.call(this,c,a,d,b);};YAHOO.lang.extend(YAHOO.widget.CartesianChart,YAHOO.widget.Chart,{_xAxisLabelFunction:null,_yAxisLabelFunction:null,destroy:function(){if(this._xAxisLabelFunction){YAHOO.widget.FlashAdapter.removeProxyFunction(this._xAxisLabelFunction);this._xAxisLabelFunction=null;}if(this._yAxisLabelFunction){YAHOO.widget.FlashAdapter.removeProxyFunction(this._yAxisLabelFunction);this._yAxisLabelFunction=null;}YAHOO.widget.CartesianChart.superclass.destroy.call(this);},_initAttributes:function(a){YAHOO.widget.CartesianChart.superclass._initAttributes.call(this,a);this.getAttributeConfig("xField",{method:this._getXField});this.setAttributeConfig("xField",{validator:YAHOO.lang.isString,method:this._setXField});this.getAttributeConfig("yField",{method:this._getYField});this.setAttributeConfig("yField",{validator:YAHOO.lang.isString,method:this._setYField});this.setAttributeConfig("xAxis",{method:this._setXAxis});this.setAttributeConfig("yAxis",{method:this._setYAxis});},_getXField:function(){return this._swf.getHorizontalField();},_setXField:function(a){this._swf.setHorizontalField(a);},_getYField:function(){return this._swf.getVerticalField();},_setYField:function(a){this._swf.setVerticalField(a);},_setXAxis:function(b){if(this._xAxisLabelFunction!==null){YAHOO.widget.FlashAdapter.removeProxyFunction(this._xAxisLabelFunction);this._xAxisLabelFunction=null;}var a={};for(var c in b){if(c=="labelFunction"){if(b.labelFunction!==null){if(typeof b.labelFunction=="function"){a.labelFunction=YAHOO.widget.FlashAdapter.createProxyFunction(b.labelFunction);}else{a.labelFunction=b.labelFunction;}this._xAxisLabelFunction=a.labelFunction;}}else{a[c]=b[c];}}this._swf.setHorizontalAxis(a);},_setYAxis:function(b){if(this._yAxisLabelFunction!==null){YAHOO.widget.FlashAdapter.removeProxyFunction(this._yAxisLabelFunction);this._yAxisLabelFunction=null;}var a={};for(var c in b){if(c=="labelFunction"){if(b.labelFunction!==null){if(typeof b.labelFunction=="function"){a.labelFunction=YAHOO.widget.FlashAdapter.createProxyFunction(b.labelFunction);}else{a.labelFunction=b.labelFunction;}this._yAxisLabelFunction=a.labelFunction;}}else{a[c]=b[c];}}this._swf.setVerticalAxis(a);}});YAHOO.widget.LineChart=function(a,c,b){YAHOO.widget.LineChart.superclass.constructor.call(this,"line",a,c,b);};YAHOO.lang.extend(YAHOO.widget.LineChart,YAHOO.widget.CartesianChart);YAHOO.widget.ColumnChart=function(a,c,b){YAHOO.widget.ColumnChart.superclass.constructor.call(this,"column",a,c,b);};YAHOO.lang.extend(YAHOO.widget.ColumnChart,YAHOO.widget.CartesianChart);YAHOO.widget.BarChart=function(a,c,b){YAHOO.widget.BarChart.superclass.constructor.call(this,"bar",a,c,b);};YAHOO.lang.extend(YAHOO.widget.BarChart,YAHOO.widget.CartesianChart);YAHOO.widget.StackedColumnChart=function(a,c,b){YAHOO.widget.StackedColumnChart.superclass.constructor.call(this,"stackcolumn",a,c,b);
};YAHOO.lang.extend(YAHOO.widget.StackedColumnChart,YAHOO.widget.CartesianChart);YAHOO.widget.StackedBarChart=function(a,c,b){YAHOO.widget.StackedBarChart.superclass.constructor.call(this,"stackbar",a,c,b);};YAHOO.lang.extend(YAHOO.widget.StackedBarChart,YAHOO.widget.CartesianChart);YAHOO.widget.DraggableLineChart=function(a,c,b){YAHOO.widget.DraggableLineChart.superclass.constructor.call(this,a,c,b);this.createEvent("itemDDStartEvent");this.createEvent("itemDDEvent");this.createEvent("itemDDEndEvent");};YAHOO.lang.extend(YAHOO.widget.DraggableLineChart,YAHOO.widget.LineChart,{mouseX:0,mouseY:0,valueTracker:{id:"valueTracker",enabled:false,padding:10,backgroundColor:"rgb(221, 221, 221)",top:0,left:0,fix:10},draggedItemIdx:null,wmode:"transparent",_eventHandler:function(b){YAHOO.widget.DraggableLineChart.superclass._eventHandler.call(this,b);var a=b.type;switch(a){case"swfReady":this.onSwfReady(b);return;case"itemDDStartEvent":this.onItemDDStart(b);return;case"itemDDEvent":this.onItemDD(b);return;case"itemDDEndEvent":this.onItemDDEnd(b);return;default:return;}},onDestroy:function(){YAHOO.widget.DraggableLineChart.superclass.onDestroy.call(this);delete window[this.temporaryValueTipFnName];},setTemporaryValueTipRenderer:function(b){var a=this;this.temporaryValueTipFnName=this.createFnProxy(function(f,d,e){var c=a._dataSource.liveData[o.index];return b(c,d,e);},this.temporaryValueTipFnName);this.swf.setTemporaryValueTipFunction(this.temporaryValueTipFnName);},onSwfReady:function(a){if(this.temporaryValueTipRenderer){this.setTemporaryValueTipRenderer(this.temporaryValueTipRenderer);}},onItemDDStart:function(a){if(this._seriesDefs[a.seriesIndex].dragable){this.draggedItemIdx=a.index;}},onItemDD:function(a){this.draggedItemIdx=a.index;},onItemDDEnd:function(b){if(this._seriesDefs[b.seriesIndex].dragable){var a=this._seriesDefs[b.seriesIndex].yField;this._dataSource.liveData[b.index][a]=b.newValue;this._setDataSource(this._dataSource);this.draggedItemIdx=null;}},getXAxis:function(){return this._swf.getHorizontalAxis();},getYAxis:function(){return this._swf.getVerticalAxis();}});YAHOO.widget.Axis=function(){};YAHOO.widget.Axis.prototype={type:null,reverse:false,labelFunction:null,labelSpacing:2,title:null};YAHOO.widget.NumericAxis=function(){YAHOO.widget.NumericAxis.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.NumericAxis,YAHOO.widget.Axis,{type:"numeric",minimum:NaN,maximum:NaN,majorUnit:NaN,minorUnit:NaN,snapToUnits:true,stackingEnabled:false,alwaysShowZero:true,scale:"linear",roundMajorUnit:true});YAHOO.widget.TimeAxis=function(){YAHOO.widget.TimeAxis.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.TimeAxis,YAHOO.widget.Axis,{type:"time",minimum:null,maximum:null,majorUnit:NaN,majorTimeUnit:null,minorUnit:NaN,minorTimeUnit:null,snapToUnits:true,stackingEnabled:false});YAHOO.widget.CategoryAxis=function(){YAHOO.widget.CategoryAxis.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.CategoryAxis,YAHOO.widget.Axis,{type:"category",categoryNames:null,calculateCategoryCount:false});YAHOO.widget.Series=function(){};YAHOO.widget.Series.prototype={type:null,displayName:null};YAHOO.widget.CartesianSeries=function(){YAHOO.widget.CartesianSeries.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.CartesianSeries,YAHOO.widget.Series,{xField:null,yField:null});YAHOO.widget.ColumnSeries=function(){YAHOO.widget.ColumnSeries.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.ColumnSeries,YAHOO.widget.CartesianSeries,{type:"column"});YAHOO.widget.LineSeries=function(){YAHOO.widget.LineSeries.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.LineSeries,YAHOO.widget.CartesianSeries,{type:"line"});YAHOO.widget.BarSeries=function(){YAHOO.widget.BarSeries.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.BarSeries,YAHOO.widget.CartesianSeries,{type:"bar"});YAHOO.widget.PieSeries=function(){YAHOO.widget.PieSeries.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.PieSeries,YAHOO.widget.Series,{type:"pie",dataField:null,categoryField:null,labelFunction:null});YAHOO.widget.StackedBarSeries=function(){YAHOO.widget.StackedBarSeries.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.StackedBarSeries,YAHOO.widget.CartesianSeries,{type:"stackbar"});YAHOO.widget.StackedColumnSeries=function(){YAHOO.widget.StackedColumnSeries.superclass.constructor.call(this);};YAHOO.lang.extend(YAHOO.widget.StackedColumnSeries,YAHOO.widget.CartesianSeries,{type:"stackcolumn"});YAHOO.register("charts",YAHOO.widget.Chart,{version:"@VERSION@",build:"@BUILD@"});