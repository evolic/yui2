if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["D:\work\nils\yui2\src\charts\build_tmp\charts.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "D:\\work\\nils\\yui2\\src\\charts\\build_tmp\\charts.js",
    code: []
};
_yuitest_coverage["D:\work\nils\yui2\src\charts\build_tmp\charts.js"].code=["/*extern ActiveXObject, __flash_unloadHandler, __flash_savedUnloadHandler */","/*!"," * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/"," *"," * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:"," * http://www.opensource.org/licenses/mit-license.php"," * @namespace YAHOO"," */","","YAHOO.namespace(\"deconcept\"); ","	","YAHOO.deconcept = YAHOO.deconcept || {};","","if(typeof YAHOO.deconcept.util == \"undefined\" || !YAHOO.deconcept.util)","{","	YAHOO.deconcept.util = {};","}","","if(typeof YAHOO.deconcept.SWFObjectUtil == \"undefined\" || !YAHOO.deconcept.SWFObjectUtil)","{","	YAHOO.deconcept.SWFObjectUtil = {};","}","","YAHOO.deconcept.SWFObject = function(swf, id, w, h, ver, c, quality, xiRedirectUrl, redirectUrl, detectKey)","{","	if(!document.getElementById) { return; }","	this.DETECT_KEY = detectKey ? detectKey : 'detectflash';","	this.skipDetect = YAHOO.deconcept.util.getRequestParameter(this.DETECT_KEY);","	this.params = {};","	this.variables = {};","	this.attributes = [];","	if(swf) { this.setAttribute('swf', swf); }","	if(id) { this.setAttribute('id', id); }","	if(w) { this.setAttribute('width', w); }","	if(h) { this.setAttribute('height', h); }","	if(ver) { this.setAttribute('version', new YAHOO.deconcept.PlayerVersion(ver.toString().split(\".\"))); }","	this.installedVer = YAHOO.deconcept.SWFObjectUtil.getPlayerVersion();","	if (!window.opera && document.all && this.installedVer.major > 7)","	{","		// only add the onunload cleanup if the Flash Player version supports External Interface and we are in IE","		YAHOO.deconcept.SWFObject.doPrepUnload = true;","	}","	if(c)","	{","		this.addParam('bgcolor', c);","	}","	var q = quality ? quality : 'high';","	this.addParam('quality', q);","	this.setAttribute('useExpressInstall', false);","	this.setAttribute('doExpressInstall', false);","	var xir = (xiRedirectUrl) ? xiRedirectUrl : window.location;","	this.setAttribute('xiRedirectUrl', xir);","	this.setAttribute('redirectUrl', '');","	if(redirectUrl)","	{","		this.setAttribute('redirectUrl', redirectUrl);","	}","};","","YAHOO.deconcept.SWFObject.prototype =","{","	useExpressInstall: function(path)","	{","		this.xiSWFPath = !path ? \"expressinstall.swf\" : path;","		this.setAttribute('useExpressInstall', true);","	},","	setAttribute: function(name, value){","		this.attributes[name] = value;","	},","	getAttribute: function(name){","		return this.attributes[name];","	},","	addParam: function(name, value){","		this.params[name] = value;","	},","	getParams: function(){","		return this.params;","	},","	addVariable: function(name, value){","		this.variables[name] = value;","	},","	getVariable: function(name){","		return this.variables[name];","	},","	getVariables: function(){","		return this.variables;","	},","	getVariablePairs: function(){","		var variablePairs = [];","		var key;","		var variables = this.getVariables();","		for(key in variables)","		{","			if(variables.hasOwnProperty(key))","			{","				variablePairs[variablePairs.length] = key +\"=\"+ variables[key];","			}","		}","		return variablePairs;","	},","	getSWFHTML: function() {","		var swfNode = \"\";","		var params = {};","		var key = \"\";","		var pairs = \"\";","		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { // netscape plugin architecture","			if (this.getAttribute(\"doExpressInstall\")) {","				this.addVariable(\"MMplayerType\", \"PlugIn\");","				this.setAttribute('swf', this.xiSWFPath);","			}","			swfNode = '<embed type=\"application/x-shockwave-flash\" src=\"'+ this.getAttribute('swf') +'\" width=\"'+ this.getAttribute('width') +'\" height=\"'+ this.getAttribute('height') +'\" style=\"'+ this.getAttribute('style') +'\"';","			swfNode += ' id=\"'+ this.getAttribute('id') +'\" name=\"'+ this.getAttribute('id') +'\" ';","			params = this.getParams();","			for(key in params)","			{","				if(params.hasOwnProperty(key))","				{","					swfNode += [key] +'=\"'+ params[key] +'\" ';","				}","			}","			pairs = this.getVariablePairs().join(\"&\");","			if (pairs.length > 0){ swfNode += 'flashvars=\"'+ pairs +'\"'; }","			swfNode += '/>';","		} else { // PC IE","			if (this.getAttribute(\"doExpressInstall\")) {","				this.addVariable(\"MMplayerType\", \"ActiveX\");","				this.setAttribute('swf', this.xiSWFPath);","			}","			swfNode = '<object id=\"'+ this.getAttribute('id') +'\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"'+ this.getAttribute('width') +'\" height=\"'+ this.getAttribute('height') +'\" style=\"'+ this.getAttribute('style') +'\">';","			swfNode += '<param name=\"movie\" value=\"'+ this.getAttribute('swf') +'\" />';","			params = this.getParams();","			for(key in params)","			{","				if(params.hasOwnProperty(key))","				{","					swfNode += '<param name=\"'+ key +'\" value=\"'+ params[key] +'\" />';","				}","			}","			pairs = this.getVariablePairs().join(\"&\");","			if(pairs.length > 0) {swfNode += '<param name=\"flashvars\" value=\"'+ pairs +'\" />';}","			swfNode += \"</object>\";","		}","		return swfNode;","	},","	write: function(elementId)","	{","		if(this.getAttribute('useExpressInstall')) {","			// check to see if we need to do an express install","			var expressInstallReqVer = new YAHOO.deconcept.PlayerVersion([6,0,65]);","			if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {","				this.setAttribute('doExpressInstall', true);","				this.addVariable(\"MMredirectURL\", escape(this.getAttribute('xiRedirectUrl')));","				document.title = document.title.slice(0, 47) + \" - Flash Player Installation\";","				this.addVariable(\"MMdoctitle\", document.title);","			}","		}","		if(this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version')))","		{","			var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;","			n.innerHTML = this.getSWFHTML();","			return true;","		}","		else","		{","			if(this.getAttribute('redirectUrl') !== \"\")","			{","				document.location.replace(this.getAttribute('redirectUrl'));","			}","		}","		return false;","	}","};","","/* ---- detection functions ---- */","YAHOO.deconcept.SWFObjectUtil.getPlayerVersion = function()","{","	var axo = null;","	var PlayerVersion = new YAHOO.deconcept.PlayerVersion([0,0,0]);","	if(navigator.plugins && navigator.mimeTypes.length)","	{","		var x = navigator.plugins[\"Shockwave Flash\"];","		if(x && x.description)","		{","			PlayerVersion = new YAHOO.deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\\s)+/, \"\").replace(/(\\s+r|\\s+b[0-9]+)/, \".\").split(\".\"));","		}","	}","	else if (navigator.userAgent && navigator.userAgent.indexOf(\"Windows CE\") >= 0)","	{ // if Windows CE","		var counter = 3;","		while(axo)","		{","			try","			{","				counter++;","				axo = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.\"+ counter);","//				document.write(\"player v: \"+ counter);","				PlayerVersion = new YAHOO.deconcept.PlayerVersion([counter,0,0]);","			}","			catch(e)","			{","				axo = null;","			}","		}","	}","	else","	{ // Win IE (non mobile)","		// do minor version lookup in IE, but avoid fp6 crashing issues","		// see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/","		try","		{","			axo = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.7\");","		}","		catch(e)","		{","			try","			{","				axo = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.6\");","				PlayerVersion = new YAHOO.deconcept.PlayerVersion([6,0,21]);","				axo.AllowScriptAccess = \"always\"; // error if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)","			}","			catch(e)","			{","				if(PlayerVersion.major == 6)","				{","					return PlayerVersion;","				}","			}","			try","			{","				axo = new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash\");","			}","			catch(e) {}","		}","		","		if(axo !== null)","		{","			PlayerVersion = new YAHOO.deconcept.PlayerVersion(axo.GetVariable(\"$version\").split(\" \")[1].split(\",\"));","		}","	}","	return PlayerVersion;","};","","YAHOO.deconcept.PlayerVersion = function(arrVersion)","{","	this.major = arrVersion[0] !== null ? parseInt(arrVersion[0], 0) : 0;","	this.minor = arrVersion[1] !== null ? parseInt(arrVersion[1], 0) : 0;","	this.rev = arrVersion[2] !== null ? parseInt(arrVersion[2], 0) : 0;","};","","YAHOO.deconcept.PlayerVersion.prototype.versionIsValid = function(fv)","{","	if(this.major < fv.major)","	{","		return false;","	}","	if(this.major > fv.major)","	{","		return true;","	}","	if(this.minor < fv.minor)","	{","		return false;","	}","	if(this.minor > fv.minor)","	{","		return true;","	}","	if(this.rev < fv.rev)","	{","		return false;","	}","	return true;","};","","/* ---- get value of query string param ---- */","YAHOO.deconcept.util =","{","	getRequestParameter: function(param)","	{","		var q = document.location.search || document.location.hash;","		if(param === null) { return q; }","		if(q)","		{","			var pairs = q.substring(1).split(\"&\");","			for(var i=0; i < pairs.length; i++)","			{","				if (pairs[i].substring(0, pairs[i].indexOf(\"=\")) == param)","				{","					return pairs[i].substring((pairs[i].indexOf(\"=\") + 1));","				}","			}","		}","		return \"\";","	}","};","","/* fix for video streaming bug */","YAHOO.deconcept.SWFObjectUtil.cleanupSWFs = function()","{","	var objects = document.getElementsByTagName(\"OBJECT\");","	for(var i = objects.length - 1; i >= 0; i--)","	{","		objects[i].style.display = 'none';","		for(var x in objects[i])","		{","			if(typeof objects[i][x] == 'function')","			{","				objects[i][x] = function(){};","			}","		}","	}","};","","// fixes bug in some fp9 versions see http://blog.deconcept.com/2006/07/28/swfobject-143-released/","if(YAHOO.deconcept.SWFObject.doPrepUnload)","{","	if(!YAHOO.deconcept.unloadSet)","	{","		YAHOO.deconcept.SWFObjectUtil.prepUnload = function()","		{","			__flash_unloadHandler = function(){};","			__flash_savedUnloadHandler = function(){};","			window.attachEvent(\"onunload\", YAHOO.deconcept.SWFObjectUtil.cleanupSWFs);","		};","		window.attachEvent(\"onbeforeunload\", YAHOO.deconcept.SWFObjectUtil.prepUnload);","		YAHOO.deconcept.unloadSet = true;","	}","}","","/* add document.getElementById if needed (mobile IE < 5) */","if(!document.getElementById && document.all)","{","	document.getElementById = function(id) { return document.all[id]; };","}","","","/**"," * Wraps Flash embedding functionality and allows communication with SWF through"," * attributes."," *"," * @namespace YAHOO.widget"," * @class FlashAdapter"," * @uses YAHOO.util.AttributeProvider"," */","YAHOO.widget.FlashAdapter = function(swfURL, containerID, attributes)","{","	// set up the initial events and attributes stuff","	this._queue = this._queue || [];","	this._events = this._events || {};","	this._configs = this._configs || {};","	attributes = attributes || {};","	","	//the Flash Player external interface code from Adobe doesn't play nicely","	//with the default value, yui-gen, in IE","	this._id = attributes.id = attributes.id || YAHOO.util.Dom.generateId(null, \"yuigen\");","	attributes.version = attributes.version || \"9.0.45\";","	attributes.backgroundColor = attributes.backgroundColor || \"#ffffff\";","	","	//we can't use the initial attributes right away","	//so save them for once the SWF finishes loading","	this._attributes = attributes;","	","	this._swfURL = swfURL;","	this._containerID = containerID;","	","	//embed the SWF file in the page","	this._embedSWF(this._swfURL, this._containerID, attributes.id, attributes.version,","		attributes.backgroundColor, attributes.expressInstall, attributes.wmode);","	","	/**","	 * Fires when the SWF is initialized and communication is possible.","	 * @event contentReady","	 */","	//Fix for iframe cross-domain issue with FF2x ","	try","	{","		this.createEvent(\"contentReady\");","	}","	catch(e){}","};","","YAHOO.extend(YAHOO.widget.FlashAdapter, YAHOO.util.AttributeProvider,","{","	/**","	 * The URL of the SWF file.","	 * @property _swfURL","	 * @type String","	 * @private","	 */","	_swfURL: null,","","	/**","	 * The ID of the containing DIV.","	 * @property _containerID","	 * @type String","	 * @private","	 */","	_containerID: null,","","	/**","	 * A reference to the embedded SWF file.","	 * @property _swf","	 * @private","	 */","	_swf: null,","","	/**","	 * The id of this instance.","	 * @property _id","	 * @type String","	 * @private","	 */","	_id: null,","","	/**","	 * Indicates whether the SWF has been initialized and is ready","	 * to communicate with JavaScript","	 * @property _initialized","	 * @type Boolean","	 * @private","	 */","	_initialized: false,","	","	/**","	 * The initializing attributes are stored here until the SWF is ready.","	 * @property _attributes","	 * @type Object","	 * @private","	 */","	_attributes: null, //the intializing attributes","","	/**","	 * Public accessor to the unique name of the FlashAdapter instance.","	 *","	 * @method toString","	 * @return {String} Unique name of the FlashAdapter instance.","	 */","	toString: function()","	{","		return \"FlashAdapter \" + this._id;","	},","","	/**","	 * Nulls out the entire FlashAdapter instance and related objects and removes attached","	 * event listeners and clears out DOM elements inside the container. After calling","	 * this method, the instance reference should be expliclitly nulled by implementer,","	 * as in myChart = null. Use with caution!","	 *","	 * @method destroy","	 */","	destroy: function()","	{","		//kill the Flash Player instance","		if(this._swf)","		{","			var container = YAHOO.util.Dom.get(this._containerID);","			container.removeChild(this._swf);","		}","		","		var instanceName = this._id;","		","		//null out properties","		for(var prop in this)","		{","			if(YAHOO.lang.hasOwnProperty(this, prop))","			{","				this[prop] = null;","			}","		}","		","	},","","	/**","	 * Embeds the SWF in the page and associates it with this instance.","	 *","	 * @method _embedSWF","	 * @private","	 */","	_embedSWF: function(swfURL, containerID, swfID, version, backgroundColor, expressInstall, wmode)","	{","		//standard SWFObject embed","		var swfObj = new YAHOO.deconcept.SWFObject(swfURL, swfID, \"100%\", \"100%\", version, backgroundColor);","","		if(expressInstall)","		{","			swfObj.useExpressInstall(expressInstall);","		}","","		//make sure we can communicate with ExternalInterface","		swfObj.addParam(\"allowScriptAccess\", \"always\");","		","		if(wmode)","		{","			swfObj.addParam(\"wmode\", wmode);","		}","		","		//again, a useful ExternalInterface trick","		swfObj.addVariable(\"allowedDomain\", document.location.hostname);","","		//tell the SWF which HTML element it is in","		swfObj.addVariable(\"elementID\", swfID);","","		// set the name of the function to call when the swf has an event","		swfObj.addVariable(\"eventHandler\", \"YAHOO.widget.FlashAdapter.eventHandler\");","","		var container = YAHOO.util.Dom.get(containerID);","		var result = swfObj.write(container);","		if(result)","		{","			this._swf = YAHOO.util.Dom.get(swfID);","			//if successful, let's add an owner property to the SWF reference","			//this will allow the event handler to communicate with a YAHOO.widget.FlashAdapter","			this._swf.owner = this;","		}","		else","		{","		}","	},","","	/**","	 * Handles or re-dispatches events received from the SWF.","	 *","	 * @method _eventHandler","	 * @private","	 */","	_eventHandler: function(event)","	{","		var type = event.type;","		switch(type)","		{","			case \"swfReady\":","   				this._loadHandler();","   				this.fireEvent(\"contentReady\");","				return;","			case \"log\":","				return;","		}","		","		//be sure to return after your case or the event will automatically fire!","		this.fireEvent(type, event);","	},","","	/**","	 * Called when the SWF has been initialized.","	 *","	 * @method _loadHandler","	 * @private","	 */","	_loadHandler: function()","	{","		this._initialized = false;","		this._initAttributes(this._attributes);","		this.setAttributes(this._attributes, true);","		","		this._initialized = true;","	},","	","	set: function(name, value)","	{","		//save all the attributes in case the swf reloads","		//so that we can pass them in again","		this._attributes[name] = value;","		YAHOO.widget.FlashAdapter.superclass.set.call(this, name, value);","	},","	","	/**","	 * Initializes the attributes.","	 *","	 * @method _initAttributes","	 * @private","	 */","	_initAttributes: function(attributes)","	{","		//should be overridden if other attributes need to be set up","","		/**","		 * @attribute wmode","		 * @description Sets the window mode of the Flash Player control. May be","		 *		\"window\", \"opaque\", or \"transparent\". Only available in the constructor","		 *		because it may not be set after Flash Player has been embedded in the page.","		 * @type String","		 */","		 ","		/**","		 * @attribute expressInstall","		 * @description URL pointing to a SWF file that handles Flash Player's express","		 *		install feature. Only available in the constructor because it may not be","		 *		set after Flash Player has been embedded in the page.","		 * @type String","		 */","","		/**","		 * @attribute version","		 * @description Minimum required version for the SWF file. Only available in the constructor because it may not be","		 *		set after Flash Player has been embedded in the page.","		 * @type String","		 */","","		/**","		 * @attribute backgroundColor","		 * @description The background color of the SWF. Only available in the constructor because it may not be","		 *		set after Flash Player has been embedded in the page.","		 * @type String","		 */","		 ","		/**","		 * @attribute altText","		 * @description The alternative text to provide for screen readers and other assistive technology.","		 * @type String","		 */","		this.getAttributeConfig(\"altText\",","		{","			method: this._getAltText","		});","		this.setAttributeConfig(\"altText\",","		{","			method: this._setAltText","		});","		","		/**","		 * @attribute swfURL","		 * @description Absolute or relative URL to the SWF displayed by the FlashAdapter. Only available in the constructor because it may not be","		 *		set after Flash Player has been embedded in the page.","		 * @type String","		 */","		this.getAttributeConfig(\"swfURL\",","		{","			method: this._getSWFURL","		});","	},","	","	/**","	 * Getter for swfURL attribute.","	 *","	 * @method _getSWFURL","	 * @private","	 */","	_getSWFURL: function()","	{","		return this._swfURL;","	},","	","	/**","	 * Getter for altText attribute.","	 *","	 * @method _getAltText","	 * @private","	 */","	_getAltText: function()","	{","		return this._swf.getAltText();","	},","","	/**","	 * Setter for altText attribute.","	 *","	 * @method _setAltText","	 * @private","	 */","	_setAltText: function(value)","	{","		return this._swf.setAltText(value);","	}","});","","/**"," * Receives event messages from SWF and passes them to the correct instance"," * of FlashAdapter."," *"," * @method YAHOO.widget.FlashAdapter.eventHandler"," * @static"," * @private"," */","YAHOO.widget.FlashAdapter.eventHandler = function(elementID, event)","{","	var loadedSWF = YAHOO.util.Dom.get(elementID);","	if(!loadedSWF.owner)","	{","		//fix for ie: if owner doesn't exist yet, try again in a moment","		setTimeout(function() { YAHOO.widget.FlashAdapter.eventHandler( elementID, event ); }, 0);","	}","	else","	{","		loadedSWF.owner._eventHandler(event);","	}","};","","/**"," * The number of proxy functions that have been created."," * @static"," * @private"," */","YAHOO.widget.FlashAdapter.proxyFunctionCount = 0;","","/**"," * Creates a globally accessible function that wraps a function reference."," * Returns the proxy function's name as a string for use by the SWF through"," * ExternalInterface."," *"," * @method YAHOO.widget.FlashAdapter.createProxyFunction"," * @static"," * @private"," */","YAHOO.widget.FlashAdapter.createProxyFunction = function(func)","{","	var index = YAHOO.widget.FlashAdapter.proxyFunctionCount;","	YAHOO.widget.FlashAdapter[\"proxyFunction\" + index] = function()","	{","		return func.apply(null, arguments);","	};","	YAHOO.widget.FlashAdapter.proxyFunctionCount++;","	return \"YAHOO.widget.FlashAdapter.proxyFunction\" + index.toString();","};","","/**"," * Removes a function created with createProxyFunction()"," * "," * @method YAHOO.widget.FlashAdapter.removeProxyFunction"," * @static"," * @private"," */","YAHOO.widget.FlashAdapter.removeProxyFunction = function(funcName)","{","	//quick error check","	if(!funcName || funcName.indexOf(\"YAHOO.widget.FlashAdapter.proxyFunction\") < 0)","	{","		return;","	}","	","	funcName = funcName.substr(26);","	YAHOO.widget.FlashAdapter[funcName] = null;","};","","/**"," * The Charts widget provides a Flash control for displaying data"," * graphically by series across A-grade browsers with Flash Player installed."," *"," * @module charts"," * @requires yahoo, dom, event, datasource"," * @title Charts Widget"," * @experimental"," */"," ","/****************************************************************************/","/****************************************************************************/","/****************************************************************************/","","/**"," * Chart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class Chart"," * @uses YAHOO.widget.FlashAdapter"," * @constructor"," * @param type {String} The char type. May be \"line\", \"column\", \"bar\", or \"pie\""," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.Chart = function(type, containerId, dataSource, attributes)","{","	YAHOO.widget.Chart.superclass.constructor.call(this, YAHOO.widget.Chart.SWFURL, containerId, attributes);","	","	this._type = type;","	this._dataSource = dataSource;","	","	/**","	 * Fires when the user moves the mouse over the bounds of an item renderer in the chart.","	 *","	 * @event itemMouseOverEvent","	 * @param event.type {String} The event type","	 * @param event.item {Object} The data displayed by the renderer","	 * @param event.index {Number} The position within the series that the item appears.","	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.","	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.","	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.","	 */","	this.createEvent(\"itemMouseOverEvent\");","	","	/**","	 * Fires when the user moves the mouse out of the bounds of an item renderer in the chart.","	 *","	 * @event itemMouseOutEvent","	 * @param event.type {String} The event type","	 * @param event.item {Object} The data displayed by the renderer","	 * @param event.index {Number} The position within the series that the item appears.","	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.","	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.","	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.","	 */","	this.createEvent(\"itemMouseOutEvent\");","	","	/**","	 * Fires when the user clicks an item renderer in the chart with the mouse.","	 *","	 * @event itemClickEvent","	 * @param event.type {String} The event type","	 * @param event.item {Object} The data displayed by the renderer","	 * @param event.index {Number} The position within the series that the item appears.","	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.","	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.","	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.","	 */","	this.createEvent(\"itemClickEvent\");","	","	/**","	 * Fires when the user double-clicks an item renderer in the chart with the mouse.","	 *","	 * @event itemDoubleClickEvent","	 * @param event.type {String} The event type","	 * @param event.item {Object} The data displayed by the renderer","	 * @param event.index {Number} The position within the series that the item appears.","	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.","	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.","	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.","	 */","	this.createEvent(\"itemDoubleClickEvent\");","	","	/**","	 * Fires when the user presses the mouse down on an item to initiate a drag action.","	 *","	 * @event itemDragStartEvent","	 * @param event.type {String} The event type","	 * @param event.item {Object} The data displayed by the renderer","	 * @param event.index {Number} The position within the series that the item appears.","	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.","	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.","	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.","	 */","	this.createEvent(\"itemDragStartEvent\");","	","	/**","	 * Fires when the user moves the mouse during a drag action.","	 *","	 * @event itemDragEvent","	 * @param event.type {String} The event type","	 * @param event.item {Object} The data displayed by the renderer","	 * @param event.index {Number} The position within the series that the item appears.","	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.","	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.","	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.","	 */","	this.createEvent(\"itemDragEvent\");","","	/**","	 * Fires when the user releases the mouse during a drag action.","	 *","	 * @event itemDragEndEvent","	 * @param event.type {String} The event type","	 * @param event.item {Object} The data displayed by the renderer","	 * @param event.index {Number} The position within the series that the item appears.","	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.","	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.","	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.","	 */","	this.createEvent(\"itemDragEndEvent\");","};","","YAHOO.extend(YAHOO.widget.Chart, YAHOO.widget.FlashAdapter,","{","	/**","	 * The type of this chart instance.","	 * @property _type","	 * @type String","	 * @private","	 */","	_type: null,","","	/**","	 * The id returned from the DataSource's setInterval function.","	 * @property _pollingID","	 * @type Number","	 * @private","	 */","	_pollingID: null,","","	/**","	 * The time, in ms, between requests for data.","	 * @property _pollingInterval","	 * @type Number","	 * @private","	 */","	_pollingInterval: null,","","	/**","	 * Stores a reference to the dataTipFunction created by","	 * YAHOO.widget.FlashAdapter.createProxyFunction()","	 * @property _dataTipFunction","	 * @type String","	 * @private","	 */","	_dataTipFunction: null,","	","	/**","	 * Stores references to series labelFunction values created by","	 * YAHOO.widget.FlashAdapter.createProxyFunction()","	 * @property _seriesLabelFunctions","	 * @type Array","	 * @private","	 */","	_seriesLabelFunctions: null,","","	/**","	 * Public accessor to the unique name of the Chart instance.","	 *","	 * @method toString","	 * @return {String} Unique name of the Chart instance.","	 */","	toString: function()","	{","		return \"Chart \" + this._id;","	},","	","	/**","	 * Sets a single style value on the Chart instance.","	 *","	 * @method setStyle","	 * @param name {String} Name of the Chart style value to change.","	 * @param value {Object} New value to pass to the Chart style.","	 */","	setStyle: function(name, value)","	{","		//we must jsonify this because Flash Player versions below 9.0.60 don't handle","		//complex ExternalInterface parsing correctly","		value = YAHOO.lang.JSON.stringify(value);","		this._swf.setStyle(name, value);","	},","	","	/**","	 * Resets all styles on the Chart instance.","	 *","	 * @method setStyles","	 * @param styles {Object} Initializer for all Chart styles.","	 */","	setStyles: function(styles)","	{","		//we must jsonify this because Flash Player versions below 9.0.60 don't handle","		//complex ExternalInterface parsing correctly","		styles = YAHOO.lang.JSON.stringify(styles);","		this._swf.setStyles(styles);","	},","	","	/**","	 * Sets the styles on all series in the Chart.","	 *","	 * @method setSeriesStyles","	 * @param styles {Array} Initializer for all Chart series styles.","	 */","	setSeriesStyles: function(styles)","	{","		//we must jsonify this because Flash Player versions below 9.0.60 don't handle","		//complex ExternalInterface parsing correctly","		for(var i = 0; i < styles.length; i++)","		{","			styles[i] = YAHOO.lang.JSON.stringify(styles[i]);	","		}","		this._swf.setSeriesStyles(styles);","	},","	","	destroy: function()","	{","		//stop polling if needed","		if(this._dataSource !== null)","		{","			if(this._pollingID !== null)","			{","				this._dataSource.clearInterval(this._pollingID);","				this._pollingID = null;","			}","		}","		","		//remove proxy functions","		if(this._dataTipFunction)","		{","			YAHOO.widget.FlashAdapter.removeProxyFunction(this._dataTipFunction);","		}","		","		//call last","		YAHOO.widget.Chart.superclass.destroy.call(this);","	},","	","	/**","	 * Initializes the attributes.","	 *","	 * @method _initAttributes","	 * @private","	 */","	_initAttributes: function(attributes)","	{","		YAHOO.widget.Chart.superclass._initAttributes.call(this, attributes);","","		/**","		 * @attribute request","		 * @description Request to be sent to the Chart's DataSource.","		 * @type String","		 */","		this.getAttributeConfig(\"request\",","		{","			method: this._getRequest","		});","		","		this.setAttributeConfig(\"request\",","		{","			method: this._setRequest","		});","		","		/**","		 * @attribute dataSource","		 * @description The DataSource instance to display in the Chart.","		 * @type DataSource","		 */","		this.getAttributeConfig(\"dataSource\",","		{","			method: this._getDataSource","		});","		","		this.setAttributeConfig(\"dataSource\",","		{","			method: this._setDataSource","		});","		","		/**","		 * @attribute series","		 * @description Defines the series to be displayed by the Chart.","		 * @type Array","		 */","		this.getAttributeConfig(\"series\",","		{","			method: this._getSeriesDefs","		});","		","		this.setAttributeConfig(\"series\",","		{","			method: this._setSeriesDefs","		});","		","		/**","		 * @attribute categoryNames","		 * @description Defines the names of the categories to be displayed in the Chart..","		 * @type Array","		 */","		this.getAttributeConfig(\"categoryNames\",","		{","			method: this._getCategoryNames","		});","		","		this.setAttributeConfig(\"categoryNames\",","		{","			validator: YAHOO.lang.isArray,","			method: this._setCategoryNames","		});","		","		/**","		 * @attribute dataTipFunction","		 * @description The string representation of a globally-accessible function","		 * that may be called by the SWF to generate the datatip text for a Chart's item.","		 * @type String","		 */","		this.getAttributeConfig(\"dataTipFunction\",","		{","			method: this._getDataTipFunction","		});","		","		this.setAttributeConfig(\"dataTipFunction\",","		{","			method: this._setDataTipFunction","		});","","		/**","		 * @attribute polling","		 * @description A numeric value indicating the number of milliseconds between","		 * polling requests to the DataSource.","		 * @type Number","		 */","		this.getAttributeConfig(\"polling\",","		{","			method: this._getPolling","		});","","		this.setAttributeConfig(\"polling\",","		{","			method: this._setPolling","		});","	},","	","	/**","	 * Called when the SWF is ready for communication. Sets the type, initializes","	 * the styles, and sets the DataSource.","	 *","	 * @method _loadHandler","	 * @private","	 */","	_loadHandler: function()","	{","		//the type is set separately because it must be first!","		this._swf.setType(this._type);","		","		//set initial styles","		if(this._attributes.style)","		{","			var style = this._attributes.style;","			this.setStyles(style);		","		}","		","		YAHOO.widget.Chart.superclass._loadHandler.call(this);","		","		if(this._dataSource)","		{","			this.set(\"dataSource\", this._dataSource);","		}","	},","","	/**","	 * Sends (or resends) the request to the DataSource.","	 *","	 * @method refreshData","	 */","	refreshData: function()","	{","		if(!this._initialized)","		{","			return;","		}","		","		if(this._dataSource !== null)","		{","			if(this._pollingID !== null)","			{","				this._dataSource.clearInterval(this._pollingID);","				this._pollingID = null;","			}","			","			if(this._pollingInterval > 0)","			{","				this._pollingID = this._dataSource.setInterval(this._pollingInterval, this._request, this._loadDataHandler, this);","			}","			this._dataSource.sendRequest(this._request, this._loadDataHandler, this);","		}","	},","","	/**","	 * Called when the DataSource receives new data. The series definitions are used","	 * to build a data provider for the SWF chart.","	 *","	 * @method _loadDataHandler","	 * @private","	 */","	_loadDataHandler: function(request, response, error)","	{","		if(this._swf)","		{","			if(error)","			{","			}","			else","			{","				var i;","				if(this._seriesLabelFunctions)","				{","					var count = this._seriesLabelFunctions.length;","					for(i = 0; i < count; i++)","					{","						YAHOO.widget.FlashAdapter.removeProxyFunction(this._seriesLabelFunctions[i]);","					}","					this._seriesLabelFunction = null;","				}","				this._seriesLabelFunctions = [];","","				//make a copy of the series definitions so that we aren't","				//editing them directly.","				var dataProvider = [];	","				var seriesCount = 0;","				var currentSeries = null;","				if(this._seriesDefs !== null)","				{","					seriesCount = this._seriesDefs.length;","					for(i = 0; i < seriesCount; i++)","					{","						currentSeries = this._seriesDefs[i];","						var clonedSeries = {};","						for(var prop in currentSeries)","						{","							if(YAHOO.lang.hasOwnProperty(currentSeries, prop))","							{","								if(prop == \"style\")","								{","									if(currentSeries.style !== null)","									{","										clonedSeries.style = YAHOO.lang.JSON.stringify(currentSeries.style);","									}","								}","","								else if(prop == \"labelFunction\")","								{","									if(currentSeries.labelFunction !== null &&","										typeof currentSeries.labelFunction == \"function\")","									{","										clonedSeries.labelFunction = YAHOO.widget.FlashAdapter.createProxyFunction(currentSeries.labelFunction);","										this._seriesLabelFunctions.push(clonedSeries.labelFunction);","									}","								}","","								else","								{","									clonedSeries[prop] = currentSeries[prop];","								}","							}","						}","						dataProvider.push(clonedSeries);","					}","				}","","				if(seriesCount > 0)","				{","					for(i = 0; i < seriesCount; i++)","					{","						currentSeries = dataProvider[i];","						if(!currentSeries.type)","						{","							currentSeries.type = this._type;","						}","						currentSeries.dataProvider = response.results;","					}","				}","				else","				{","					var series = {type: this._type, dataProvider: response.results};","					dataProvider.push(series);","				}","				this._swf.setDataProvider(dataProvider);","			}","		}","	},","","	/**","	 * Storage for the request attribute.","	 * ","	 * @property _request","	 * @private","	 */","	_request: \"\",","	","	/**","	 * Getter for the request attribute.","	 *","	 * @method _getRequest","	 * @private","	 */","	_getRequest: function()","	{","		return this._request;","	},","	","	/**","	 * Setter for the request attribute.","	 *","	 * @method _setRequest","	 * @private","	 */","	_setRequest: function(value)","	{","		this._request = value;","		this.refreshData();","	},","","	/**","	 * Storage for the dataSource attribute.","	 * ","	 * @property _dataSource","	 * @private","	 */","	_dataSource: null,","	","	/**","	 * Getter for the dataSource attribute.","	 *","	 * @method _getDataSource","	 * @private","	 */","	_getDataSource: function()","	{","		return this._dataSource;","	},","","	/**","	 * Setter for the dataSource attribute.","	 *","	 * @method _setDataSource","	 * @private","	 */","	_setDataSource: function(value)","	{	","		this._dataSource = value;","		this.refreshData();","	},","	","	/**","	 * Storage for the series attribute.","	 * ","	 * @property _seriesDefs","	 * @private","	 */","	_seriesDefs: null,","	","	/**","	 * Getter for the series attribute.","	 *","	 * @method _getSeriesDefs","	 * @private","	 */","	_getSeriesDefs: function()","	{","		return this._seriesDefs;","	},","	","	/**","	 * Setter for the series attribute.","	 *","	 * @method _setSeriesDefs","	 * @private","	 */","	_setSeriesDefs: function(value)","	{","		this._seriesDefs = value;","		this.refreshData();","	},","","	/**","	 * Getter for the categoryNames attribute.","	 *","	 * @method _getCategoryNames","	 * @private","	 */","	_getCategoryNames: function()","	{","		this._swf.getCategoryNames();","	},","","	/**","	 * Setter for the categoryNames attribute.","	 *","	 * @method _setCategoryNames","	 * @private","	 */","	_setCategoryNames: function(value)","	{","		this._swf.setCategoryNames(value);","	},","	","	/**","	 * Setter for the dataTipFunction attribute.","	 *","	 * @method _setDataTipFunction","	 * @private","	 */","	_setDataTipFunction: function(value)","	{","		if(this._dataTipFunction)","		{","			YAHOO.widget.FlashAdapter.removeProxyFunction(this._dataTipFunction);","		}","		","		if(value && typeof value == \"function\")","		{","			value = YAHOO.widget.FlashAdapter.createProxyFunction(value);","			this._dataTipFunction = value;","		}","		this._swf.setDataTipFunction(value);","	},","","	/**","	 * Getter for the polling attribute.","	 *","	 * @method _getPolling","	 * @private","	 */","	_getPolling: function()","	{","		return this._pollingInterval;","	},","","	/**","	 * Setter for the polling attribute.","	 *","	 * @method _setPolling","	 * @private","	 */","	_setPolling: function(value)","	{","		this._pollingInterval = value;","		this.refreshData();","	}","});","","/**"," * Storage for the dataTipFunction attribute."," *"," * @property Chart.SWFURL"," * @private"," * @static"," * @final"," * @default \"assets/charts.swf\""," */","YAHOO.widget.Chart.SWFURL = \"assets/charts.swf\";","","/**"," * PieChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class PieChart"," * @uses YAHOO.widget.Chart"," * @constructor"," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.PieChart = function(containerId, dataSource, attributes)","{","	YAHOO.widget.PieChart.superclass.constructor.call(this, \"pie\", containerId, dataSource, attributes);","};","","YAHOO.lang.extend(YAHOO.widget.PieChart, YAHOO.widget.Chart,","{","	/**","	 * Initializes the attributes.","	 *","	 * @method _initAttributes","	 * @private","	 */","	_initAttributes: function(attributes)","	{	","		YAHOO.widget.PieChart.superclass._initAttributes.call(this, attributes);","		","		/**","		 * @attribute dataField","		 * @description The field in each item that corresponds to the data value.","		 * @type String","		 */","		this.getAttributeConfig(\"dataField\",","		{","			method: this._getDataField","		});","   ","		this.setAttributeConfig(\"dataField\",","		{","			validator: YAHOO.lang.isString,","			method: this._setDataField","		});","   ","		/**","		 * @attribute categoryField","		 * @description The field in each item that corresponds to the category value.","		 * @type String","		 */","		this.getAttributeConfig(\"categoryField\",","		{","			method: this._getCategoryField","		});","   ","		this.setAttributeConfig(\"categoryField\",","		{","			validator: YAHOO.lang.isString,","			method: this._setCategoryField","		});","	},","","	/**","	 * Getter for the dataField attribute.","	 *","	 * @method _getDataField","	 * @private","	 */","	_getDataField: function()","	{","		return this._swf.getDataField();","	},","","	/**","	 * Setter for the dataField attribute.","	 *","	 * @method _setDataField","	 * @private","	 */","	_setDataField: function(value)","	{","		this._swf.setDataField(value);","	},","","	/**","	 * Getter for the categoryField attribute.","	 *","	 * @method _getCategoryField","	 * @private","	 */","	_getCategoryField: function()","	{","		return this._swf.getCategoryField();","	},","","	/**","	 * Setter for the categoryField attribute.","	 *","	 * @method _setCategoryField","	 * @private","	 */","	_setCategoryField: function(value)","	{","		this._swf.setCategoryField(value);","	}","});","","/**"," * CartesianChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class CartesianChart"," * @uses YAHOO.widget.Chart"," * @constructor"," * @param type {String} The char type. May be \"line\", \"column\", or \"bar\""," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */"," YAHOO.widget.CartesianChart = function(type, containerId, dataSource, attributes)","{","	YAHOO.widget.CartesianChart.superclass.constructor.call(this, type, containerId, dataSource, attributes);","};","","YAHOO.lang.extend(YAHOO.widget.CartesianChart, YAHOO.widget.Chart,","{","	/**","	 * Stores a reference to the xAxis labelFunction created by","	 * YAHOO.widget.FlashAdapter.createProxyFunction()","	 * @property _xAxisLabelFunction","	 * @type String","	 * @private","	 */","	_xAxisLabelFunction: null,","	","	/**","	 * Stores a reference to the yAxis labelFunction created by","	 * YAHOO.widget.FlashAdapter.createProxyFunction()","	 * @property _yAxisLabelFunction","	 * @type String","	 * @private","	 */","	_yAxisLabelFunction: null,","	","	destroy: function()","	{","		//remove proxy functions","		if(this._xAxisLabelFunction)","		{","			YAHOO.widget.FlashAdapter.removeProxyFunction(this._xAxisLabelFunction);","			this._xAxisLabelFunction = null;","		}","		","		if(this._yAxisLabelFunction)","		{","			YAHOO.widget.FlashAdapter.removeProxyFunction(this._yAxisLabelFunction);","			this._yAxisLabelFunction = null;","		}","	","		//call last","		YAHOO.widget.CartesianChart.superclass.destroy.call(this);","	},","	","	/**","	 * Initializes the attributes.","	 *","	 * @method _initAttributes","	 * @private","	 */","	_initAttributes: function(attributes)","	{	","		YAHOO.widget.CartesianChart.superclass._initAttributes.call(this, attributes);","","		/**","		 * @attribute xField","		 * @description The field in each item that corresponds to a value on the x axis.","		 * @type String","		 */","		this.getAttributeConfig(\"xField\",","		{","			method: this._getXField","		});","","		this.setAttributeConfig(\"xField\",","		{","			validator: YAHOO.lang.isString,","			method: this._setXField","		});","","		/**","		 * @attribute yField","		 * @description The field in each item that corresponds to a value on the x axis.","		 * @type String","		 */","		this.getAttributeConfig(\"yField\",","		{","			method: this._getYField","		});","","		this.setAttributeConfig(\"yField\",","		{","			validator: YAHOO.lang.isString,","			method: this._setYField","		});","","		/**","		 * @attribute xAxis","		 * @description A custom configuration for the horizontal x axis.","		 * @type Axis","		 */","		this.setAttributeConfig(\"xAxis\",","		{","			method: this._setXAxis","		});","","		/**","		 * @attribute yAxis","		 * @description A custom configuration for the vertical y axis.","		 * @type Axis","		 */","		this.setAttributeConfig(\"yAxis\",","		{","			method: this._setYAxis","		});","	},","","	/**","	 * Getter for the xField attribute.","	 *","	 * @method _getXField","	 * @private","	 */","	_getXField: function()","	{","		return this._swf.getHorizontalField();","	},","","	/**","	 * Setter for the xField attribute.","	 *","	 * @method _setXField","	 * @private","	 */","	_setXField: function(value)","	{","		this._swf.setHorizontalField(value);","	},","","	/**","	 * Getter for the yField attribute.","	 *","	 * @method _getYField","	 * @private","	 */","	_getYField: function()","	{","		return this._swf.getVerticalField();","	},","","	/**","	 * Setter for the yField attribute.","	 *","	 * @method _setYField","	 * @private","	 */","	_setYField: function(value)","	{","		this._swf.setVerticalField(value);","	},","	","	/**","	 * Setter for the xAxis attribute.","	 *","	 * @method _setXAxis","	 * @private","	 */","	_setXAxis: function(value)","	{","		if(this._xAxisLabelFunction !== null)","		{","			YAHOO.widget.FlashAdapter.removeProxyFunction(this._xAxisLabelFunction);","			this._xAxisLabelFunction = null;","		}","		","		var clonedXAxis = {};","		for(var prop in value)","		{","			if(prop == \"labelFunction\")","			{","				if(value.labelFunction !== null)","				{","					if(typeof value.labelFunction == \"function\")","					{","						clonedXAxis.labelFunction = YAHOO.widget.FlashAdapter.createProxyFunction(value.labelFunction);","					}","					else","					{","						clonedXAxis.labelFunction = value.labelFunction;","					}","					this._xAxisLabelFunction = clonedXAxis.labelFunction;","				}","			}","			else","			{","				clonedXAxis[prop] = value[prop];","			}","		}","		this._swf.setHorizontalAxis(clonedXAxis);","	},","","	/**","	 * Getter for the yAxis attribute.","	 *","	 * @method _setYAxis","	 * @private","	 */","	_setYAxis: function(value)","	{","		if(this._yAxisLabelFunction !== null)","		{","			YAHOO.widget.FlashAdapter.removeProxyFunction(this._yAxisLabelFunction);","			this._yAxisLabelFunction = null;","		}","","		var clonedYAxis = {};","		for(var prop in value)","		{","			if(prop == \"labelFunction\")","			{","				if(value.labelFunction !== null)","				{","					if(typeof value.labelFunction == \"function\")","					{","						clonedYAxis.labelFunction = YAHOO.widget.FlashAdapter.createProxyFunction(value.labelFunction);","					}","					else","					{","						clonedYAxis.labelFunction = value.labelFunction;","					}","					this._yAxisLabelFunction = clonedYAxis.labelFunction;","				}","			}","			else","			{","				clonedYAxis[prop] = value[prop];","			}","		}","		this._swf.setVerticalAxis(clonedYAxis);","	}","});","","/**"," * LineChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class LineChart"," * @uses YAHOO.widget.CartesianChart"," * @constructor"," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.LineChart = function(containerId, dataSource, attributes)","{","	YAHOO.widget.LineChart.superclass.constructor.call(this, \"line\", containerId, dataSource, attributes);","};","","YAHOO.lang.extend(YAHOO.widget.LineChart, YAHOO.widget.CartesianChart);","","/**"," * ColumnChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class ColumnChart"," * @uses YAHOO.widget.CartesianChart"," * @constructor"," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.ColumnChart = function(containerId, dataSource, attributes)","{","	YAHOO.widget.ColumnChart.superclass.constructor.call(this, \"column\", containerId, dataSource, attributes);","};","","YAHOO.lang.extend(YAHOO.widget.ColumnChart, YAHOO.widget.CartesianChart);","","/**"," * BarChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class BarChart"," * @uses YAHOO.widget.CartesianChart"," * @constructor"," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.BarChart = function(containerId, dataSource, attributes)","{","	YAHOO.widget.BarChart.superclass.constructor.call(this, \"bar\", containerId, dataSource, attributes);","};","","YAHOO.lang.extend(YAHOO.widget.BarChart, YAHOO.widget.CartesianChart);","","/**"," * StackedColumnChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class StackedColumnChart"," * @uses YAHOO.widget.CartesianChart"," * @constructor"," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.StackedColumnChart = function(containerId, dataSource, attributes)","{","	YAHOO.widget.StackedColumnChart.superclass.constructor.call(this, \"stackcolumn\", containerId, dataSource, attributes);","};","","YAHOO.lang.extend(YAHOO.widget.StackedColumnChart, YAHOO.widget.CartesianChart);","","/**"," * StackedBarChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class StackedBarChart"," * @uses YAHOO.widget.CartesianChart"," * @constructor"," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.StackedBarChart = function(containerId, dataSource, attributes)","{","	YAHOO.widget.StackedBarChart.superclass.constructor.call(this, \"stackbar\", containerId, dataSource, attributes);","};","","YAHOO.lang.extend(YAHOO.widget.StackedBarChart, YAHOO.widget.CartesianChart);","","/**"," * DraggableLineChart class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class LineChart"," * @uses YAHOO.widget.LineChart"," * @constructor"," * @param containerId {HTMLElement} Container element for the Flash Player instance."," * @param dataSource {YAHOO.util.DataSource} DataSource instance."," * @param attributes {object} (optional) Object literal of configuration values."," */","YAHOO.widget.DraggableLineChart = function(containerId, dataSource, attributes)","{","	YAHOO.widget.DraggableLineChart.superclass.constructor.call(this, containerId, dataSource, attributes);","","	/**","	 * ","	 */","	this.createEvent(\"itemDDStartEvent\");","	/**","	 * ","	 */","	this.createEvent(\"itemDDEvent\");","	/**","	 * ","	 */","	this.createEvent(\"itemDDEndEvent\");","};","","YAHOO.lang.extend(YAHOO.widget.DraggableLineChart, YAHOO.widget.LineChart, {","	mouseX: 0,","	mouseY: 0,","	valueTracker: {","		id: 'valueTracker',","		enabled: false,","		padding: 10,","		backgroundColor: 'rgb(221, 221, 221)',","		top: 0,","		left: 0,","		fix: 10","	},","","	draggedItemIdx: null,","//	SWFURL: '../../resources/charts-2013.swf',","","	/**","	 * @cfg {String} wmode","	 * Overriden wmode of the flash object. <tt>'transparent'</tt> allows to display some HTML objects over Flash.","	 */","	wmode: 'transparent',","","","	/**","	 * Handles or re-dispatches events received from the SWF.","	 *","	 * @method _eventHandler","	 * @private","	 */","	_eventHandler: function(event)","	{","		YAHOO.widget.DraggableLineChart.superclass._eventHandler.call(this, event);","","		var type = event.type;","		switch(type)","		{","			case \"swfReady\":","				this.onSwfReady(event);","				return;","			case \"itemDDStartEvent\":","				this.onItemDDStart(event);","				return;","			case \"itemDDEvent\":","				this.onItemDD(event);","				return;","			case \"itemDDEndEvent\":","				this.onItemDDEnd(event);","				return;","			default:","				return;","		}","	},","","	onDestroy: function(){","		YAHOO.widget.DraggableLineChart.superclass.onDestroy.call(this);","		delete window[this.temporaryValueTipFnName];","	},","","	setTemporaryValueTipRenderer : function(fn){","		var chart = this;","		this.temporaryValueTipFnName = this.createFnProxy(function(item, index, series){","			var record = chart._dataSource.liveData[o.index];","			return fn(record, index, series);","		}, this.temporaryValueTipFnName);","		this.swf.setTemporaryValueTipFunction(this.temporaryValueTipFnName);","	},","","	onSwfReady : function(o) {","		if (this.temporaryValueTipRenderer) {","			this.setTemporaryValueTipRenderer(this.temporaryValueTipRenderer);","		}","	},","","	onItemDDStart : function(o) {","		if (this._seriesDefs[o.seriesIndex].dragable) {","			this.draggedItemIdx = o.index;","		}","	},","","	onItemDD : function(o) {","		this.draggedItemIdx = o.index;","	},","","	onItemDDEnd : function(o) {","		if (this._seriesDefs[o.seriesIndex].dragable) {","			var yField = this._seriesDefs[o.seriesIndex].yField;","			this._dataSource.liveData[o.index][yField] = o.newValue;","			this._setDataSource(this._dataSource);","			this.draggedItemIdx = null;","		}","	},","","	getXAxis : function(){","		return this._swf.getHorizontalAxis();","	},","","	getYAxis : function(){","		return this._swf.getVerticalAxis();","	}","});","","/**"," * Defines a CartesianChart's vertical or horizontal axis."," *"," * @namespace YAHOO.widget"," * @class Axis"," * @constructor"," */","YAHOO.widget.Axis = function()","{","};","","YAHOO.widget.Axis.prototype = ","{","	/**","	 * The type of axis.","	 *","	 * @property type","	 * @type String","	 */","	type: null,","	","	/**","	 * If true, the items on the axis will be drawn in opposite direction.","	 *","	 * @property reverse","	 * @type Boolean","	 */","	reverse: false,","	","	/**","	 * A string reference to the globally-accessible function that may be called to","	 * determine each of the label values for this axis. Also accepts function references.","	 *","	 * @property labelFunction","	 * @type String","	 */","	labelFunction: null,","	","	/**","	 * The space, in pixels, between labels on an axis.","	 *","	 * @property labelSpacing","	 * @type Number","	 */","	labelSpacing: 2,","	","	/**","	 * The text that will appear next to the axis to indicate information about the data that it displays.","	 *","	 * @property title","	 * @type String","	 */","	title: null ","};","","/**"," * A type of axis whose units are measured in numeric values."," *"," * @namespace YAHOO.widget"," * @class NumericAxis"," * @extends YAHOO.widget.Axis"," * @constructor"," */","YAHOO.widget.NumericAxis = function()","{","	YAHOO.widget.NumericAxis.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.NumericAxis, YAHOO.widget.Axis,","{","	type: \"numeric\",","	","	/**","	 * The minimum value drawn by the axis. If not set explicitly, the axis minimum","	 * will be calculated automatically.","	 *","	 * @property minimum","	 * @type Number","	 */","	minimum: NaN,","	","	/**","	 * The maximum value drawn by the axis. If not set explicitly, the axis maximum","	 * will be calculated automatically.","	 *","	 * @property maximum","	 * @type Number","	 */","	maximum: NaN,","	","	/**","	 * The spacing between major intervals on this axis.","	 *","	 * @property majorUnit","	 * @type Number","	 */","	majorUnit: NaN,","","	/**","	 * The spacing between minor intervals on this axis.","	 *","	 * @property minorUnit","	 * @type Number","	 */","	minorUnit: NaN,","	","	/**","	 * If true, the labels, ticks, gridlines, and other objects will snap to","	 * the nearest major or minor unit. If false, their position will be based","	 * on the minimum value.","	 *","	 * @property snapToUnits","	 * @type Boolean","	 */","	snapToUnits: true,","	","	/**","	 * Series that are stackable will only stack when this value is set to true.","	 *","	 * @property stackingEnabled","	 * @type Boolean","	 */","	stackingEnabled: false,","","	/**","	 * If true, and the bounds are calculated automatically, either the minimum or","	 * maximum will be set to zero.","	 *","	 * @property alwaysShowZero","	 * @type Boolean","	 */","	alwaysShowZero: true,","","	/**","	 * The scaling algorithm to use on this axis. May be \"linear\" or \"logarithmic\".","	 *","	 * @property scale","	 * @type String","	 */","	scale: \"linear\",","	","	/**","	 * Indicates whether to round the major unit.","	 * ","	 * @property roundMajorUnit","	 * @type Boolean","	 */","	roundMajorUnit: true ","});","","/**"," * A type of axis whose units are measured in time-based values."," *"," * @namespace YAHOO.widget"," * @class TimeAxis"," * @constructor"," */","YAHOO.widget.TimeAxis = function()","{","	YAHOO.widget.TimeAxis.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.TimeAxis, YAHOO.widget.Axis,","{","	type: \"time\",","	","	/**","	 * The minimum value drawn by the axis. If not set explicitly, the axis minimum","	 * will be calculated automatically.","	 *","	 * @property minimum","	 * @type Date","	 */","	minimum: null,","","	/**","	 * The maximum value drawn by the axis. If not set explicitly, the axis maximum","	 * will be calculated automatically.","	 *","	 * @property maximum","	 * @type Number","	 */","	maximum: null,","	","	/**","	 * The spacing between major intervals on this axis.","	 *","	 * @property majorUnit","	 * @type Number","	 */","	majorUnit: NaN,","	","	/**","	 * The time unit used by the majorUnit.","	 *","	 * @property majorTimeUnit","	 * @type String","	 */","	majorTimeUnit: null,","	","	/**","	 * The spacing between minor intervals on this axis.","	 *","	 * @property majorUnit","	 * @type Number","	 */","	minorUnit: NaN,","	","	/**","	 * The time unit used by the minorUnit.","	 *","	 * @property majorTimeUnit","	 * @type String","	 */","	minorTimeUnit: null,","","	/**","	 * If true, the labels, ticks, gridlines, and other objects will snap to","	 * the nearest major or minor unit. If false, their position will be based","	 * on the minimum value.","	 *","	 * @property snapToUnits","	 * @type Boolean","	 */","	snapToUnits: true,","","	/**","	 * Series that are stackable will only stack when this value is set to true.","	 *","	 * @property stackingEnabled","	 * @type Boolean","	 */","	stackingEnabled: false","});","","/**"," * A type of axis that displays items in categories."," *"," * @namespace YAHOO.widget"," * @class CategoryAxis"," * @constructor"," */","YAHOO.widget.CategoryAxis = function()","{","	YAHOO.widget.CategoryAxis.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.CategoryAxis, YAHOO.widget.Axis,","{","	type: \"category\",","	","	/**","	 * A list of category names to display along this axis.","	 *","	 * @property categoryNames","	 * @type Array","	 */","	categoryNames: null,","	","	/**","	 * Indicates whether or not to calculate the number of categories (ticks and labels)","	 * when there is not enough room to display all labels on the axis. If set to true, the axis ","	 * will determine the number of categories to plot. If not, all categories will be plotted.","	 *","	 * @property calcualateCategoryCount","	 * @type Boolean","	 */","	calculateCategoryCount: false ","});","","/**"," * Functionality common to most series. Generally, a <code>Series</code> "," * object shouldn't be instantiated directly. Instead, a subclass with a "," * concrete implementation should be used."," *"," * @namespace YAHOO.widget"," * @class Series"," * @constructor"," */","YAHOO.widget.Series = function() {};","","YAHOO.widget.Series.prototype = ","{","	/**","	 * The type of series.","	 *","	 * @property type","	 * @type String","	 */","	type: null,","	","	/**","	 * The human-readable name of the series.","	 *","	 * @property displayName","	 * @type String","	 */","	displayName: null","};","","/**"," * Functionality common to most series appearing in cartesian charts."," * Generally, a <code>CartesianSeries</code> object shouldn't be"," * instantiated directly. Instead, a subclass with a concrete implementation"," * should be used."," *"," * @namespace YAHOO.widget"," * @class CartesianSeries"," * @uses YAHOO.widget.Series"," * @constructor"," */","YAHOO.widget.CartesianSeries = function() ","{","	YAHOO.widget.CartesianSeries.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.CartesianSeries, YAHOO.widget.Series,","{","	/**","	 * The field used to access the x-axis value from the items from the data source.","	 *","	 * @property xField","	 * @type String","	 */","	xField: null,","	","	/**","	 * The field used to access the y-axis value from the items from the data source.","	 *","	 * @property yField","	 * @type String","	 */","	yField: null","});","","/**"," * ColumnSeries class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class ColumnSeries"," * @uses YAHOO.widget.CartesianSeries"," * @constructor"," */","YAHOO.widget.ColumnSeries = function() ","{","	YAHOO.widget.ColumnSeries.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.ColumnSeries, YAHOO.widget.CartesianSeries,","{","	type: \"column\"","});","","/**"," * LineSeries class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class LineSeries"," * @uses YAHOO.widget.CartesianSeries"," * @constructor"," */","YAHOO.widget.LineSeries = function() ","{","	YAHOO.widget.LineSeries.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.LineSeries, YAHOO.widget.CartesianSeries,","{","	type: \"line\"","});","","","/**"," * BarSeries class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class BarSeries"," * @uses YAHOO.widget.CartesianSeries"," * @constructor"," */","YAHOO.widget.BarSeries = function() ","{","	YAHOO.widget.BarSeries.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.BarSeries, YAHOO.widget.CartesianSeries,","{","	type: \"bar\"","});","","","/**"," * PieSeries class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class PieSeries"," * @uses YAHOO.widget.Series"," * @constructor"," */","YAHOO.widget.PieSeries = function() ","{","	YAHOO.widget.PieSeries.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.PieSeries, YAHOO.widget.Series,","{","	type: \"pie\",","	","	/**","	 * The field used to access the data value from the items from the data source.","	 *","	 * @property dataField","	 * @type String","	 */","	dataField: null,","	","	/**","	 * The field used to access the category value from the items from the data source.","	 *","	 * @property categoryField","	 * @type String","	 */","	categoryField: null,","","	/**","	 * A string reference to the globally-accessible function that may be called to","	 * determine each of the label values for this series. Also accepts function references.","	 *","	 * @property labelFunction","	 * @type String","	 */","	labelFunction: null","});","","/**"," * StackedBarSeries class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class StackedBarSeries"," * @uses YAHOO.widget.CartesianSeries"," * @constructor"," */","YAHOO.widget.StackedBarSeries = function() ","{","	YAHOO.widget.StackedBarSeries.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.StackedBarSeries, YAHOO.widget.CartesianSeries,","{","	type: \"stackbar\"","});","","/**"," * StackedColumnSeries class for the YUI Charts widget."," *"," * @namespace YAHOO.widget"," * @class StackedColumnSeries"," * @uses YAHOO.widget.CartesianSeries"," * @constructor"," */","YAHOO.widget.StackedColumnSeries = function() ","{","	YAHOO.widget.StackedColumnSeries.superclass.constructor.call(this);","};","","YAHOO.lang.extend(YAHOO.widget.StackedColumnSeries, YAHOO.widget.CartesianSeries,","{","	type: \"stackcolumn\"","});","","YAHOO.register(\"charts\", YAHOO.widget.Chart, {version: \"@VERSION@\", build: \"@BUILD@\"});"];
/*extern ActiveXObject, __flash_unloadHandler, __flash_savedUnloadHandler */
/*!
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * @namespace YAHOO
 */

