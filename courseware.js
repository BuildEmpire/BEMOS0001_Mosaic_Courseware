/**
 * Automatically Generated Shrewd File
 */
var CoursewareConnectorInboundService = new Class({
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareConnectorInboundService";
},
/**
 * @param {Object} OutboundService
 * @returns {void} 
 */
Ready: function(OutboundService){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(OutboundService);
} else {
parametersArray.push(OutboundService);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"Ready",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {float} scale
 * @returns {void} 
 */
SetScale: function(scale){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(scale);
} else {
parametersArray.push(scale);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetScale",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {float} 
 */
GetScale: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"GetScale",
parametersArray,
"float",
"",
exceptionsArray
);
}
},
/**
 * @param {CoursewareConfigurationData}
 * @returns {void} 
 */
SetConfigurationData: function(configurationData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(configurationData);
} else {
parametersArray.push((configurationData) ? configurationData.getShrewd() : null);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetConfigurationData",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {CoursewareConfigurationData}
 */
GetConfigurationData: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"GetConfigurationData",
parametersArray,
"CoursewareConfigurationData",
"",
exceptionsArray
);
}
},
/**
 * @param {CoursewareScreenData}
 * @returns {jQuery} 
 */
SetScreenData: function(screenData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(screenData);
} else {
parametersArray.push((screenData) ? screenData.getShrewd() : null);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetScreenData",
parametersArray,
"jQuery",
"",
exceptionsArray
);
}
},
/**
 * @returns {CoursewareScreenData}
 */
GetScreenData: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"GetScreenData",
parametersArray,
"CoursewareScreenData",
"",
exceptionsArray
);
}
},
/**
 * @returns {void} 
 */
Draw: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"Draw",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {void} 
 */
AddColumn: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"AddColumn",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {string} componentName
 * @returns {void} 
 */
