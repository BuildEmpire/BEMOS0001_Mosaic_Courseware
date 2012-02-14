/**
 * Automatically Generated Shrewd File
 */
var CoursewareConnectorInboundService = new Class({
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
this.getShrewdVersion(),
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
 * @param {integer} mode
 * @returns {boolean} 
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
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetMode",
parametersArray,
"boolean",
"",
exceptionsArray
);
}
},
/**
 * @param {float} scale
 * @returns {boolean} 
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
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetScale",
parametersArray,
"boolean",
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
this.getShrewdVersion(),
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
 * @returns {boolean} 
 */
IsTransformationApplied: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"IsTransformationApplied",
parametersArray,
"boolean",
"",
exceptionsArray
);
}
},
/**
 * @param {float} transformation
 * @returns {boolean} 
 */
SetTransformation: function(transformation){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(transformation);
} else {
parametersArray.push(transformation);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetTransformation",
parametersArray,
"boolean",
"",
exceptionsArray
);
}
},
/**
 * @returns {float} 
 */
GetTransformation: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"GetTransformation",
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
 * @param {string} id
 * @returns {void} 
 */
HighlightComponent: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(id);
} else {
parametersArray.push(id);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"HighlightComponent",
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
UnhighlightComponent: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(id);
} else {
parametersArray.push(id);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"UnhighlightComponent",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {Object} 
 */
GetValidRelationships: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"GetValidRelationships",
parametersArray,
"Object",
"",
exceptionsArray
);
}
},
/**
 * @param {string} componentName
 * @returns {Object} 
 */
GetValidComponentRelationships: function(componentName){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(componentName);
} else {
parametersArray.push(componentName);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"GetValidComponentRelationships",
parametersArray,
"Object",
"",
exceptionsArray
);
}
},
/**
 * @returns {void} 
 */
ShowVisualRelationshipsEditor: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"ShowVisualRelationshipsEditor",
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
HideVisualRelationshipsEditor: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"HideVisualRelationshipsEditor",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {string} relationshipId
 * @returns {void} 
 */