_yuitest_coverage["D:\work\nils\yui2\src\charts\build_tmp\charts.js"].lines = {"10":0,"12":0,"14":0,"16":0,"19":0,"21":0,"24":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"41":0,"43":0,"45":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"56":0,"60":0,"64":0,"65":0,"68":0,"71":0,"74":0,"77":0,"80":0,"83":0,"86":0,"89":0,"90":0,"91":0,"92":0,"94":0,"96":0,"99":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"109":0,"111":0,"112":0,"113":0,"114":0,"116":0,"118":0,"121":0,"122":0,"123":0,"125":0,"126":0,"127":0,"129":0,"130":0,"131":0,"132":0,"134":0,"136":0,"139":0,"140":0,"141":0,"143":0,"147":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"157":0,"159":0,"160":0,"161":0,"165":0,"167":0,"170":0,"175":0,"177":0,"178":0,"179":0,"181":0,"182":0,"184":0,"187":0,"189":0,"190":0,"192":0,"194":0,"195":0,"197":0,"201":0,"209":0,"211":0,"215":0,"217":0,"218":0,"219":0,"223":0,"225":0,"228":0,"230":0,"235":0,"237":0,"240":0,"243":0,"245":0,"246":0,"247":0,"250":0,"252":0,"254":0,"256":0,"258":0,"260":0,"262":0,"264":0,"266":0,"268":0,"270":0,"272":0,"276":0,"280":0,"281":0,"282":0,"284":0,"285":0,"287":0,"289":0,"293":0,"298":0,"300":0,"301":0,"303":0,"304":0,"306":0,"308":0,"315":0,"317":0,"319":0,"321":0,"322":0,"323":0,"325":0,"326":0,"331":0,"333":0,"345":0,"348":0,"349":0,"350":0,"351":0,"355":0,"356":0,"357":0,"361":0,"363":0,"364":0,"367":0,"375":0,"377":0,"382":0,"440":0,"454":0,"456":0,"457":0,"460":0,"463":0,"465":0,"467":0,"482":0,"484":0,"486":0,"490":0,"492":0,"494":0,"498":0,"501":0,"504":0,"506":0,"507":0,"508":0,"510":0,"513":0,"528":0,"529":0,"532":0,"533":0,"534":0,"536":0,"540":0,"551":0,"552":0,"553":0,"555":0,"562":0,"563":0,"611":0,"615":0,"626":0,"640":0,"651":0,"662":0,"674":0,"676":0,"677":0,"680":0,"684":0,"693":0,"704":0,"706":0,"707":0,"709":0,"711":0,"712":0,"722":0,"725":0,"727":0,"730":0,"731":0,"760":0,"762":0,"764":0,"765":0,"778":0,"791":0,"804":0,"817":0,"830":0,"843":0,"856":0,"859":0,"911":0,"925":0,"926":0,"939":0,"940":0,"953":0,"955":0,"957":0,"963":0,"965":0,"967":0,"968":0,"973":0,"975":0,"979":0,"990":0,"997":0,"1002":0,"1012":0,"1017":0,"1027":0,"1032":0,"1042":0,"1047":0,"1059":0,"1064":0,"1075":0,"1080":0,"1096":0,"1099":0,"1101":0,"1102":0,"1105":0,"1107":0,"1109":0,"1120":0,"1122":0,"1125":0,"1127":0,"1129":0,"1130":0,"1133":0,"1135":0,"1137":0,"1150":0,"1152":0,"1157":0,"1158":0,"1160":0,"1161":0,"1163":0,"1165":0,"1167":0,"1171":0,"1172":0,"1173":0,"1174":0,"1176":0,"1177":0,"1179":0,"1180":0,"1181":0,"1183":0,"1185":0,"1187":0,"1189":0,"1193":0,"1195":0,"1198":0,"1199":0,"1205":0,"1209":0,"1213":0,"1215":0,"1217":0,"1218":0,"1220":0,"1222":0,"1227":0,"1228":0,"1230":0,"1251":0,"1262":0,"1263":0,"1282":0,"1293":0,"1294":0,"1313":0,"1324":0,"1325":0,"1336":0,"1347":0,"1358":0,"1360":0,"1363":0,"1365":0,"1366":0,"1368":0,"1379":0,"1390":0,"1391":0,"1404":0,"1417":0,"1419":0,"1422":0,"1432":0,"1439":0,"1444":0,"1455":0,"1460":0,"1475":0,"1486":0,"1497":0,"1508":0,"1524":0,"1526":0,"1529":0,"1552":0,"1554":0,"1555":0,"1558":0,"1560":0,"1561":0,"1565":0,"1576":0,"1583":0,"1588":0,"1599":0,"1604":0,"1615":0,"1625":0,"1639":0,"1650":0,"1661":0,"1672":0,"1683":0,"1685":0,"1686":0,"1689":0,"1690":0,"1692":0,"1694":0,"1696":0,"1698":0,"1702":0,"1704":0,"1709":0,"1712":0,"1723":0,"1725":0,"1726":0,"1729":0,"1730":0,"1732":0,"1734":0,"1736":0,"1738":0,"1742":0,"1744":0,"1749":0,"1752":0,"1767":0,"1769":0,"1772":0,"1785":0,"1787":0,"1790":0,"1803":0,"1805":0,"1808":0,"1821":0,"1823":0,"1826":0,"1839":0,"1841":0,"1844":0,"1857":0,"1859":0,"1864":0,"1868":0,"1872":0,"1875":0,"1906":0,"1908":0,"1909":0,"1912":0,"1913":0,"1915":0,"1916":0,"1918":0,"1919":0,"1921":0,"1922":0,"1924":0,"1929":0,"1930":0,"1934":0,"1935":0,"1936":0,"1937":0,"1939":0,"1943":0,"1944":0,"1949":0,"1950":0,"1955":0,"1959":0,"1960":0,"1961":0,"1962":0,"1963":0,"1968":0,"1972":0,"1983":0,"1987":0,"2039":0,"2041":0,"2044":0,"2133":0,"2135":0,"2138":0,"2218":0,"2220":0,"2223":0,"2255":0,"2257":0,"2287":0,"2289":0,"2292":0,"2319":0,"2321":0,"2324":0,"2337":0,"2339":0,"2342":0,"2356":0,"2358":0,"2361":0,"2375":0,"2377":0,"2380":0,"2418":0,"2420":0,"2423":0,"2436":0,"2438":0,"2441":0,"2446":0};
_yuitest_coverage["D:\work\nils\yui2\src\charts\build_tmp\charts.js"].functions = {"SWFObject:24":0,"useExpressInstall:62":0,"setAttribute:67":0,"getAttribute:70":0,"addParam:73":0,"getParams:76":0,"addVariable:79":0,"getVariable:82":0,"getVariables:85":0,"getVariablePairs:88":0,"getSWFHTML:101":0,"write:145":0,"getPlayerVersion:175":0,"PlayerVersion:243":0,"versionIsValid:250":0,"getRequestParameter:278":0,"cleanupSWFs:298":0,"prepUnload:319":0,"getElementById:333":0,"FlashAdapter:345":0,"toString:438":0,"destroy:451":0,"_embedSWF:479":0,"_eventHandler:526":0,"_loadHandler:549":0,"set:558":0,"_initAttributes:572":0,"_getSWFURL:638":0,"_getAltText:649":0,"_setAltText:660":0,"(anonymous 1):680":0,"eventHandler:674":0,"]:707":0,"createProxyFunction:704":0,"removeProxyFunction:722":0,"Chart:760":0,"toString:909":0,"setStyle:921":0,"setStyles:935":0,"setSeriesStyles:949":0,"destroy:960":0,"_initAttributes:988":0,"_loadHandler:1093":0,"refreshData:1118":0,"_loadDataHandler:1148":0,"_getRequest:1249":0,"_setRequest:1260":0,"_getDataSource:1280":0,"_setDataSource:1291":0,"_getSeriesDefs:1311":0,"_setSeriesDefs:1322":0,"_getCategoryNames:1334":0,"_setCategoryNames:1345":0,"_setDataTipFunction:1356":0,"_getPolling:1377":0,"_setPolling:1388":0,"PieChart:1417":0,"_initAttributes:1430":0,"_getDataField:1473":0,"_setDataField:1484":0,"_getCategoryField:1495":0,"_setCategoryField:1506":0,"CartesianChart:1524":0,"destroy:1549":0,"_initAttributes:1574":0,"_getXField:1637":0,"_setXField:1648":0,"_getYField:1659":0,"_setYField:1670":0,"_setXAxis:1681":0,"_setYAxis:1721":0,"LineChart:1767":0,"ColumnChart:1785":0,"BarChart:1803":0,"StackedColumnChart:1821":0,"StackedBarChart:1839":0,"DraggableLineChart:1857":0,"_eventHandler:1904":0,"onDestroy:1928":0,"(anonymous 2):1935":0,"setTemporaryValueTipRenderer:1933":0,"onSwfReady:1942":0,"onItemDDStart:1948":0,"onItemDD:1954":0,"onItemDDEnd:1958":0,"getXAxis:1967":0,"getYAxis:1971":0,"NumericAxis:2039":0,"TimeAxis:2133":0,"CategoryAxis:2218":0,"CartesianSeries:2287":0,"ColumnSeries:2319":0,"LineSeries:2337":0,"BarSeries:2356":0,"PieSeries:2375":0,"StackedBarSeries:2418":0,"StackedColumnSeries:2436":0};
_yuitest_coverage["D:\work\nils\yui2\src\charts\build_tmp\charts.js"].coveredLines = 496;
_yuitest_coverage["D:\work\nils\yui2\src\charts\build_tmp\charts.js"].coveredFunctions = 97;
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 10);
YAHOO.namespace("deconcept"); 
	
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 12);
YAHOO.deconcept = YAHOO.deconcept || {};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 14);
if(typeof YAHOO.deconcept.util == "undefined" || !YAHOO.deconcept.util)
{
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 16);
YAHOO.deconcept.util = {};
}

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 19);
if(typeof YAHOO.deconcept.SWFObjectUtil == "undefined" || !YAHOO.deconcept.SWFObjectUtil)
{
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 21);
YAHOO.deconcept.SWFObjectUtil = {};
}

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 24);
YAHOO.deconcept.SWFObject = function(swf, id, w, h, ver, c, quality, xiRedirectUrl, redirectUrl, detectKey)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "SWFObject", 24);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 26);
if(!document.getElementById) { return; }
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 27);
this.DETECT_KEY = detectKey ? detectKey : 'detectflash';
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 28);
this.skipDetect = YAHOO.deconcept.util.getRequestParameter(this.DETECT_KEY);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 29);
this.params = {};
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 30);
this.variables = {};
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 31);
this.attributes = [];
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 32);
if(swf) { this.setAttribute('swf', swf); }
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 33);
if(id) { this.setAttribute('id', id); }
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 34);
if(w) { this.setAttribute('width', w); }
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 35);
if(h) { this.setAttribute('height', h); }
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 36);
if(ver) { this.setAttribute('version', new YAHOO.deconcept.PlayerVersion(ver.toString().split("."))); }
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 37);
this.installedVer = YAHOO.deconcept.SWFObjectUtil.getPlayerVersion();
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 38);
if (!window.opera && document.all && this.installedVer.major > 7)
	{
		// only add the onunload cleanup if the Flash Player version supports External Interface and we are in IE
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 41);
YAHOO.deconcept.SWFObject.doPrepUnload = true;
	}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 43);