AddComponent: function(componentName){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(componentName);
} else {
parametersArray.push(componentName);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"AddComponent",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {string} id
 * @returns {void} 
 */
HighlightColumn: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(id);
} else {
parametersArray.push(id);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"HighlightColumn",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {string} id
 * @returns {void} 
 */
UnhighlightColumn: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(id);
} else {
parametersArray.push(id);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"UnhighlightColumn",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @type {Shrewd}
 */
_shrewd:null,
/**
 * Initialise the service.
 * 
 * @type {AShrewd}
 * @returns {null}
 */
initialize: function(shrewdObject){
if (shrewdObject instanceof AShrewd) {
this._shrewd = shrewdObject;
} else {
alert ('The object passed to CoursewareConnectorInboundService is not an instance of AShrewd.');
}
},
/**
 * Fetch the reference to the shrewd service.
 * 
 * @returns {AShrewd}
 */
getShrewd: function(shrewdObject){
return this._shrewd;
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareConnectorOutboundService = new Class({
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareConnectorOutboundService";
},
/**
 * @returns {void} 
 */
Ready: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorOutboundService",
"Ready",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {integer} mode
 * @returns {void} 
 */
SetMode: function(mode){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(mode);
} else {
parametersArray.push(mode);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorOutboundService",
"SetMode",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {CoursewareScreenData}
 * @returns {void} 
 */
UpdateScreenData: function(sScreenData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(sScreenData);
} else {
parametersArray.push((sScreenData) ? sScreenData.getShrewd() : null);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorOutboundService",
"UpdateScreenData",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {integer} context
 * @param {string} text
 * @returns {void} 
 */
SetContextInformation: function(context, text){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(context);
parametersArray.push(text);
} else {
parametersArray.push(context);
parametersArray.push(text);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorOutboundService",
"SetContextInformation",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {Array} fileExtensions
 * @param {Object} onSelectCallback
 * @param {Object} onCancelCallback
 * @returns {void} 
 */
OpenResourceManager: function(fileExtensions, onSelectCallback, onCancelCallback){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(fileExtensions);
parametersArray.push(onSelectCallback);
parametersArray.push(onCancelCallback);
} else {
if (fileExtensions) {var l=fileExtensions.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push(fileExtensions[a]);}parametersArray.push(lArray);} else {parametersArray.push(fileExtensions)}
parametersArray.push(onSelectCallback);
parametersArray.push(onCancelCallback);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorOutboundService",
"OpenResourceManager",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {CoursewareEditableForm}
 * @param {Object} onSaveCallback
 * @param {Object} onCancelCallback
 * @returns {void} 
 */
OpenEditDialog: function(editableForm, onSaveCallback, onCancelCallback){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(editableForm);
parametersArray.push(onSaveCallback);
parametersArray.push(onCancelCallback);
} else {
parametersArray.push((editableForm) ? editableForm.getShrewd() : null);
parametersArray.push(onSaveCallback);
parametersArray.push(onCancelCallback);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorOutboundService",
"OpenEditDialog",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @type {Shrewd}
 */
_shrewd:null,
/**
 * Initialise the service.
 * 
 * @type {AShrewd}
 * @returns {null}
 */
initialize: function(shrewdObject){
if (shrewdObject instanceof AShrewd) {
this._shrewd = shrewdObject;
} else {
alert ('The object passed to CoursewareConnectorOutboundService is not an instance of AShrewd.');
}
},
/**
 * Fetch the reference to the shrewd service.
 * 
 * @returns {AShrewd}
 */
getShrewd: function(shrewdObject){
return this._shrewd;
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareMode = {"TEMPLATE_EDITOR" : 1, "SCREEN_EDITOR" : 2, "SCREEN_DISPLAY" : 3};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareContext = {"GENERAL" : 1, "POSITION" : 2};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareScalingMode = {"FREE" : 1, "RATIO" : 2, "XAXIS" : 3, "YAXIS" : 4};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareLearningPathFulfilmentType = {"NONE" : 1, "CHILDREN" : 2, "ALL" : 3};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareDragMode = {"FREE" : 1, "COLUMNS" : 2, "BLA" : 4, "ALL" : 7};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareStructureItemType = {"PROJECT" : 1, "FOLDER" : 2, "SCREEN" : 3};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormFieldType = {"TEXT" : 1, "PASSWORD" : 2, "HTML" : 3, "SELECT" : 4, "CHECKBOX" : 5, "RADIO" : 6};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEventsInbound = {"READY" : "READY", "SCALE" : "SCALE", "DATA_CONFIGURATION" : "DATA_CONFIGURATION", "DATA_SCREEN" : "DATA_SCREEN", "DRAW" : "DRAW", "COLUMN_ADD" : "COLUMN_ADD", "COLUMN_HIGHLIGHT" : "COLUMN_HIGHLIGHT", "COLUMN_UNHIGHLIGHT" : "COLUMN_UNHIGHLIGHT", "COMPONENT_ADD" : "COMPONENT_ADD"};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEventsOutbound = {"READY" : "READY", "MODE" : "MODE", "CONTEXT" : "CONTEXT", "UPDATE" : "UPDATE"};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareTranslation = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {boolean} base
 */
base : false,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {string} value
 */
value : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.Translation",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareTranslation";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
parametersArray.push(this.base);
parametersArray.push(this.name);
parametersArray.push(this.value);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.id = shrewdArray[0];
this.base = shrewdArray[1];
this.name = shrewdArray[2];
this.value = shrewdArray[3];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareLearningPath = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {boolean} base
 */
base : false,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.LearningPath",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareLearningPath";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
parametersArray.push(this.base);
parametersArray.push(this.name);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.id = shrewdArray[0];
this.base = shrewdArray[1];
this.name = shrewdArray[2];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareComponentMetrics = new Class({
/**
 * @type {integer} xPercent
 */
xPercent : null,
/**
 * @type {integer} yPercent
 */
yPercent : null,
/**
 * @type {integer} widthPercent
 */
widthPercent : null,
/**
 * @type {integer} heightPercent
 */
heightPercent : null,
/**
 * @type {integer} tabIndex
 */
tabIndex : null,
/**
 * @type {integer} zIndex
 */
zIndex : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ComponentMetrics",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareComponentMetrics";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.xPercent);
parametersArray.push(this.yPercent);
parametersArray.push(this.widthPercent);
parametersArray.push(this.heightPercent);
parametersArray.push(this.tabIndex);
parametersArray.push(this.zIndex);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.xPercent = shrewdArray[0];
this.yPercent = shrewdArray[1];
this.widthPercent = shrewdArray[2];
this.heightPercent = shrewdArray[3];
this.tabIndex = shrewdArray[4];
this.zIndex = shrewdArray[5];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareComponent = new Class({
/**
 * @type {string} name
 */
name : null,
/**
 * @type {string} title
 */
title : null,
/**
 * @type {integer} active
 */
active : 1,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.Component",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareComponent";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.name);
parametersArray.push(this.title);
parametersArray.push(this.active);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.name = shrewdArray[0];
this.title = shrewdArray[1];
this.active = shrewdArray[2];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareComponentInstance = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Array} data
 */
data : null,
/**
 * @type {CoursewareComponentMetrics}
 */
metrics : null,
/**
 * @type {integer} scale
 */
scale : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ComponentInstance",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareComponentInstance";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
parametersArray.push(this.name);
parametersArray.push(this.data);
parametersArray.push((this.metrics) ? this.metrics.getShrewd() : null);
parametersArray.push(this.scale);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.id = shrewdArray[0];
this.name = shrewdArray[1];
this.data = shrewdArray[2];
if (shrewdArray[3]) {
var theClass = new CoursewareComponentMetrics();
theClass.setShrewd(shrewdArray[3]);
this.metrics = theClass;
} else {
this.metrics = null;
}
this.scale = shrewdArray[4];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareColumnRowMetrics = new Class({
/**
 * @type {integer} widthPercent
 */
widthPercent : null,
/**
 * @type {integer} heightPercent
 */
heightPercent : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ColumnRowMetrics",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareColumnRowMetrics";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.widthPercent);
parametersArray.push(this.heightPercent);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.widthPercent = shrewdArray[0];
this.heightPercent = shrewdArray[1];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareColumn = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {Array} components
 */
components : null,
/**
 * @type {CoursewareColumnRowMetrics}
 */
metrics : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.Column",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareColumn";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
if (this.components) {var l=this.components.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.components[a]) ? this.components[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.components)}
parametersArray.push((this.metrics) ? this.metrics.getShrewd() : null);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.id = shrewdArray[0];
if (shrewdArray[1]) {
var l=shrewdArray[1].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[1][a]) {
var theClass = new CoursewareComponentInstance();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.components = lArray;
if (shrewdArray[2]) {
var theClass = new CoursewareColumnRowMetrics();
theClass.setShrewd(shrewdArray[2]);
this.metrics = theClass;
} else {
this.metrics = null;
}
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareRow = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {Array} columns
 */
columns : null,
/**
 * @type {CoursewareColumnRowMetrics}
 */
metrics : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.Row",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareRow";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
if (this.columns) {var l=this.columns.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.columns[a]) ? this.columns[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.columns)}
parametersArray.push((this.metrics) ? this.metrics.getShrewd() : null);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.id = shrewdArray[0];
if (shrewdArray[1]) {
var l=shrewdArray[1].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[1][a]) {
var theClass = new CoursewareColumn();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.columns = lArray;
if (shrewdArray[2]) {
var theClass = new CoursewareColumnRowMetrics();
theClass.setShrewd(shrewdArray[2]);
this.metrics = theClass;
} else {
this.metrics = null;
}
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareTemplate = new Class({
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Array} rows
 */
rows : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.Template",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareTemplate";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.name);
if (this.rows) {var l=this.rows.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.rows[a]) ? this.rows[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.rows)}
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.name = shrewdArray[0];
if (shrewdArray[1]) {
var l=shrewdArray[1].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[1][a]) {
var theClass = new CoursewareRow();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.rows = lArray;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareDataRows = new Class({
/**
 * @type {boolean} allow
 */
allow : true,
/**
 * @type {boolean} resizable
 */
resizable : true,
/**
 * @type {integer} default
 */
default : 1,
/**
 * @type {integer} min
 */
min : 0,
/**
 * @type {integer} max
 */
max : 0,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.DataRows",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareDataRows";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.allow);
parametersArray.push(this.resizable);
parametersArray.push(this.default);
parametersArray.push(this.min);
parametersArray.push(this.max);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.allow = shrewdArray[0];
this.resizable = shrewdArray[1];
this.default = shrewdArray[2];
this.min = shrewdArray[3];
this.max = shrewdArray[4];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareDataColumns = new Class({
/**
 * @type {boolean} allow
 */
allow : true,
/**
 * @type {boolean} resizable
 */
resizable : true,
/**
 * @type {integer} default
 */
default : 1,
/**
 * @type {integer} min
 */
min : 0,
/**
 * @type {integer} max
 */
max : 0,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.DataColumns",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareDataColumns";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.allow);
parametersArray.push(this.resizable);
parametersArray.push(this.default);
parametersArray.push(this.min);
parametersArray.push(this.max);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.allow = shrewdArray[0];
this.resizable = shrewdArray[1];
this.default = shrewdArray[2];
this.min = shrewdArray[3];
this.max = shrewdArray[4];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareDataCanvas = new Class({
/**
 * @type {integer} width
 */
width : 0,
/**
 * @type {integer} height
 */
height : 0,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.DataCanvas",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareDataCanvas";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.width);
parametersArray.push(this.height);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.width = shrewdArray[0];
this.height = shrewdArray[1];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareDataGrid = new Class({
/**
 * @type {integer} x
 */
x : 20,
/**
 * @type {integer} y
 */
y : 20,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.DataGrid",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareDataGrid";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.x);
parametersArray.push(this.y);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.x = shrewdArray[0];
this.y = shrewdArray[1];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareConfigurationData = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Array} translations
 */
translations : null,
/**
 * @type {Array} learningPaths
 */
learningPaths : null,
/**
 * @type {Array} components
 */
components : null,
/**
 * @type {integer} dragMode
 */
dragMode : null,
/**
 * @type {CoursewareDataRows}
 */
rows : null,
/**
 * @type {CoursewareDataColumns}
 */
columns : null,
/**
 * @type {CoursewareDataCanvas}
 */
canvas : null,
/**
 * @type {CoursewareDataGrid}
 */
grid : null,
/**
 * @type {string} language
 */
language : "en",
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ConfigurationData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareConfigurationData";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
parametersArray.push(this.name);
if (this.translations) {var l=this.translations.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.translations[a]) ? this.translations[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.translations)}
if (this.learningPaths) {var l=this.learningPaths.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.learningPaths[a]) ? this.learningPaths[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.learningPaths)}
if (this.components) {var l=this.components.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.components[a]) ? this.components[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.components)}
parametersArray.push(this.dragMode);
parametersArray.push((this.rows) ? this.rows.getShrewd() : null);
parametersArray.push((this.columns) ? this.columns.getShrewd() : null);
parametersArray.push((this.canvas) ? this.canvas.getShrewd() : null);
parametersArray.push((this.grid) ? this.grid.getShrewd() : null);
parametersArray.push(this.language);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.id = shrewdArray[0];
this.name = shrewdArray[1];
if (shrewdArray[2]) {
var l=shrewdArray[2].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[2][a]) {
var theClass = new CoursewareTranslation();
theClass.setShrewd(shrewdArray[2][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.translations = lArray;
if (shrewdArray[3]) {
var l=shrewdArray[3].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[3][a]) {
var theClass = new CoursewareLearningPath();
theClass.setShrewd(shrewdArray[3][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.learningPaths = lArray;
if (shrewdArray[4]) {
var l=shrewdArray[4].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[4][a]) {
var theClass = new CoursewareComponent();
theClass.setShrewd(shrewdArray[4][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.components = lArray;
this.dragMode = shrewdArray[5];
if (shrewdArray[6]) {
var theClass = new CoursewareDataRows();
theClass.setShrewd(shrewdArray[6]);
this.rows = theClass;
} else {
this.rows = null;
}
if (shrewdArray[7]) {
var theClass = new CoursewareDataColumns();
theClass.setShrewd(shrewdArray[7]);
this.columns = theClass;
} else {
this.columns = null;
}
if (shrewdArray[8]) {
var theClass = new CoursewareDataCanvas();
theClass.setShrewd(shrewdArray[8]);
this.canvas = theClass;
} else {
this.canvas = null;
}
if (shrewdArray[9]) {
var theClass = new CoursewareDataGrid();
theClass.setShrewd(shrewdArray[9]);
this.grid = theClass;
} else {
this.grid = null;
}
this.language = shrewdArray[10];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareScreenData = new Class({
/**
 * @type {CoursewareTemplate}
 */
template : null,
/**
 * @type {Array} rows
 */
rows : null,
/**
 * @type {Array} freeComponents
 */
freeComponents : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ScreenData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareScreenData";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push((this.template) ? this.template.getShrewd() : null);
if (this.rows) {var l=this.rows.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.rows[a]) ? this.rows[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.rows)}
if (this.freeComponents) {var l=this.freeComponents.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.freeComponents[a]) ? this.freeComponents[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.freeComponents)}
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
if (shrewdArray[0]) {
var theClass = new CoursewareTemplate();
theClass.setShrewd(shrewdArray[0]);
this.template = theClass;
} else {
this.template = null;
}
if (shrewdArray[1]) {
var l=shrewdArray[1].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[1][a]) {
var theClass = new CoursewareRow();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.rows = lArray;
if (shrewdArray[2]) {
var l=shrewdArray[2].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[2][a]) {
var theClass = new CoursewareComponentInstance();
theClass.setShrewd(shrewdArray[2][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.freeComponents = lArray;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareStructureItem = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {string} alias (ID).
 */
alias : null,
/**
 * @type {integer} type
 */
type : null,
/**
 * @type {string} title
 */
title : null,
/**
 * @type {boolean} populated
 */
populated : null,
/**
 * @type {Array} children
 */
children : null,
/**
 * @type {Hash} learningPathIds
 */
learningPathIds : null,
/**
 * @type {CoursewareScreenData}
 */
screenData : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.StructureItem",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareStructureItem";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
parametersArray.push(this.alias);
parametersArray.push(this.type);
parametersArray.push(this.title);
parametersArray.push(this.populated);
if (this.children) {var l=this.children.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.children[a]) ? this.children[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.children)}
if (this.learningPathIds) {var lHash = new Hash();this.learningPathIds.each(function(v, k){lHash[k] = v;});parametersArray.push(lHash);} else {parametersArray.push(this.learningPathIds)}
parametersArray.push((this.screenData) ? this.screenData.getShrewd() : null);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.id = shrewdArray[0];
this.alias = shrewdArray[1];
this.type = shrewdArray[2];
this.title = shrewdArray[3];
this.populated = shrewdArray[4];
if (shrewdArray[5]) {
var l=shrewdArray[5].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[5][a]) {
var theClass = new CoursewareStructureItem();
theClass.setShrewd(shrewdArray[5][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.children = lArray;
if (shrewdArray[6]) {
var lHash = new Hash();
for (var p in shrewdArray[6]) {
lHash[p] = shrewdArray[6][p];
};
} else {
lHash = null;
}
this.learningPathIds = lHash;
if (shrewdArray[7]) {
var theClass = new CoursewareScreenData();
theClass.setShrewd(shrewdArray[7]);
this.screenData = theClass;
} else {
this.screenData = null;
}
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormFieldHTML = new Class({
/**
 * @type {string} cssPath
 */
cssPath : null,
/**
 * @type {Array} styleFormats
 */
styleFormats : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormFieldHTML",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableFormFieldHTML";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.cssPath);
parametersArray.push(this.styleFormats);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.cssPath = shrewdArray[0];
this.styleFormats = shrewdArray[1];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormField = new Class({
/**
 * @type {integer} type
 */
type : null,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {string} title
 */
title : null,
/**
 * @type {boolean} required
 */
required : null,
/**
 * @type {string} value
 */
value : null,
/**
 * @type {Object} data
 */
data : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormField",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableFormField";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.type);
parametersArray.push(this.name);
parametersArray.push(this.title);
parametersArray.push(this.required);
parametersArray.push(this.value);
parametersArray.push(this.data);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.type = shrewdArray[0];
this.name = shrewdArray[1];
this.title = shrewdArray[2];
this.required = shrewdArray[3];
this.value = shrewdArray[4];
this.data = shrewdArray[5];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormGroup = new Class({
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Array} fields
 */
fields : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormGroup",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableFormGroup";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.name);
if (this.fields) {var l=this.fields.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.fields[a]) ? this.fields[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.fields)}
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.name = shrewdArray[0];
if (shrewdArray[1]) {
var l=shrewdArray[1].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[1][a]) {
var theClass = new CoursewareEditableFormField();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.fields = lArray;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableForm = new Class({
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Array} groups
 */
groups : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableForm",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableForm";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.name);
if (this.groups) {var l=this.groups.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.groups[a]) ? this.groups[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.groups)}
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.name = shrewdArray[0];
if (shrewdArray[1]) {
var l=shrewdArray[1].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[1][a]) {
var theClass = new CoursewareEditableFormGroup();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.groups = lArray;
},
initialize: function(){
}
});