ShowVisualRelationship: function(relationshipId){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(relationshipId);
} else {
parametersArray.push(relationshipId);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"ShowVisualRelationship",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {string} relationshipId
 * @returns {void} 
 */
HideVisualRelationship: function(relationshipId){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(relationshipId);
} else {
parametersArray.push(relationshipId);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"HideVisualRelationship",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {Array} relationshipsData
 * @returns {void} 
 */
SetRelationshipsData: function(relationshipsData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(relationshipsData);
} else {
if (relationshipsData) {var l=relationshipsData.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((relationshipsData[a]) ? relationshipsData[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(relationshipsData)}
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetRelationshipsData",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {Array} 
 */
GetRelationshipsData: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"GetRelationshipsData",
parametersArray,
"list",
"CoursewareRelationship",
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
this.getShrewdVersion(),
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
var CoursewareMode = {"SCREEN_EDITOR" : 1, "SCREEN_DISPLAY" : 2};
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
var CoursewareDragMode = {"FREE" : 1, "COLUMNS" : 2, "ALL" : 3};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormFieldType = {"TEXT" : 1, "PASSWORD" : 2, "TEXTAREA" : 3, "HTML" : 4, "SELECT" : 5, "CHECKBOX" : 6, "RADIO" : 7, "RANGE" : 8};
/**
 * Automatically Generated Shrewd File
 */
var CoursewareStructureItemType = {"PROJECT" : 1, "FOLDER" : 2, "SCREEN" : 3};
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * @type {float} xPercent
 */
xPercent : null,
/**
 * @type {float} yPercent
 */
yPercent : null,
/**
 * @type {float} widthPercent
 */
widthPercent : null,
/**
 * @type {float} heightPercent
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * @type {string} alias
 */
alias : null,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Hash} data
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
parametersArray.push(this.alias);
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
this.alias = shrewdArray[1];
this.name = shrewdArray[2];
this.data = shrewdArray[3];
if (shrewdArray[4]) {
var theClass = new CoursewareComponentMetrics();
theClass.setShrewd(shrewdArray[4]);
this.metrics = theClass;
} else {
this.metrics = null;
}
this.scale = shrewdArray[5];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareColumnRowMetrics = new Class({
/**
 * @type {float} widthPercent
 */
widthPercent : null,
/**
 * @type {float} heightPercent
 */
heightPercent : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ColumnRowMetrics",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * @type {integer} initial
 */
initial : 1,
/**
 * @type {integer} min
 */
min : 0,
/**
 * @type {integer} max
 */
max : 20,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.DataRows",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
parametersArray.push(this.initial);
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
this.initial = shrewdArray[2];
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
 * @type {integer} initial
 */
initial : 1,
/**
 * @type {integer} min
 */
min : 0,
/**
 * @type {integer} max
 */
max : 10,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.DataColumns",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
parametersArray.push(this.initial);
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
this.initial = shrewdArray[2];
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
width : 800,
/**
 * @type {integer} height
 */
height : 600,
/**
 * @type {boolean} placeInColumns
 */
placeInColumns : true,
/**
 * @type {boolean} restrictWidth
 */
restrictWidth : true,
/**
 * @type {boolean} restrictHeight
 */
restrictHeight : false,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.DataCanvas",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
parametersArray.push(this.placeInColumns);
parametersArray.push(this.restrictWidth);
parametersArray.push(this.restrictHeight);
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
this.placeInColumns = shrewdArray[2];
this.restrictWidth = shrewdArray[3];
this.restrictHeight = shrewdArray[4];
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * @type {boolean} valid
 */
valid : false,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ConfigurationData",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
parametersArray.push(this.valid);
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
this.valid = shrewdArray[11];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormFieldHtml = new Class({
/**
 * @type {Array} cssPath
 */
cssPath : null,
/**
 * @type {Array} styleFormats
 */
styleFormats : null,
/**
 * @type {integer} rows
 */
rows : null,
/**
 * @type {Hash} cssAttributes
 */
cssAttributes : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormFieldHtml",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableFormFieldHtml";
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
parametersArray.push(this.rows);
if (this.cssAttributes) {var lHash = new Hash();this.cssAttributes.each(function(v, k){lHash[k] = v;});parametersArray.push(lHash);} else {parametersArray.push(this.cssAttributes)}
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
this.rows = shrewdArray[2];
if (shrewdArray[3]) {
var lHash = new Hash();
for (var p in shrewdArray[3]) {
lHash[p] = shrewdArray[3][p];
};
} else {
lHash = null;
}
this.cssAttributes = lHash;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormFieldSelect = new Class({
/**
 * @type {Hash} options
 */
options : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormFieldSelect",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableFormFieldSelect";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
if (this.options) {var lHash = new Hash();this.options.each(function(v, k){lHash[k] = v;});parametersArray.push(lHash);} else {parametersArray.push(this.options)}
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
var lHash = new Hash();
for (var p in shrewdArray[0]) {
lHash[p] = shrewdArray[0][p];
};
} else {
lHash = null;
}
this.options = lHash;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormFieldRange = new Class({
/**
 * @type {integer} min
 */
min : null,
/**
 * @type {integer} max
 */
max : null,
/**
 * @type {integer} step
 */
step : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormFieldRange",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableFormFieldRange";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.min);
parametersArray.push(this.max);
parametersArray.push(this.step);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.min = shrewdArray[0];
this.max = shrewdArray[1];
this.step = shrewdArray[2];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareEditableFormFieldText = new Class({
/**
 * @type {integer} rows
 */
rows : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormFieldText",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareEditableFormFieldText";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.rows);
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array} shrewdArray
 * @returns {null} 
 */
setShrewd: function(shrewdArray){
this.rows = shrewdArray[0];
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
/**
 * Automatically Generated Shrewd File
 */
var CoursewareRelationship = new Class({
/**
 * @type {string} id
 */
id : null,
/**
 * @type {string} source
 */
source : null,
/**
 * @type {string} event
 */
event : null,
/**
 * @type {string} target
 */
target : null,
/**
 * @type {string} action
 */
action : null,
/**
 * @type {All} data
 */
data : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.Relationship",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareRelationship";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.id);
parametersArray.push(this.source);
parametersArray.push(this.event);
parametersArray.push(this.target);
parametersArray.push(this.action);
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
this.id = shrewdArray[0];
this.source = shrewdArray[1];
this.event = shrewdArray[2];
this.target = shrewdArray[3];
this.action = shrewdArray[4];
this.data = shrewdArray[5];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareValidRelationshipEvent = new Class({
/**
 * @type {string} context
 */
context : null,
/**
 * @type {string} event
 */
event : null,
/**
 * @type {string} key
 */
key : null,
/**
 * @type {string} string
 */
string : null,
/**
 * @type {Object} data
 */
data : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareValidRelationshipEvent";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.context);
parametersArray.push(this.event);
parametersArray.push(this.key);
parametersArray.push(this.string);
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
this.context = shrewdArray[0];
this.event = shrewdArray[1];
this.key = shrewdArray[2];
this.string = shrewdArray[3];
this.data = shrewdArray[4];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareValidRelationshipAction = new Class({
/**
 * @type {string} context
 */
context : null,
/**
 * @type {string} action
 */
action : null,
/**
 * @type {string} key
 */
key : null,
/**
 * @type {string} string
 */
string : null,
/**
 * @type {Array} fields
 */
fields : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ValidRelationshipAction",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareValidRelationshipAction";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.context);
parametersArray.push(this.action);
parametersArray.push(this.key);
parametersArray.push(this.string);
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
this.context = shrewdArray[0];
this.action = shrewdArray[1];
this.key = shrewdArray[2];
this.string = shrewdArray[3];
if (shrewdArray[4]) {
var l=shrewdArray[4].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[4][a]) {
var theClass = new CoursewareEditableFormField();
theClass.setShrewd(shrewdArray[4][a]);
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
var CoursewareRelationshipCollection = new Class({
/**
 * @type {Array} events
 */
events : null,
/**
 * @type {Array} actions
 */
actions : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.RelationshipCollection",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareRelationshipCollection";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
if (this.events) {var l=this.events.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.events[a]) ? this.events[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.events)}
if (this.actions) {var l=this.actions.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.actions[a]) ? this.actions[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.actions)}
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
var l=shrewdArray[0].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[0][a]) {
var theClass = new CoursewareValidRelationshipEvent();
theClass.setShrewd(shrewdArray[0][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.events = lArray;
if (shrewdArray[1]) {
var l=shrewdArray[1].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[1][a]) {
var theClass = new CoursewareValidRelationshipAction();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.actions = lArray;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareRelationshipComponentContainer = new Class({
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Array} actions
 */
actions : null,
/**
 * @type {Array} events
 */
events : null,
/**
 * @type {Array} items
 */
items : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareRelationshipComponentContainer";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.name);
if (this.actions) {var l=this.actions.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.actions[a]) ? this.actions[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.actions)}
if (this.events) {var l=this.events.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.events[a]) ? this.events[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.events)}
if (this.items) {var l=this.items.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.items[a]) ? this.items[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.items)}
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
var theClass = new CoursewareValidRelationshipAction();
theClass.setShrewd(shrewdArray[1][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.actions = lArray;
if (shrewdArray[2]) {
var l=shrewdArray[2].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[2][a]) {
var theClass = new CoursewareValidRelationshipEvent();
theClass.setShrewd(shrewdArray[2][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.events = lArray;
if (shrewdArray[3]) {
var l=shrewdArray[3].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[3][a]) {
var theClass = new CoursewareRelationshipCollection();
theClass.setShrewd(shrewdArray[3][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.items = lArray;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareRelationshipContainer = new Class({
/**
 * @type {CoursewareRelationshipCollection}
 */
engine : null,
/**
 * @type {Hash} components
 */
components : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.RelationshipContainer",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareRelationshipContainer";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push((this.engine) ? this.engine.getShrewd() : null);
if (this.components) {var lHash = new Hash();this.components.each(function(v, k){lHash[k] = (v) ? v.getShrewd() : null;});parametersArray.push(lHash);} else {parametersArray.push(this.components)}
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
var theClass = new CoursewareRelationshipCollection();
theClass.setShrewd(shrewdArray[0]);
this.engine = theClass;
} else {
this.engine = null;
}
if (shrewdArray[1]) {
var lHash = new Hash();
for (var p in shrewdArray[1]) {
if (shrewdArray[1][p]) {
var theClass = new CoursewareRelationshipComponentContainer();
theClass.setShrewd(shrewdArray[1][p]);
lHash[p] = theClass;
} else {
lHash[p] = null;
}
};
} else {
lHash = null;
}
this.components = lHash;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareScreenData = new Class({
/**
 * @type {Array} rows
 */
rows : null,
/**
 * @type {Array} freeComponents
 */
freeComponents : null,
/**
 * @type {Array} relationships
 */
relationships : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ScreenData",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
if (this.rows) {var l=this.rows.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.rows[a]) ? this.rows[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.rows)}
if (this.freeComponents) {var l=this.freeComponents.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.freeComponents[a]) ? this.freeComponents[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.freeComponents)}
if (this.relationships) {var l=this.relationships.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.relationships[a]) ? this.relationships[a].getShrewd() : null);}parametersArray.push(lArray);} else {parametersArray.push(this.relationships)}
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
var l=shrewdArray[0].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[0][a]) {
var theClass = new CoursewareRow();
theClass.setShrewd(shrewdArray[0][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.rows = lArray;
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
this.freeComponents = lArray;
if (shrewdArray[2]) {
var l=shrewdArray[2].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[2][a]) {
var theClass = new CoursewareRelationship();
theClass.setShrewd(shrewdArray[2][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
} else {
lArray = null;
}
this.relationships = lArray;
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
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c8cb76ce14f98da62a6f1811920849e41c7868a0";
},
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