if(c)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 45);
this.addParam('bgcolor', c);
	}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 47);
var q = quality ? quality : 'high';
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 48);
this.addParam('quality', q);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 49);
this.setAttribute('useExpressInstall', false);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 50);
this.setAttribute('doExpressInstall', false);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 51);
var xir = (xiRedirectUrl) ? xiRedirectUrl : window.location;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 52);
this.setAttribute('xiRedirectUrl', xir);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 53);
this.setAttribute('redirectUrl', '');
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 54);
if(redirectUrl)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 56);
this.setAttribute('redirectUrl', redirectUrl);
	}
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 60);
YAHOO.deconcept.SWFObject.prototype =
{
	useExpressInstall: function(path)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "useExpressInstall", 62);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 64);
this.xiSWFPath = !path ? "expressinstall.swf" : path;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 65);
this.setAttribute('useExpressInstall', true);
	},
	setAttribute: function(name, value){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "setAttribute", 67);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 68);
this.attributes[name] = value;
	},
	getAttribute: function(name){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getAttribute", 70);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 71);
return this.attributes[name];
	},
	addParam: function(name, value){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "addParam", 73);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 74);
this.params[name] = value;
	},
	getParams: function(){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getParams", 76);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 77);
return this.params;
	},
	addVariable: function(name, value){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "addVariable", 79);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 80);
this.variables[name] = value;
	},
	getVariable: function(name){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getVariable", 82);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 83);
return this.variables[name];
	},
	getVariables: function(){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getVariables", 85);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 86);
return this.variables;
	},
	getVariablePairs: function(){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getVariablePairs", 88);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 89);
var variablePairs = [];
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 90);
var key;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 91);
var variables = this.getVariables();
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 92);
for(key in variables)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 94);
if(variables.hasOwnProperty(key))
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 96);
variablePairs[variablePairs.length] = key +"="+ variables[key];
			}
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 99);
return variablePairs;
	},
	getSWFHTML: function() {
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getSWFHTML", 101);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 102);
var swfNode = "";
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 103);
var params = {};
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 104);
var key = "";
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 105);
var pairs = "";
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 106);
if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { // netscape plugin architecture
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 107);
if (this.getAttribute("doExpressInstall")) {
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 108);
this.addVariable("MMplayerType", "PlugIn");
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 109);
this.setAttribute('swf', this.xiSWFPath);
			}
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 111);
swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ this.getAttribute('style') +'"';
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 112);
swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 113);
params = this.getParams();
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 114);
for(key in params)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 116);
if(params.hasOwnProperty(key))
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 118);
swfNode += [key] +'="'+ params[key] +'" ';
				}
			}
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 121);
pairs = this.getVariablePairs().join("&");
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 122);
if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 123);
swfNode += '/>';
		} else { // PC IE
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 125);
if (this.getAttribute("doExpressInstall")) {
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 126);
this.addVariable("MMplayerType", "ActiveX");
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 127);
this.setAttribute('swf', this.xiSWFPath);
			}
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 129);
swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ this.getAttribute('style') +'">';
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 130);
swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 131);
params = this.getParams();
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 132);
for(key in params)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 134);
if(params.hasOwnProperty(key))
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 136);
swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
				}
			}
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 139);
pairs = this.getVariablePairs().join("&");
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 140);
if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 141);
swfNode += "</object>";
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 143);
return swfNode;
	},
	write: function(elementId)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "write", 145);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 147);
if(this.getAttribute('useExpressInstall')) {
			// check to see if we need to do an express install
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 149);
var expressInstallReqVer = new YAHOO.deconcept.PlayerVersion([6,0,65]);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 150);
if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 151);
this.setAttribute('doExpressInstall', true);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 152);
this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 153);
document.title = document.title.slice(0, 47) + " - Flash Player Installation";
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 154);
this.addVariable("MMdoctitle", document.title);
			}
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 157);
if(this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version')))
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 159);
var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 160);
n.innerHTML = this.getSWFHTML();
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 161);
return true;
		}
		else
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 165);
if(this.getAttribute('redirectUrl') !== "")
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 167);
document.location.replace(this.getAttribute('redirectUrl'));
			}
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 170);
return false;
	}
};

/* ---- detection functions ---- */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 175);
YAHOO.deconcept.SWFObjectUtil.getPlayerVersion = function()
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getPlayerVersion", 175);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 177);
var axo = null;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 178);
var PlayerVersion = new YAHOO.deconcept.PlayerVersion([0,0,0]);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 179);
if(navigator.plugins && navigator.mimeTypes.length)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 181);
var x = navigator.plugins["Shockwave Flash"];
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 182);
if(x && x.description)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 184);
PlayerVersion = new YAHOO.deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
		}
	}
	else {_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 187);
if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0)
	{ // if Windows CE
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 189);
var counter = 3;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 190);
while(axo)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 192);
try
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 194);
counter++;
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 195);
axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+ counter);
//				document.write("player v: "+ counter);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 197);
PlayerVersion = new YAHOO.deconcept.PlayerVersion([counter,0,0]);
			}
			catch(e)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 201);
axo = null;
			}
		}
	}
	else
	{ // Win IE (non mobile)
		// do minor version lookup in IE, but avoid fp6 crashing issues
		// see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 209);
try
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 211);
axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		}
		catch(e)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 215);
try
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 217);
axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 218);
PlayerVersion = new YAHOO.deconcept.PlayerVersion([6,0,21]);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 219);
axo.AllowScriptAccess = "always"; // error if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
			}
			catch(e)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 223);
if(PlayerVersion.major == 6)
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 225);
return PlayerVersion;
				}
			}
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 228);
try
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 230);
axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			}
			catch(e) {}
		}
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 235);
if(axo !== null)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 237);
PlayerVersion = new YAHOO.deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
		}
	}}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 240);
return PlayerVersion;
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 243);
YAHOO.deconcept.PlayerVersion = function(arrVersion)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "PlayerVersion", 243);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 245);
this.major = arrVersion[0] !== null ? parseInt(arrVersion[0], 0) : 0;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 246);
this.minor = arrVersion[1] !== null ? parseInt(arrVersion[1], 0) : 0;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 247);
this.rev = arrVersion[2] !== null ? parseInt(arrVersion[2], 0) : 0;
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 250);
YAHOO.deconcept.PlayerVersion.prototype.versionIsValid = function(fv)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "versionIsValid", 250);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 252);
if(this.major < fv.major)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 254);
return false;
	}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 256);
if(this.major > fv.major)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 258);
return true;
	}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 260);
if(this.minor < fv.minor)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 262);
return false;
	}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 264);
if(this.minor > fv.minor)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 266);
return true;
	}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 268);
if(this.rev < fv.rev)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 270);
return false;
	}
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 272);
return true;
};

/* ---- get value of query string param ---- */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 276);
YAHOO.deconcept.util =
{
	getRequestParameter: function(param)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getRequestParameter", 278);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 280);
var q = document.location.search || document.location.hash;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 281);
if(param === null) { return q; }
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 282);
if(q)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 284);
var pairs = q.substring(1).split("&");
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 285);
for(var i=0; i < pairs.length; i++)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 287);
if (pairs[i].substring(0, pairs[i].indexOf("=")) == param)
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 289);
return pairs[i].substring((pairs[i].indexOf("=") + 1));
				}
			}
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 293);
return "";
	}
};

/* fix for video streaming bug */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 298);
YAHOO.deconcept.SWFObjectUtil.cleanupSWFs = function()
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "cleanupSWFs", 298);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 300);
var objects = document.getElementsByTagName("OBJECT");
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 301);
for(var i = objects.length - 1; i >= 0; i--)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 303);
objects[i].style.display = 'none';
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 304);
for(var x in objects[i])
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 306);
if(typeof objects[i][x] == 'function')
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 308);
objects[i][x] = function(){};
			}
		}
	}
};

// fixes bug in some fp9 versions see http://blog.deconcept.com/2006/07/28/swfobject-143-released/
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 315);
if(YAHOO.deconcept.SWFObject.doPrepUnload)
{
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 317);
if(!YAHOO.deconcept.unloadSet)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 319);
YAHOO.deconcept.SWFObjectUtil.prepUnload = function()
		{
			_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "prepUnload", 319);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 321);
__flash_unloadHandler = function(){};
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 322);
__flash_savedUnloadHandler = function(){};
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 323);
window.attachEvent("onunload", YAHOO.deconcept.SWFObjectUtil.cleanupSWFs);
		};
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 325);
window.attachEvent("onbeforeunload", YAHOO.deconcept.SWFObjectUtil.prepUnload);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 326);
YAHOO.deconcept.unloadSet = true;
	}
}

/* add document.getElementById if needed (mobile IE < 5) */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 331);
if(!document.getElementById && document.all)
{
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 333);
document.getElementById = function(id) { _yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getElementById", 333);
return document.all[id]; };
}


/**
 * Wraps Flash embedding functionality and allows communication with SWF through
 * attributes.
 *
 * @namespace YAHOO.widget
 * @class FlashAdapter
 * @uses YAHOO.util.AttributeProvider
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 345);
YAHOO.widget.FlashAdapter = function(swfURL, containerID, attributes)
{
	// set up the initial events and attributes stuff
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "FlashAdapter", 345);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 348);
this._queue = this._queue || [];
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 349);
this._events = this._events || {};
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 350);
this._configs = this._configs || {};
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 351);
attributes = attributes || {};
	
	//the Flash Player external interface code from Adobe doesn't play nicely
	//with the default value, yui-gen, in IE
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 355);
this._id = attributes.id = attributes.id || YAHOO.util.Dom.generateId(null, "yuigen");
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 356);
attributes.version = attributes.version || "9.0.45";
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 357);
attributes.backgroundColor = attributes.backgroundColor || "#ffffff";
	
	//we can't use the initial attributes right away
	//so save them for once the SWF finishes loading
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 361);
this._attributes = attributes;
	
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 363);
this._swfURL = swfURL;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 364);
this._containerID = containerID;
	
	//embed the SWF file in the page
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 367);
this._embedSWF(this._swfURL, this._containerID, attributes.id, attributes.version,
		attributes.backgroundColor, attributes.expressInstall, attributes.wmode);
	
	/**
	 * Fires when the SWF is initialized and communication is possible.
	 * @event contentReady
	 */
	//Fix for iframe cross-domain issue with FF2x 
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 375);
try
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 377);
this.createEvent("contentReady");
	}
	catch(e){}
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 382);
YAHOO.extend(YAHOO.widget.FlashAdapter, YAHOO.util.AttributeProvider,
{
	/**
	 * The URL of the SWF file.
	 * @property _swfURL
	 * @type String
	 * @private
	 */
	_swfURL: null,

	/**
	 * The ID of the containing DIV.
	 * @property _containerID
	 * @type String
	 * @private
	 */
	_containerID: null,

	/**
	 * A reference to the embedded SWF file.
	 * @property _swf
	 * @private
	 */
	_swf: null,

	/**
	 * The id of this instance.
	 * @property _id
	 * @type String
	 * @private
	 */
	_id: null,

	/**
	 * Indicates whether the SWF has been initialized and is ready
	 * to communicate with JavaScript
	 * @property _initialized
	 * @type Boolean
	 * @private
	 */
	_initialized: false,
	
	/**
	 * The initializing attributes are stored here until the SWF is ready.
	 * @property _attributes
	 * @type Object
	 * @private
	 */
	_attributes: null, //the intializing attributes

	/**
	 * Public accessor to the unique name of the FlashAdapter instance.
	 *
	 * @method toString
	 * @return {String} Unique name of the FlashAdapter instance.
	 */
	toString: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "toString", 438);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 440);
return "FlashAdapter " + this._id;
	},

	/**
	 * Nulls out the entire FlashAdapter instance and related objects and removes attached
	 * event listeners and clears out DOM elements inside the container. After calling
	 * this method, the instance reference should be expliclitly nulled by implementer,
	 * as in myChart = null. Use with caution!
	 *
	 * @method destroy
	 */
	destroy: function()
	{
		//kill the Flash Player instance
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "destroy", 451);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 454);
if(this._swf)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 456);
var container = YAHOO.util.Dom.get(this._containerID);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 457);
container.removeChild(this._swf);
		}
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 460);
var instanceName = this._id;
		
		//null out properties
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 463);
for(var prop in this)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 465);
if(YAHOO.lang.hasOwnProperty(this, prop))
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 467);
this[prop] = null;
			}
		}
		
	},

	/**
	 * Embeds the SWF in the page and associates it with this instance.
	 *
	 * @method _embedSWF
	 * @private
	 */
	_embedSWF: function(swfURL, containerID, swfID, version, backgroundColor, expressInstall, wmode)
	{
		//standard SWFObject embed
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_embedSWF", 479);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 482);
var swfObj = new YAHOO.deconcept.SWFObject(swfURL, swfID, "100%", "100%", version, backgroundColor);

		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 484);
if(expressInstall)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 486);
swfObj.useExpressInstall(expressInstall);
		}

		//make sure we can communicate with ExternalInterface
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 490);
swfObj.addParam("allowScriptAccess", "always");
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 492);
if(wmode)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 494);
swfObj.addParam("wmode", wmode);
		}
		
		//again, a useful ExternalInterface trick
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 498);
swfObj.addVariable("allowedDomain", document.location.hostname);

		//tell the SWF which HTML element it is in
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 501);
swfObj.addVariable("elementID", swfID);

		// set the name of the function to call when the swf has an event
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 504);
swfObj.addVariable("eventHandler", "YAHOO.widget.FlashAdapter.eventHandler");

		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 506);
var container = YAHOO.util.Dom.get(containerID);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 507);
var result = swfObj.write(container);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 508);
if(result)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 510);
this._swf = YAHOO.util.Dom.get(swfID);
			//if successful, let's add an owner property to the SWF reference
			//this will allow the event handler to communicate with a YAHOO.widget.FlashAdapter
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 513);
this._swf.owner = this;
		}
		else
		{
		}
	},

	/**
	 * Handles or re-dispatches events received from the SWF.
	 *
	 * @method _eventHandler
	 * @private
	 */
	_eventHandler: function(event)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_eventHandler", 526);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 528);
var type = event.type;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 529);
switch(type)
		{
			case "swfReady":
   				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 532);
this._loadHandler();
   				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 533);
this.fireEvent("contentReady");
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 534);
return;
			case "log":
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 536);
return;
		}
		
		//be sure to return after your case or the event will automatically fire!
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 540);
this.fireEvent(type, event);
	},

	/**
	 * Called when the SWF has been initialized.
	 *
	 * @method _loadHandler
	 * @private
	 */
	_loadHandler: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_loadHandler", 549);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 551);
this._initialized = false;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 552);
this._initAttributes(this._attributes);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 553);
this.setAttributes(this._attributes, true);
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 555);
this._initialized = true;
	},
	
	set: function(name, value)
	{
		//save all the attributes in case the swf reloads
		//so that we can pass them in again
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "set", 558);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 562);
this._attributes[name] = value;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 563);
YAHOO.widget.FlashAdapter.superclass.set.call(this, name, value);
	},
	
	/**
	 * Initializes the attributes.
	 *
	 * @method _initAttributes
	 * @private
	 */
	_initAttributes: function(attributes)
	{
		//should be overridden if other attributes need to be set up

		/**
		 * @attribute wmode
		 * @description Sets the window mode of the Flash Player control. May be
		 *		"window", "opaque", or "transparent". Only available in the constructor
		 *		because it may not be set after Flash Player has been embedded in the page.
		 * @type String
		 */
		 
		/**
		 * @attribute expressInstall
		 * @description URL pointing to a SWF file that handles Flash Player's express
		 *		install feature. Only available in the constructor because it may not be
		 *		set after Flash Player has been embedded in the page.
		 * @type String
		 */

		/**
		 * @attribute version
		 * @description Minimum required version for the SWF file. Only available in the constructor because it may not be
		 *		set after Flash Player has been embedded in the page.
		 * @type String
		 */

		/**
		 * @attribute backgroundColor
		 * @description The background color of the SWF. Only available in the constructor because it may not be
		 *		set after Flash Player has been embedded in the page.
		 * @type String
		 */
		 
		/**
		 * @attribute altText
		 * @description The alternative text to provide for screen readers and other assistive technology.
		 * @type String
		 */
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_initAttributes", 572);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 611);
this.getAttributeConfig("altText",
		{
			method: this._getAltText
		});
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 615);
this.setAttributeConfig("altText",
		{
			method: this._setAltText
		});
		
		/**
		 * @attribute swfURL
		 * @description Absolute or relative URL to the SWF displayed by the FlashAdapter. Only available in the constructor because it may not be
		 *		set after Flash Player has been embedded in the page.
		 * @type String
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 626);
this.getAttributeConfig("swfURL",
		{
			method: this._getSWFURL
		});
	},
	
	/**
	 * Getter for swfURL attribute.
	 *
	 * @method _getSWFURL
	 * @private
	 */
	_getSWFURL: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getSWFURL", 638);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 640);
return this._swfURL;
	},
	
	/**
	 * Getter for altText attribute.
	 *
	 * @method _getAltText
	 * @private
	 */
	_getAltText: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getAltText", 649);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 651);
return this._swf.getAltText();
	},

	/**
	 * Setter for altText attribute.
	 *
	 * @method _setAltText
	 * @private
	 */
	_setAltText: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setAltText", 660);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 662);
return this._swf.setAltText(value);
	}
});

/**
 * Receives event messages from SWF and passes them to the correct instance
 * of FlashAdapter.
 *
 * @method YAHOO.widget.FlashAdapter.eventHandler
 * @static
 * @private
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 674);
YAHOO.widget.FlashAdapter.eventHandler = function(elementID, event)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "eventHandler", 674);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 676);
var loadedSWF = YAHOO.util.Dom.get(elementID);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 677);
if(!loadedSWF.owner)
	{
		//fix for ie: if owner doesn't exist yet, try again in a moment
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 680);
setTimeout(function() { _yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "(anonymous 1)", 680);
YAHOO.widget.FlashAdapter.eventHandler( elementID, event ); }, 0);
	}
	else
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 684);
loadedSWF.owner._eventHandler(event);
	}
};

/**
 * The number of proxy functions that have been created.
 * @static
 * @private
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 693);
YAHOO.widget.FlashAdapter.proxyFunctionCount = 0;

/**
 * Creates a globally accessible function that wraps a function reference.
 * Returns the proxy function's name as a string for use by the SWF through
 * ExternalInterface.
 *
 * @method YAHOO.widget.FlashAdapter.createProxyFunction
 * @static
 * @private
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 704);
YAHOO.widget.FlashAdapter.createProxyFunction = function(func)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "createProxyFunction", 704);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 706);
var index = YAHOO.widget.FlashAdapter.proxyFunctionCount;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 707);
YAHOO.widget.FlashAdapter["proxyFunction" + index] = function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "]", 707);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 709);
return func.apply(null, arguments);
	};
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 711);
YAHOO.widget.FlashAdapter.proxyFunctionCount++;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 712);
return "YAHOO.widget.FlashAdapter.proxyFunction" + index.toString();
};

/**
 * Removes a function created with createProxyFunction()
 * 
 * @method YAHOO.widget.FlashAdapter.removeProxyFunction
 * @static
 * @private
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 722);
YAHOO.widget.FlashAdapter.removeProxyFunction = function(funcName)
{
	//quick error check
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "removeProxyFunction", 722);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 725);
if(!funcName || funcName.indexOf("YAHOO.widget.FlashAdapter.proxyFunction") < 0)
	{
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 727);
return;
	}
	
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 730);
funcName = funcName.substr(26);
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 731);
YAHOO.widget.FlashAdapter[funcName] = null;
};

/**
 * The Charts widget provides a Flash control for displaying data
 * graphically by series across A-grade browsers with Flash Player installed.
 *
 * @module charts
 * @requires yahoo, dom, event, datasource
 * @title Charts Widget
 * @experimental
 */
 
/****************************************************************************/
/****************************************************************************/
/****************************************************************************/

/**
 * Chart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class Chart
 * @uses YAHOO.widget.FlashAdapter
 * @constructor
 * @param type {String} The char type. May be "line", "column", "bar", or "pie"
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 760);
YAHOO.widget.Chart = function(type, containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "Chart", 760);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 762);
YAHOO.widget.Chart.superclass.constructor.call(this, YAHOO.widget.Chart.SWFURL, containerId, attributes);
	
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 764);
this._type = type;
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 765);
this._dataSource = dataSource;
	
	/**
	 * Fires when the user moves the mouse over the bounds of an item renderer in the chart.
	 *
	 * @event itemMouseOverEvent
	 * @param event.type {String} The event type
	 * @param event.item {Object} The data displayed by the renderer
	 * @param event.index {Number} The position within the series that the item appears.
	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.
	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.
	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 778);
this.createEvent("itemMouseOverEvent");
	
	/**
	 * Fires when the user moves the mouse out of the bounds of an item renderer in the chart.
	 *
	 * @event itemMouseOutEvent
	 * @param event.type {String} The event type
	 * @param event.item {Object} The data displayed by the renderer
	 * @param event.index {Number} The position within the series that the item appears.
	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.
	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.
	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 791);
this.createEvent("itemMouseOutEvent");
	
	/**
	 * Fires when the user clicks an item renderer in the chart with the mouse.
	 *
	 * @event itemClickEvent
	 * @param event.type {String} The event type
	 * @param event.item {Object} The data displayed by the renderer
	 * @param event.index {Number} The position within the series that the item appears.
	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.
	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.
	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 804);
this.createEvent("itemClickEvent");
	
	/**
	 * Fires when the user double-clicks an item renderer in the chart with the mouse.
	 *
	 * @event itemDoubleClickEvent
	 * @param event.type {String} The event type
	 * @param event.item {Object} The data displayed by the renderer
	 * @param event.index {Number} The position within the series that the item appears.
	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.
	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.
	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 817);
this.createEvent("itemDoubleClickEvent");
	
	/**
	 * Fires when the user presses the mouse down on an item to initiate a drag action.
	 *
	 * @event itemDragStartEvent
	 * @param event.type {String} The event type
	 * @param event.item {Object} The data displayed by the renderer
	 * @param event.index {Number} The position within the series that the item appears.
	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.
	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.
	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 830);
this.createEvent("itemDragStartEvent");
	
	/**
	 * Fires when the user moves the mouse during a drag action.
	 *
	 * @event itemDragEvent
	 * @param event.type {String} The event type
	 * @param event.item {Object} The data displayed by the renderer
	 * @param event.index {Number} The position within the series that the item appears.
	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.
	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.
	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 843);
this.createEvent("itemDragEvent");

	/**
	 * Fires when the user releases the mouse during a drag action.
	 *
	 * @event itemDragEndEvent
	 * @param event.type {String} The event type
	 * @param event.item {Object} The data displayed by the renderer
	 * @param event.index {Number} The position within the series that the item appears.
	 * @param event.seriesIndex {Number} The position within the series definition that the series appears.
	 * @param event.x {Number} The horizontal position of the mouse, relative to the SWF.
	 * @param event.y {Number} The vertical position of the mouse, relative to the SWF.
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 856);
this.createEvent("itemDragEndEvent");
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 859);
YAHOO.extend(YAHOO.widget.Chart, YAHOO.widget.FlashAdapter,
{
	/**
	 * The type of this chart instance.
	 * @property _type
	 * @type String
	 * @private
	 */
	_type: null,

	/**
	 * The id returned from the DataSource's setInterval function.
	 * @property _pollingID
	 * @type Number
	 * @private
	 */
	_pollingID: null,

	/**
	 * The time, in ms, between requests for data.
	 * @property _pollingInterval
	 * @type Number
	 * @private
	 */
	_pollingInterval: null,

	/**
	 * Stores a reference to the dataTipFunction created by
	 * YAHOO.widget.FlashAdapter.createProxyFunction()
	 * @property _dataTipFunction
	 * @type String
	 * @private
	 */
	_dataTipFunction: null,
	
	/**
	 * Stores references to series labelFunction values created by
	 * YAHOO.widget.FlashAdapter.createProxyFunction()
	 * @property _seriesLabelFunctions
	 * @type Array
	 * @private
	 */
	_seriesLabelFunctions: null,

	/**
	 * Public accessor to the unique name of the Chart instance.
	 *
	 * @method toString
	 * @return {String} Unique name of the Chart instance.
	 */
	toString: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "toString", 909);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 911);
return "Chart " + this._id;
	},
	
	/**
	 * Sets a single style value on the Chart instance.
	 *
	 * @method setStyle
	 * @param name {String} Name of the Chart style value to change.
	 * @param value {Object} New value to pass to the Chart style.
	 */
	setStyle: function(name, value)
	{
		//we must jsonify this because Flash Player versions below 9.0.60 don't handle
		//complex ExternalInterface parsing correctly
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "setStyle", 921);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 925);
value = YAHOO.lang.JSON.stringify(value);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 926);
this._swf.setStyle(name, value);
	},
	
	/**
	 * Resets all styles on the Chart instance.
	 *
	 * @method setStyles
	 * @param styles {Object} Initializer for all Chart styles.
	 */
	setStyles: function(styles)
	{
		//we must jsonify this because Flash Player versions below 9.0.60 don't handle
		//complex ExternalInterface parsing correctly
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "setStyles", 935);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 939);
styles = YAHOO.lang.JSON.stringify(styles);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 940);
this._swf.setStyles(styles);
	},
	
	/**
	 * Sets the styles on all series in the Chart.
	 *
	 * @method setSeriesStyles
	 * @param styles {Array} Initializer for all Chart series styles.
	 */
	setSeriesStyles: function(styles)
	{
		//we must jsonify this because Flash Player versions below 9.0.60 don't handle
		//complex ExternalInterface parsing correctly
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "setSeriesStyles", 949);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 953);
for(var i = 0; i < styles.length; i++)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 955);
styles[i] = YAHOO.lang.JSON.stringify(styles[i]);	
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 957);
this._swf.setSeriesStyles(styles);
	},
	
	destroy: function()
	{
		//stop polling if needed
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "destroy", 960);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 963);
if(this._dataSource !== null)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 965);
if(this._pollingID !== null)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 967);
this._dataSource.clearInterval(this._pollingID);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 968);
this._pollingID = null;
			}
		}
		
		//remove proxy functions
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 973);
if(this._dataTipFunction)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 975);
YAHOO.widget.FlashAdapter.removeProxyFunction(this._dataTipFunction);
		}
		
		//call last
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 979);
YAHOO.widget.Chart.superclass.destroy.call(this);
	},
	
	/**
	 * Initializes the attributes.
	 *
	 * @method _initAttributes
	 * @private
	 */
	_initAttributes: function(attributes)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_initAttributes", 988);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 990);
YAHOO.widget.Chart.superclass._initAttributes.call(this, attributes);

		/**
		 * @attribute request
		 * @description Request to be sent to the Chart's DataSource.
		 * @type String
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 997);
this.getAttributeConfig("request",
		{
			method: this._getRequest
		});
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1002);
this.setAttributeConfig("request",
		{
			method: this._setRequest
		});
		
		/**
		 * @attribute dataSource
		 * @description The DataSource instance to display in the Chart.
		 * @type DataSource
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1012);
this.getAttributeConfig("dataSource",
		{
			method: this._getDataSource
		});
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1017);
this.setAttributeConfig("dataSource",
		{
			method: this._setDataSource
		});
		
		/**
		 * @attribute series
		 * @description Defines the series to be displayed by the Chart.
		 * @type Array
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1027);
this.getAttributeConfig("series",
		{
			method: this._getSeriesDefs
		});
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1032);
this.setAttributeConfig("series",
		{
			method: this._setSeriesDefs
		});
		
		/**
		 * @attribute categoryNames
		 * @description Defines the names of the categories to be displayed in the Chart..
		 * @type Array
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1042);
this.getAttributeConfig("categoryNames",
		{
			method: this._getCategoryNames
		});
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1047);
this.setAttributeConfig("categoryNames",
		{
			validator: YAHOO.lang.isArray,
			method: this._setCategoryNames
		});
		
		/**
		 * @attribute dataTipFunction
		 * @description The string representation of a globally-accessible function
		 * that may be called by the SWF to generate the datatip text for a Chart's item.
		 * @type String
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1059);
this.getAttributeConfig("dataTipFunction",
		{
			method: this._getDataTipFunction
		});
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1064);
this.setAttributeConfig("dataTipFunction",
		{
			method: this._setDataTipFunction
		});

		/**
		 * @attribute polling
		 * @description A numeric value indicating the number of milliseconds between
		 * polling requests to the DataSource.
		 * @type Number
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1075);
this.getAttributeConfig("polling",
		{
			method: this._getPolling
		});

		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1080);
this.setAttributeConfig("polling",
		{
			method: this._setPolling
		});
	},
	
	/**
	 * Called when the SWF is ready for communication. Sets the type, initializes
	 * the styles, and sets the DataSource.
	 *
	 * @method _loadHandler
	 * @private
	 */
	_loadHandler: function()
	{
		//the type is set separately because it must be first!
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_loadHandler", 1093);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1096);
this._swf.setType(this._type);
		
		//set initial styles
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1099);
if(this._attributes.style)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1101);
var style = this._attributes.style;
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1102);
this.setStyles(style);		
		}
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1105);
YAHOO.widget.Chart.superclass._loadHandler.call(this);
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1107);
if(this._dataSource)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1109);
this.set("dataSource", this._dataSource);
		}
	},

	/**
	 * Sends (or resends) the request to the DataSource.
	 *
	 * @method refreshData
	 */
	refreshData: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "refreshData", 1118);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1120);
if(!this._initialized)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1122);
return;
		}
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1125);
if(this._dataSource !== null)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1127);
if(this._pollingID !== null)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1129);
this._dataSource.clearInterval(this._pollingID);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1130);
this._pollingID = null;
			}
			
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1133);
if(this._pollingInterval > 0)
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1135);
this._pollingID = this._dataSource.setInterval(this._pollingInterval, this._request, this._loadDataHandler, this);
			}
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1137);
this._dataSource.sendRequest(this._request, this._loadDataHandler, this);
		}
	},

	/**
	 * Called when the DataSource receives new data. The series definitions are used
	 * to build a data provider for the SWF chart.
	 *
	 * @method _loadDataHandler
	 * @private
	 */
	_loadDataHandler: function(request, response, error)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_loadDataHandler", 1148);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1150);
if(this._swf)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1152);
if(error)
			{
			}
			else
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1157);
var i;
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1158);
if(this._seriesLabelFunctions)
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1160);
var count = this._seriesLabelFunctions.length;
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1161);
for(i = 0; i < count; i++)
					{
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1163);
YAHOO.widget.FlashAdapter.removeProxyFunction(this._seriesLabelFunctions[i]);
					}
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1165);
this._seriesLabelFunction = null;
				}
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1167);
this._seriesLabelFunctions = [];

				//make a copy of the series definitions so that we aren't
				//editing them directly.
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1171);
var dataProvider = [];	
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1172);
var seriesCount = 0;
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1173);
var currentSeries = null;
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1174);
if(this._seriesDefs !== null)
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1176);
seriesCount = this._seriesDefs.length;
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1177);
for(i = 0; i < seriesCount; i++)
					{
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1179);
currentSeries = this._seriesDefs[i];
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1180);
var clonedSeries = {};
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1181);
for(var prop in currentSeries)
						{
							_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1183);
if(YAHOO.lang.hasOwnProperty(currentSeries, prop))
							{
								_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1185);
if(prop == "style")
								{
									_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1187);
if(currentSeries.style !== null)
									{
										_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1189);
clonedSeries.style = YAHOO.lang.JSON.stringify(currentSeries.style);
									}
								}

								else {_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1193);
if(prop == "labelFunction")
								{
									_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1195);
if(currentSeries.labelFunction !== null &&
										typeof currentSeries.labelFunction == "function")
									{
										_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1198);
clonedSeries.labelFunction = YAHOO.widget.FlashAdapter.createProxyFunction(currentSeries.labelFunction);
										_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1199);
this._seriesLabelFunctions.push(clonedSeries.labelFunction);
									}
								}

								else
								{
									_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1205);
clonedSeries[prop] = currentSeries[prop];
								}}
							}
						}
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1209);
dataProvider.push(clonedSeries);
					}
				}

				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1213);
if(seriesCount > 0)
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1215);
for(i = 0; i < seriesCount; i++)
					{
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1217);
currentSeries = dataProvider[i];
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1218);
if(!currentSeries.type)
						{
							_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1220);
currentSeries.type = this._type;
						}
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1222);
currentSeries.dataProvider = response.results;
					}
				}
				else
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1227);
var series = {type: this._type, dataProvider: response.results};
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1228);
dataProvider.push(series);
				}
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1230);
this._swf.setDataProvider(dataProvider);
			}
		}
	},

	/**
	 * Storage for the request attribute.
	 * 
	 * @property _request
	 * @private
	 */
	_request: "",
	
	/**
	 * Getter for the request attribute.
	 *
	 * @method _getRequest
	 * @private
	 */
	_getRequest: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getRequest", 1249);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1251);
return this._request;
	},
	
	/**
	 * Setter for the request attribute.
	 *
	 * @method _setRequest
	 * @private
	 */
	_setRequest: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setRequest", 1260);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1262);
this._request = value;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1263);
this.refreshData();
	},

	/**
	 * Storage for the dataSource attribute.
	 * 
	 * @property _dataSource
	 * @private
	 */
	_dataSource: null,
	
	/**
	 * Getter for the dataSource attribute.
	 *
	 * @method _getDataSource
	 * @private
	 */
	_getDataSource: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getDataSource", 1280);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1282);
return this._dataSource;
	},

	/**
	 * Setter for the dataSource attribute.
	 *
	 * @method _setDataSource
	 * @private
	 */
	_setDataSource: function(value)
	{	
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setDataSource", 1291);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1293);
this._dataSource = value;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1294);
this.refreshData();
	},
	
	/**
	 * Storage for the series attribute.
	 * 
	 * @property _seriesDefs
	 * @private
	 */
	_seriesDefs: null,
	
	/**
	 * Getter for the series attribute.
	 *
	 * @method _getSeriesDefs
	 * @private
	 */
	_getSeriesDefs: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getSeriesDefs", 1311);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1313);
return this._seriesDefs;
	},
	
	/**
	 * Setter for the series attribute.
	 *
	 * @method _setSeriesDefs
	 * @private
	 */
	_setSeriesDefs: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setSeriesDefs", 1322);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1324);
this._seriesDefs = value;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1325);
this.refreshData();
	},

	/**
	 * Getter for the categoryNames attribute.
	 *
	 * @method _getCategoryNames
	 * @private
	 */
	_getCategoryNames: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getCategoryNames", 1334);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1336);
this._swf.getCategoryNames();
	},

	/**
	 * Setter for the categoryNames attribute.
	 *
	 * @method _setCategoryNames
	 * @private
	 */
	_setCategoryNames: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setCategoryNames", 1345);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1347);
this._swf.setCategoryNames(value);
	},
	
	/**
	 * Setter for the dataTipFunction attribute.
	 *
	 * @method _setDataTipFunction
	 * @private
	 */
	_setDataTipFunction: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setDataTipFunction", 1356);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1358);
if(this._dataTipFunction)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1360);
YAHOO.widget.FlashAdapter.removeProxyFunction(this._dataTipFunction);
		}
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1363);
if(value && typeof value == "function")
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1365);
value = YAHOO.widget.FlashAdapter.createProxyFunction(value);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1366);
this._dataTipFunction = value;
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1368);
this._swf.setDataTipFunction(value);
	},

	/**
	 * Getter for the polling attribute.
	 *
	 * @method _getPolling
	 * @private
	 */
	_getPolling: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getPolling", 1377);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1379);
return this._pollingInterval;
	},

	/**
	 * Setter for the polling attribute.
	 *
	 * @method _setPolling
	 * @private
	 */
	_setPolling: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setPolling", 1388);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1390);
this._pollingInterval = value;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1391);
this.refreshData();
	}
});

/**
 * Storage for the dataTipFunction attribute.
 *
 * @property Chart.SWFURL
 * @private
 * @static
 * @final
 * @default "assets/charts.swf"
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1404);
YAHOO.widget.Chart.SWFURL = "assets/charts.swf";

/**
 * PieChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class PieChart
 * @uses YAHOO.widget.Chart
 * @constructor
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1417);
YAHOO.widget.PieChart = function(containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "PieChart", 1417);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1419);
YAHOO.widget.PieChart.superclass.constructor.call(this, "pie", containerId, dataSource, attributes);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1422);
YAHOO.lang.extend(YAHOO.widget.PieChart, YAHOO.widget.Chart,
{
	/**
	 * Initializes the attributes.
	 *
	 * @method _initAttributes
	 * @private
	 */
	_initAttributes: function(attributes)
	{	
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_initAttributes", 1430);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1432);
YAHOO.widget.PieChart.superclass._initAttributes.call(this, attributes);
		
		/**
		 * @attribute dataField
		 * @description The field in each item that corresponds to the data value.
		 * @type String
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1439);
this.getAttributeConfig("dataField",
		{
			method: this._getDataField
		});
   
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1444);
this.setAttributeConfig("dataField",
		{
			validator: YAHOO.lang.isString,
			method: this._setDataField
		});
   
		/**
		 * @attribute categoryField
		 * @description The field in each item that corresponds to the category value.
		 * @type String
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1455);
this.getAttributeConfig("categoryField",
		{
			method: this._getCategoryField
		});
   
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1460);
this.setAttributeConfig("categoryField",
		{
			validator: YAHOO.lang.isString,
			method: this._setCategoryField
		});
	},

	/**
	 * Getter for the dataField attribute.
	 *
	 * @method _getDataField
	 * @private
	 */
	_getDataField: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getDataField", 1473);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1475);
return this._swf.getDataField();
	},

	/**
	 * Setter for the dataField attribute.
	 *
	 * @method _setDataField
	 * @private
	 */
	_setDataField: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setDataField", 1484);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1486);
this._swf.setDataField(value);
	},

	/**
	 * Getter for the categoryField attribute.
	 *
	 * @method _getCategoryField
	 * @private
	 */
	_getCategoryField: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getCategoryField", 1495);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1497);
return this._swf.getCategoryField();
	},

	/**
	 * Setter for the categoryField attribute.
	 *
	 * @method _setCategoryField
	 * @private
	 */
	_setCategoryField: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setCategoryField", 1506);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1508);
this._swf.setCategoryField(value);
	}
});

/**
 * CartesianChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class CartesianChart
 * @uses YAHOO.widget.Chart
 * @constructor
 * @param type {String} The char type. May be "line", "column", or "bar"
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
 _yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1524);
YAHOO.widget.CartesianChart = function(type, containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "CartesianChart", 1524);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1526);
YAHOO.widget.CartesianChart.superclass.constructor.call(this, type, containerId, dataSource, attributes);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1529);
YAHOO.lang.extend(YAHOO.widget.CartesianChart, YAHOO.widget.Chart,
{
	/**
	 * Stores a reference to the xAxis labelFunction created by
	 * YAHOO.widget.FlashAdapter.createProxyFunction()
	 * @property _xAxisLabelFunction
	 * @type String
	 * @private
	 */
	_xAxisLabelFunction: null,
	
	/**
	 * Stores a reference to the yAxis labelFunction created by
	 * YAHOO.widget.FlashAdapter.createProxyFunction()
	 * @property _yAxisLabelFunction
	 * @type String
	 * @private
	 */
	_yAxisLabelFunction: null,
	
	destroy: function()
	{
		//remove proxy functions
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "destroy", 1549);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1552);
if(this._xAxisLabelFunction)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1554);
YAHOO.widget.FlashAdapter.removeProxyFunction(this._xAxisLabelFunction);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1555);
this._xAxisLabelFunction = null;
		}
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1558);
if(this._yAxisLabelFunction)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1560);
YAHOO.widget.FlashAdapter.removeProxyFunction(this._yAxisLabelFunction);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1561);
this._yAxisLabelFunction = null;
		}
	
		//call last
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1565);
YAHOO.widget.CartesianChart.superclass.destroy.call(this);
	},
	
	/**
	 * Initializes the attributes.
	 *
	 * @method _initAttributes
	 * @private
	 */
	_initAttributes: function(attributes)
	{	
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_initAttributes", 1574);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1576);
YAHOO.widget.CartesianChart.superclass._initAttributes.call(this, attributes);

		/**
		 * @attribute xField
		 * @description The field in each item that corresponds to a value on the x axis.
		 * @type String
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1583);
this.getAttributeConfig("xField",
		{
			method: this._getXField
		});

		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1588);
this.setAttributeConfig("xField",
		{
			validator: YAHOO.lang.isString,
			method: this._setXField
		});

		/**
		 * @attribute yField
		 * @description The field in each item that corresponds to a value on the x axis.
		 * @type String
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1599);
this.getAttributeConfig("yField",
		{
			method: this._getYField
		});

		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1604);
this.setAttributeConfig("yField",
		{
			validator: YAHOO.lang.isString,
			method: this._setYField
		});

		/**
		 * @attribute xAxis
		 * @description A custom configuration for the horizontal x axis.
		 * @type Axis
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1615);
this.setAttributeConfig("xAxis",
		{
			method: this._setXAxis
		});

		/**
		 * @attribute yAxis
		 * @description A custom configuration for the vertical y axis.
		 * @type Axis
		 */
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1625);
this.setAttributeConfig("yAxis",
		{
			method: this._setYAxis
		});
	},

	/**
	 * Getter for the xField attribute.
	 *
	 * @method _getXField
	 * @private
	 */
	_getXField: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getXField", 1637);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1639);
return this._swf.getHorizontalField();
	},

	/**
	 * Setter for the xField attribute.
	 *
	 * @method _setXField
	 * @private
	 */
	_setXField: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setXField", 1648);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1650);
this._swf.setHorizontalField(value);
	},

	/**
	 * Getter for the yField attribute.
	 *
	 * @method _getYField
	 * @private
	 */
	_getYField: function()
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_getYField", 1659);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1661);
return this._swf.getVerticalField();
	},

	/**
	 * Setter for the yField attribute.
	 *
	 * @method _setYField
	 * @private
	 */
	_setYField: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setYField", 1670);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1672);
this._swf.setVerticalField(value);
	},
	
	/**
	 * Setter for the xAxis attribute.
	 *
	 * @method _setXAxis
	 * @private
	 */
	_setXAxis: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setXAxis", 1681);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1683);
if(this._xAxisLabelFunction !== null)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1685);
YAHOO.widget.FlashAdapter.removeProxyFunction(this._xAxisLabelFunction);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1686);
this._xAxisLabelFunction = null;
		}
		
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1689);
var clonedXAxis = {};
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1690);
for(var prop in value)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1692);
if(prop == "labelFunction")
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1694);
if(value.labelFunction !== null)
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1696);
if(typeof value.labelFunction == "function")
					{
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1698);
clonedXAxis.labelFunction = YAHOO.widget.FlashAdapter.createProxyFunction(value.labelFunction);
					}
					else
					{
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1702);
clonedXAxis.labelFunction = value.labelFunction;
					}
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1704);
this._xAxisLabelFunction = clonedXAxis.labelFunction;
				}
			}
			else
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1709);
clonedXAxis[prop] = value[prop];
			}
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1712);
this._swf.setHorizontalAxis(clonedXAxis);
	},

	/**
	 * Getter for the yAxis attribute.
	 *
	 * @method _setYAxis
	 * @private
	 */
	_setYAxis: function(value)
	{
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_setYAxis", 1721);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1723);
if(this._yAxisLabelFunction !== null)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1725);
YAHOO.widget.FlashAdapter.removeProxyFunction(this._yAxisLabelFunction);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1726);
this._yAxisLabelFunction = null;
		}

		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1729);
var clonedYAxis = {};
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1730);
for(var prop in value)
		{
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1732);
if(prop == "labelFunction")
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1734);
if(value.labelFunction !== null)
				{
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1736);
if(typeof value.labelFunction == "function")
					{
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1738);
clonedYAxis.labelFunction = YAHOO.widget.FlashAdapter.createProxyFunction(value.labelFunction);
					}
					else
					{
						_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1742);
clonedYAxis.labelFunction = value.labelFunction;
					}
					_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1744);
this._yAxisLabelFunction = clonedYAxis.labelFunction;
				}
			}
			else
			{
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1749);
clonedYAxis[prop] = value[prop];
			}
		}
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1752);
this._swf.setVerticalAxis(clonedYAxis);
	}
});

/**
 * LineChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class LineChart
 * @uses YAHOO.widget.CartesianChart
 * @constructor
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1767);
YAHOO.widget.LineChart = function(containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "LineChart", 1767);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1769);
YAHOO.widget.LineChart.superclass.constructor.call(this, "line", containerId, dataSource, attributes);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1772);
YAHOO.lang.extend(YAHOO.widget.LineChart, YAHOO.widget.CartesianChart);

/**
 * ColumnChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class ColumnChart
 * @uses YAHOO.widget.CartesianChart
 * @constructor
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1785);
YAHOO.widget.ColumnChart = function(containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "ColumnChart", 1785);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1787);
YAHOO.widget.ColumnChart.superclass.constructor.call(this, "column", containerId, dataSource, attributes);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1790);
YAHOO.lang.extend(YAHOO.widget.ColumnChart, YAHOO.widget.CartesianChart);

/**
 * BarChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class BarChart
 * @uses YAHOO.widget.CartesianChart
 * @constructor
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1803);
YAHOO.widget.BarChart = function(containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "BarChart", 1803);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1805);
YAHOO.widget.BarChart.superclass.constructor.call(this, "bar", containerId, dataSource, attributes);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1808);
YAHOO.lang.extend(YAHOO.widget.BarChart, YAHOO.widget.CartesianChart);

/**
 * StackedColumnChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class StackedColumnChart
 * @uses YAHOO.widget.CartesianChart
 * @constructor
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1821);
YAHOO.widget.StackedColumnChart = function(containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "StackedColumnChart", 1821);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1823);
YAHOO.widget.StackedColumnChart.superclass.constructor.call(this, "stackcolumn", containerId, dataSource, attributes);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1826);
YAHOO.lang.extend(YAHOO.widget.StackedColumnChart, YAHOO.widget.CartesianChart);

/**
 * StackedBarChart class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class StackedBarChart
 * @uses YAHOO.widget.CartesianChart
 * @constructor
 * @param containerId {HTMLElement} Container element for the Flash Player instance.
 * @param dataSource {YAHOO.util.DataSource} DataSource instance.
 * @param attributes {object} (optional) Object literal of configuration values.
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1839);
YAHOO.widget.StackedBarChart = function(containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "StackedBarChart", 1839);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1841);
YAHOO.widget.StackedBarChart.superclass.constructor.call(this, "stackbar", containerId, dataSource, attributes);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1844);
YAHOO.lang.extend(YAHOO.widget.StackedBarChart, YAHOO.widget.CartesianChart);

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
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1857);
YAHOO.widget.DraggableLineChart = function(containerId, dataSource, attributes)
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "DraggableLineChart", 1857);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1859);
YAHOO.widget.DraggableLineChart.superclass.constructor.call(this, containerId, dataSource, attributes);

	/**
	 * 
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1864);
this.createEvent("itemDDStartEvent");
	/**
	 * 
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1868);
this.createEvent("itemDDEvent");
	/**
	 * 
	 */
	_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1872);
this.createEvent("itemDDEndEvent");
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1875);
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
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "_eventHandler", 1904);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1906);
YAHOO.widget.DraggableLineChart.superclass._eventHandler.call(this, event);

		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1908);
var type = event.type;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1909);
switch(type)
		{
			case "swfReady":
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1912);
this.onSwfReady(event);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1913);
return;
			case "itemDDStartEvent":
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1915);
this.onItemDDStart(event);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1916);
return;
			case "itemDDEvent":
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1918);
this.onItemDD(event);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1919);
return;
			case "itemDDEndEvent":
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1921);
this.onItemDDEnd(event);
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1922);
return;
			default:
				_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1924);
return;
		}
	},

	onDestroy: function(){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "onDestroy", 1928);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1929);
YAHOO.widget.DraggableLineChart.superclass.onDestroy.call(this);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1930);
delete window[this.temporaryValueTipFnName];
	},

	setTemporaryValueTipRenderer : function(fn){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "setTemporaryValueTipRenderer", 1933);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1934);
var chart = this;
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1935);
this.temporaryValueTipFnName = this.createFnProxy(function(item, index, series){
			_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "(anonymous 2)", 1935);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1936);
var record = chart._dataSource.liveData[o.index];
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1937);
return fn(record, index, series);
		}, this.temporaryValueTipFnName);
		_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1939);
this.swf.setTemporaryValueTipFunction(this.temporaryValueTipFnName);
	},

	onSwfReady : function(o) {
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "onSwfReady", 1942);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1943);
if (this.temporaryValueTipRenderer) {
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1944);
this.setTemporaryValueTipRenderer(this.temporaryValueTipRenderer);
		}
	},

	onItemDDStart : function(o) {
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "onItemDDStart", 1948);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1949);
if (this._seriesDefs[o.seriesIndex].dragable) {
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1950);
this.draggedItemIdx = o.index;
		}
	},

	onItemDD : function(o) {
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "onItemDD", 1954);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1955);
this.draggedItemIdx = o.index;
	},

	onItemDDEnd : function(o) {
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "onItemDDEnd", 1958);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1959);
if (this._seriesDefs[o.seriesIndex].dragable) {
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1960);
var yField = this._seriesDefs[o.seriesIndex].yField;
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1961);
this._dataSource.liveData[o.index][yField] = o.newValue;
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1962);
this._setDataSource(this._dataSource);
			_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1963);
this.draggedItemIdx = null;
		}
	},

	getXAxis : function(){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getXAxis", 1967);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1968);
return this._swf.getHorizontalAxis();
	},

	getYAxis : function(){
		_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "getYAxis", 1971);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1972);
return this._swf.getVerticalAxis();
	}
});

/**
 * Defines a CartesianChart's vertical or horizontal axis.
 *
 * @namespace YAHOO.widget
 * @class Axis
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1983);
YAHOO.widget.Axis = function()
{
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 1987);
YAHOO.widget.Axis.prototype = 
{
	/**
	 * The type of axis.
	 *
	 * @property type
	 * @type String
	 */
	type: null,
	
	/**
	 * If true, the items on the axis will be drawn in opposite direction.
	 *
	 * @property reverse
	 * @type Boolean
	 */
	reverse: false,
	
	/**
	 * A string reference to the globally-accessible function that may be called to
	 * determine each of the label values for this axis. Also accepts function references.
	 *
	 * @property labelFunction
	 * @type String
	 */
	labelFunction: null,
	
	/**
	 * The space, in pixels, between labels on an axis.
	 *
	 * @property labelSpacing
	 * @type Number
	 */
	labelSpacing: 2,
	
	/**
	 * The text that will appear next to the axis to indicate information about the data that it displays.
	 *
	 * @property title
	 * @type String
	 */
	title: null 
};

/**
 * A type of axis whose units are measured in numeric values.
 *
 * @namespace YAHOO.widget
 * @class NumericAxis
 * @extends YAHOO.widget.Axis
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2039);
YAHOO.widget.NumericAxis = function()
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "NumericAxis", 2039);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2041);
YAHOO.widget.NumericAxis.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2044);
YAHOO.lang.extend(YAHOO.widget.NumericAxis, YAHOO.widget.Axis,
{
	type: "numeric",
	
	/**
	 * The minimum value drawn by the axis. If not set explicitly, the axis minimum
	 * will be calculated automatically.
	 *
	 * @property minimum
	 * @type Number
	 */
	minimum: NaN,
	
	/**
	 * The maximum value drawn by the axis. If not set explicitly, the axis maximum
	 * will be calculated automatically.
	 *
	 * @property maximum
	 * @type Number
	 */
	maximum: NaN,
	
	/**
	 * The spacing between major intervals on this axis.
	 *
	 * @property majorUnit
	 * @type Number
	 */
	majorUnit: NaN,

	/**
	 * The spacing between minor intervals on this axis.
	 *
	 * @property minorUnit
	 * @type Number
	 */
	minorUnit: NaN,
	
	/**
	 * If true, the labels, ticks, gridlines, and other objects will snap to
	 * the nearest major or minor unit. If false, their position will be based
	 * on the minimum value.
	 *
	 * @property snapToUnits
	 * @type Boolean
	 */
	snapToUnits: true,
	
	/**
	 * Series that are stackable will only stack when this value is set to true.
	 *
	 * @property stackingEnabled
	 * @type Boolean
	 */
	stackingEnabled: false,

	/**
	 * If true, and the bounds are calculated automatically, either the minimum or
	 * maximum will be set to zero.
	 *
	 * @property alwaysShowZero
	 * @type Boolean
	 */
	alwaysShowZero: true,

	/**
	 * The scaling algorithm to use on this axis. May be "linear" or "logarithmic".
	 *
	 * @property scale
	 * @type String
	 */
	scale: "linear",
	
	/**
	 * Indicates whether to round the major unit.
	 * 
	 * @property roundMajorUnit
	 * @type Boolean
	 */
	roundMajorUnit: true 
});

/**
 * A type of axis whose units are measured in time-based values.
 *
 * @namespace YAHOO.widget
 * @class TimeAxis
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2133);
YAHOO.widget.TimeAxis = function()
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "TimeAxis", 2133);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2135);
YAHOO.widget.TimeAxis.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2138);
YAHOO.lang.extend(YAHOO.widget.TimeAxis, YAHOO.widget.Axis,
{
	type: "time",
	
	/**
	 * The minimum value drawn by the axis. If not set explicitly, the axis minimum
	 * will be calculated automatically.
	 *
	 * @property minimum
	 * @type Date
	 */
	minimum: null,

	/**
	 * The maximum value drawn by the axis. If not set explicitly, the axis maximum
	 * will be calculated automatically.
	 *
	 * @property maximum
	 * @type Number
	 */
	maximum: null,
	
	/**
	 * The spacing between major intervals on this axis.
	 *
	 * @property majorUnit
	 * @type Number
	 */
	majorUnit: NaN,
	
	/**
	 * The time unit used by the majorUnit.
	 *
	 * @property majorTimeUnit
	 * @type String
	 */
	majorTimeUnit: null,
	
	/**
	 * The spacing between minor intervals on this axis.
	 *
	 * @property majorUnit
	 * @type Number
	 */
	minorUnit: NaN,
	
	/**
	 * The time unit used by the minorUnit.
	 *
	 * @property majorTimeUnit
	 * @type String
	 */
	minorTimeUnit: null,

	/**
	 * If true, the labels, ticks, gridlines, and other objects will snap to
	 * the nearest major or minor unit. If false, their position will be based
	 * on the minimum value.
	 *
	 * @property snapToUnits
	 * @type Boolean
	 */
	snapToUnits: true,

	/**
	 * Series that are stackable will only stack when this value is set to true.
	 *
	 * @property stackingEnabled
	 * @type Boolean
	 */
	stackingEnabled: false
});

/**
 * A type of axis that displays items in categories.
 *
 * @namespace YAHOO.widget
 * @class CategoryAxis
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2218);
YAHOO.widget.CategoryAxis = function()
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "CategoryAxis", 2218);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2220);
YAHOO.widget.CategoryAxis.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2223);
YAHOO.lang.extend(YAHOO.widget.CategoryAxis, YAHOO.widget.Axis,
{
	type: "category",
	
	/**
	 * A list of category names to display along this axis.
	 *
	 * @property categoryNames
	 * @type Array
	 */
	categoryNames: null,
	
	/**
	 * Indicates whether or not to calculate the number of categories (ticks and labels)
	 * when there is not enough room to display all labels on the axis. If set to true, the axis 
	 * will determine the number of categories to plot. If not, all categories will be plotted.
	 *
	 * @property calcualateCategoryCount
	 * @type Boolean
	 */
	calculateCategoryCount: false 
});

/**
 * Functionality common to most series. Generally, a <code>Series</code> 
 * object shouldn't be instantiated directly. Instead, a subclass with a 
 * concrete implementation should be used.
 *
 * @namespace YAHOO.widget
 * @class Series
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2255);
YAHOO.widget.Series = function() {};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2257);
YAHOO.widget.Series.prototype = 
{
	/**
	 * The type of series.
	 *
	 * @property type
	 * @type String
	 */
	type: null,
	
	/**
	 * The human-readable name of the series.
	 *
	 * @property displayName
	 * @type String
	 */
	displayName: null
};

/**
 * Functionality common to most series appearing in cartesian charts.
 * Generally, a <code>CartesianSeries</code> object shouldn't be
 * instantiated directly. Instead, a subclass with a concrete implementation
 * should be used.
 *
 * @namespace YAHOO.widget
 * @class CartesianSeries
 * @uses YAHOO.widget.Series
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2287);
YAHOO.widget.CartesianSeries = function() 
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "CartesianSeries", 2287);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2289);
YAHOO.widget.CartesianSeries.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2292);
YAHOO.lang.extend(YAHOO.widget.CartesianSeries, YAHOO.widget.Series,
{
	/**
	 * The field used to access the x-axis value from the items from the data source.
	 *
	 * @property xField
	 * @type String
	 */
	xField: null,
	
	/**
	 * The field used to access the y-axis value from the items from the data source.
	 *
	 * @property yField
	 * @type String
	 */
	yField: null
});

/**
 * ColumnSeries class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class ColumnSeries
 * @uses YAHOO.widget.CartesianSeries
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2319);
YAHOO.widget.ColumnSeries = function() 
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "ColumnSeries", 2319);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2321);
YAHOO.widget.ColumnSeries.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2324);
YAHOO.lang.extend(YAHOO.widget.ColumnSeries, YAHOO.widget.CartesianSeries,
{
	type: "column"
});

/**
 * LineSeries class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class LineSeries
 * @uses YAHOO.widget.CartesianSeries
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2337);
YAHOO.widget.LineSeries = function() 
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "LineSeries", 2337);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2339);
YAHOO.widget.LineSeries.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2342);
YAHOO.lang.extend(YAHOO.widget.LineSeries, YAHOO.widget.CartesianSeries,
{
	type: "line"
});


/**
 * BarSeries class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class BarSeries
 * @uses YAHOO.widget.CartesianSeries
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2356);
YAHOO.widget.BarSeries = function() 
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "BarSeries", 2356);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2358);
YAHOO.widget.BarSeries.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2361);
YAHOO.lang.extend(YAHOO.widget.BarSeries, YAHOO.widget.CartesianSeries,
{
	type: "bar"
});


/**
 * PieSeries class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class PieSeries
 * @uses YAHOO.widget.Series
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2375);
YAHOO.widget.PieSeries = function() 
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "PieSeries", 2375);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2377);
YAHOO.widget.PieSeries.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2380);
YAHOO.lang.extend(YAHOO.widget.PieSeries, YAHOO.widget.Series,
{
	type: "pie",
	
	/**
	 * The field used to access the data value from the items from the data source.
	 *
	 * @property dataField
	 * @type String
	 */
	dataField: null,
	
	/**
	 * The field used to access the category value from the items from the data source.
	 *
	 * @property categoryField
	 * @type String
	 */
	categoryField: null,

	/**
	 * A string reference to the globally-accessible function that may be called to
	 * determine each of the label values for this series. Also accepts function references.
	 *
	 * @property labelFunction
	 * @type String
	 */
	labelFunction: null
});

/**
 * StackedBarSeries class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class StackedBarSeries
 * @uses YAHOO.widget.CartesianSeries
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2418);
YAHOO.widget.StackedBarSeries = function() 
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "StackedBarSeries", 2418);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2420);
YAHOO.widget.StackedBarSeries.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2423);
YAHOO.lang.extend(YAHOO.widget.StackedBarSeries, YAHOO.widget.CartesianSeries,
{
	type: "stackbar"
});

/**
 * StackedColumnSeries class for the YUI Charts widget.
 *
 * @namespace YAHOO.widget
 * @class StackedColumnSeries
 * @uses YAHOO.widget.CartesianSeries
 * @constructor
 */
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2436);
YAHOO.widget.StackedColumnSeries = function() 
{
	_yuitest_coverfunc("D:\work\nils\yui2\src\charts\build_tmp\charts.js", "StackedColumnSeries", 2436);
_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2438);
YAHOO.widget.StackedColumnSeries.superclass.constructor.call(this);
};

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2441);
YAHOO.lang.extend(YAHOO.widget.StackedColumnSeries, YAHOO.widget.CartesianSeries,
{
	type: "stackcolumn"
});

_yuitest_coverline("D:\work\nils\yui2\src\charts\build_tmp\charts.js", 2446);
YAHOO.register("charts", YAHOO.widget.Chart, {version: "@VERSION@", build: "@BUILD@"});
