/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ConnectorInboundService = new Class({
Extends:AShrewdBase,
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the shrewd namespace.
 * 
 * @returns {string}
 */
getShrewdNS : function(){
return "BuildEmpire.Mosaic.Courseware.ConnectorInboundService";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ConnectorInboundService";
},
/**
 * @param {Object} OutboundServer
 * @returns {void} 
 */
Ready: function(OutboundServer){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(OutboundServer);
} else {

}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
parametersArray.push(mode);
} else {
parametersArray.push(this._getShrewd(mode, "integer", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
parametersArray.push(scale);
} else {
parametersArray.push(this._getShrewd(scale, "float", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
parametersArray.push(transformation);
} else {
parametersArray.push(this._getShrewd(transformation, "float", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetTransformation",
parametersArray,
"float",
"",
exceptionsArray
);
}
},
/**
 * @param {BuildEmpire.Mosaic.Courseware.ConfigurationData}
 * @returns {void} 
 */
SetConfigurationData: function(configurationData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(configurationData);
} else {
parametersArray.push(this._getShrewd(configurationData, "BuildEmpire.Mosaic.Courseware.ConfigurationData", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"SetConfigurationData",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {BuildEmpire.Mosaic.Courseware.ConfigurationData}
 */
GetConfigurationData: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetConfigurationData",
parametersArray,
"BuildEmpire.Mosaic.Courseware.ConfigurationData",
"",
exceptionsArray
);
}
},
/**
 * @param {BuildEmpire.Mosaic.Courseware.ScreenData}
 * @returns {void} 
 */
SetScreenData: function(screenData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(screenData);
} else {
parametersArray.push(this._getShrewd(screenData, "BuildEmpire.Mosaic.Courseware.ScreenData", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"SetScreenData",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {BuildEmpire.Mosaic.Courseware.ScreenData}
 */
GetScreenData: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetScreenData",
parametersArray,
"BuildEmpire.Mosaic.Courseware.ScreenData",
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"AddColumn",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {String} componentName
 * @returns {void} 
 */
AddComponent: function(componentName){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(componentName);
} else {
parametersArray.push(this._getShrewd(componentName, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"AddComponent",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {String} id
 * @returns {void} 
 */
HighlightColumn: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(id);
} else {
parametersArray.push(this._getShrewd(id, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"HighlightColumn",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {String} id
 * @returns {void} 
 */
UnhighlightColumn: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(id);
} else {
parametersArray.push(this._getShrewd(id, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"UnhighlightColumn",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {String} id
 * @returns {void} 
 */
HighlightComponent: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(id);
} else {
parametersArray.push(this._getShrewd(id, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"HighlightComponent",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {String} id
 * @returns {void} 
 */
UnhighlightComponent: function(id){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(id);
} else {
parametersArray.push(this._getShrewd(id, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"UnhighlightComponent",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @returns {BuildEmpire.Mosaic.Courseware.RelationshipContainer}
 */
GetValidRelationships: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetValidRelationships",
parametersArray,
"BuildEmpire.Mosaic.Courseware.RelationshipContainer",
"",
exceptionsArray
);
}
},
/**
 * @param {String} componentName
 * @returns {BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer}
 */
GetValidComponentRelationships: function(componentName){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(componentName);
} else {
parametersArray.push(this._getShrewd(componentName, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetValidComponentRelationships",
parametersArray,
"BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer",
"",
exceptionsArray
);
}
},
/**
 * @returns {Hash} 
 */
GetAllValidComponentRelationships: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetAllValidComponentRelationships",
parametersArray,
"map",
"BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer",
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"HideVisualRelationshipsEditor",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {String} relationshipId
 * @returns {void} 
 */
ShowVisualRelationship: function(relationshipId){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(relationshipId);
} else {
parametersArray.push(this._getShrewd(relationshipId, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"ShowVisualRelationship",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {String} relationshipId
 * @returns {void} 
 */
HideVisualRelationship: function(relationshipId){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(relationshipId);
} else {
parametersArray.push(this._getShrewd(relationshipId, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
parametersArray.push(relationshipsData);
} else {
parametersArray.push(this._getShrewd(relationshipsData, "list", "BuildEmpire.Mosaic.Courseware.Relationship"));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetRelationshipsData",
parametersArray,
"list",
"BuildEmpire.Mosaic.Courseware.Relationship",
exceptionsArray
);
}
},
/**
 * @param {String} filePathRelative
 * @returns {void} 
 */
OnResourceManagerSelect: function(filePathRelative){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(filePathRelative);
} else {
parametersArray.push(this._getShrewd(filePathRelative, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OnResourceManagerSelect",
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
OnResourceManagerClose: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OnResourceManagerClose",
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
OnRelationshipManagerSave: function(relationshipsData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(relationshipsData);
} else {
parametersArray.push(this._getShrewd(relationshipsData, "list", "BuildEmpire.Mosaic.Courseware.Relationship"));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OnRelationshipManagerSave",
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
OnRelationshipManagerClose: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OnRelationshipManagerClose",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {BuildEmpire.Mosaic.Courseware.EditableForm}
 * @returns {void} 
 */
OnEditDialogSave: function(sForm){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(sForm);
} else {
parametersArray.push(this._getShrewd(sForm, "BuildEmpire.Mosaic.Courseware.EditableForm", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OnEditDialogSave",
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
OnEditDialogClose: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OnEditDialogClose",
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
GetControllerButtons: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"GetControllerButtons",
parametersArray,
"list",
"BuildEmpire.Mosaic.Courseware.ControllerButton",
exceptionsArray
);
}
},
/**
 * @param {String} id
 * @param {Hash} data
 * @returns {Object}  (mixed)
 */
TriggerControllerButton: function(id, data){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(id);
parametersArray.push(data);
} else {
parametersArray.push(this._getShrewd(id, "string", ""));
parametersArray.push(this._getShrewd(data, "map", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"TriggerControllerButton",
parametersArray,
"mixed",
"",
exceptionsArray
);
}
},
_ReadyGetReturnType: function() {
return "void";
},
_ReadyGetReturnContentType: function() {
return "";
},
_SetModeGetReturnType: function() {
return "boolean";
},
_SetModeGetReturnContentType: function() {
return "";
},
_SetScaleGetReturnType: function() {
return "boolean";
},
_SetScaleGetReturnContentType: function() {
return "";
},
_GetScaleGetReturnType: function() {
return "float";
},
_GetScaleGetReturnContentType: function() {
return "";
},
_IsTransformationAppliedGetReturnType: function() {
return "boolean";
},
_IsTransformationAppliedGetReturnContentType: function() {
return "";
},
_SetTransformationGetReturnType: function() {
return "boolean";
},
_SetTransformationGetReturnContentType: function() {
return "";
},
_GetTransformationGetReturnType: function() {
return "float";
},
_GetTransformationGetReturnContentType: function() {
return "";
},
_SetConfigurationDataGetReturnType: function() {
return "void";
},
_SetConfigurationDataGetReturnContentType: function() {
return "";
},
_GetConfigurationDataGetReturnType: function() {
return "BuildEmpire.Mosaic.Courseware.ConfigurationData";
},
_GetConfigurationDataGetReturnContentType: function() {
return "";
},
_SetScreenDataGetReturnType: function() {
return "void";
},
_SetScreenDataGetReturnContentType: function() {
return "";
},
_GetScreenDataGetReturnType: function() {
return "BuildEmpire.Mosaic.Courseware.ScreenData";
},
_GetScreenDataGetReturnContentType: function() {
return "";
},
_DrawGetReturnType: function() {
return "void";
},
_DrawGetReturnContentType: function() {
return "";
},
_AddColumnGetReturnType: function() {
return "void";
},
_AddColumnGetReturnContentType: function() {
return "";
},
_AddComponentGetReturnType: function() {
return "void";
},
_AddComponentGetReturnContentType: function() {
return "";
},
_HighlightColumnGetReturnType: function() {
return "void";
},
_HighlightColumnGetReturnContentType: function() {
return "";
},
_UnhighlightColumnGetReturnType: function() {
return "void";
},
_UnhighlightColumnGetReturnContentType: function() {
return "";
},
_HighlightComponentGetReturnType: function() {
return "void";
},
_HighlightComponentGetReturnContentType: function() {
return "";
},
_UnhighlightComponentGetReturnType: function() {
return "void";
},
_UnhighlightComponentGetReturnContentType: function() {
return "";
},
_GetValidRelationshipsGetReturnType: function() {
return "BuildEmpire.Mosaic.Courseware.RelationshipContainer";
},
_GetValidRelationshipsGetReturnContentType: function() {
return "";
},
_GetValidComponentRelationshipsGetReturnType: function() {
return "BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer";
},
_GetValidComponentRelationshipsGetReturnContentType: function() {
return "";
},
_GetAllValidComponentRelationshipsGetReturnType: function() {
return "map";
},
_GetAllValidComponentRelationshipsGetReturnContentType: function() {
return "BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer";
},
_ShowVisualRelationshipsEditorGetReturnType: function() {
return "void";
},
_ShowVisualRelationshipsEditorGetReturnContentType: function() {
return "";
},
_HideVisualRelationshipsEditorGetReturnType: function() {
return "void";
},
_HideVisualRelationshipsEditorGetReturnContentType: function() {
return "";
},
_ShowVisualRelationshipGetReturnType: function() {
return "void";
},
_ShowVisualRelationshipGetReturnContentType: function() {
return "";
},
_HideVisualRelationshipGetReturnType: function() {
return "void";
},
_HideVisualRelationshipGetReturnContentType: function() {
return "";
},
_SetRelationshipsDataGetReturnType: function() {
return "void";
},
_SetRelationshipsDataGetReturnContentType: function() {
return "";
},
_GetRelationshipsDataGetReturnType: function() {
return "list";
},
_GetRelationshipsDataGetReturnContentType: function() {
return "BuildEmpire.Mosaic.Courseware.Relationship";
},
_OnResourceManagerSelectGetReturnType: function() {
return "void";
},
_OnResourceManagerSelectGetReturnContentType: function() {
return "";
},
_OnResourceManagerCloseGetReturnType: function() {
return "void";
},
_OnResourceManagerCloseGetReturnContentType: function() {
return "";
},
_OnRelationshipManagerSaveGetReturnType: function() {
return "void";
},
_OnRelationshipManagerSaveGetReturnContentType: function() {
return "";
},
_OnRelationshipManagerCloseGetReturnType: function() {
return "void";
},
_OnRelationshipManagerCloseGetReturnContentType: function() {
return "";
},
_OnEditDialogSaveGetReturnType: function() {
return "void";
},
_OnEditDialogSaveGetReturnContentType: function() {
return "";
},
_OnEditDialogCloseGetReturnType: function() {
return "void";
},
_OnEditDialogCloseGetReturnContentType: function() {
return "";
},
_GetControllerButtonsGetReturnType: function() {
return "list";
},
_GetControllerButtonsGetReturnContentType: function() {
return "BuildEmpire.Mosaic.Courseware.ControllerButton";
},
_TriggerControllerButtonGetReturnType: function() {
return "mixed";
},
_TriggerControllerButtonGetReturnContentType: function() {
return "";
},
_ReadyGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "OutboundServer";
param.type = "Object";
param.optional = false;
params.push(param);
return params;
},
_SetModeGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "mode";
param.type = "integer";
param.optional = false;
params.push(param);
return params;
},
_SetScaleGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "scale";
param.type = "float";
param.optional = false;
params.push(param);
return params;
},
_GetScaleGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_IsTransformationAppliedGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_SetTransformationGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "transformation";
param.type = "float";
param.optional = false;
params.push(param);
return params;
},
_GetTransformationGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_SetConfigurationDataGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "configurationData";
param.type = "BuildEmpire.Mosaic.Courseware.ConfigurationData";
param.optional = false;
params.push(param);
return params;
},
_GetConfigurationDataGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_SetScreenDataGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "screenData";
param.type = "BuildEmpire.Mosaic.Courseware.ScreenData";
param.optional = false;
params.push(param);
return params;
},
_GetScreenDataGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_DrawGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_AddColumnGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_AddComponentGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "componentName";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_HighlightColumnGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "id";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_UnhighlightColumnGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "id";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_HighlightComponentGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "id";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_UnhighlightComponentGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "id";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_GetValidRelationshipsGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_GetValidComponentRelationshipsGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "componentName";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_GetAllValidComponentRelationshipsGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_ShowVisualRelationshipsEditorGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_HideVisualRelationshipsEditorGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_ShowVisualRelationshipGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "relationshipId";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_HideVisualRelationshipGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "relationshipId";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_SetRelationshipsDataGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "relationshipsData";
param.type = "list";
param.contentType = "BuildEmpire.Mosaic.Courseware.Relationship";
param.optional = false;
params.push(param);
return params;
},
_GetRelationshipsDataGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_OnResourceManagerSelectGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "filePathRelative";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_OnResourceManagerCloseGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_OnRelationshipManagerSaveGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "relationshipsData";
param.type = "list";
param.contentType = "BuildEmpire.Mosaic.Courseware.Relationship";
param.optional = false;
params.push(param);
return params;
},
_OnRelationshipManagerCloseGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_OnEditDialogSaveGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "sForm";
param.type = "BuildEmpire.Mosaic.Courseware.EditableForm";
param.optional = false;
params.push(param);
return params;
},
_OnEditDialogCloseGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_GetControllerButtonsGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_TriggerControllerButtonGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "id";
param.type = "string";
param.optional = false;
params.push(param);
param = {};
param.name = "data";
param.type = "map";
param.optional = true;
params.push(param);
return params;
},
_ReadyGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetModeGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetScaleGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetScaleGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_IsTransformationAppliedGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetTransformationGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetTransformationGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetConfigurationDataGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetConfigurationDataGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetScreenDataGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetScreenDataGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_DrawGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_AddColumnGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_AddComponentGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_HighlightColumnGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_UnhighlightColumnGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_HighlightComponentGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_UnhighlightComponentGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetValidRelationshipsGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetValidComponentRelationshipsGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetAllValidComponentRelationshipsGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_ShowVisualRelationshipsEditorGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_HideVisualRelationshipsEditorGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_ShowVisualRelationshipGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_HideVisualRelationshipGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetRelationshipsDataGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetRelationshipsDataGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OnResourceManagerSelectGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OnResourceManagerCloseGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OnRelationshipManagerSaveGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OnRelationshipManagerCloseGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OnEditDialogSaveGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OnEditDialogCloseGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_GetControllerButtonsGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_TriggerControllerButtonGetExceptions: function() {
var params;
var param;
params = [];
return params;
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
initialize: function(shrewdObject, skipCheck){
if (shrewdObject instanceof AShrewd || skipCheck) {
this._shrewd = shrewdObject;
} else {
alert ('The object passed to BuildEmpire.Mosaic.Courseware.ConnectorInboundService is not an instance of AShrewd.');
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
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ConnectorOutboundService = new Class({
Extends:AShrewdBase,
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the shrewd namespace.
 * 
 * @returns {string}
 */
getShrewdNS : function(){
return "BuildEmpire.Mosaic.Courseware.ConnectorOutboundService";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ConnectorOutboundService";
},
/**
 * @returns {void} 
 */
Ready: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"Ready",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {Object} InboundService
 * @returns {void} 
 */
SetInboundService: function(InboundService){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(InboundService);
} else {

}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"SetInboundService",
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
SetScreenDataDirty: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"SetScreenDataDirty",
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
SetControllerButtonsDirty: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"SetControllerButtonsDirty",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {integer} context
 * @param {String} text
 * @returns {void} 
 */
SetContextInformation: function(context, text){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(context);
parametersArray.push(text);
} else {
parametersArray.push(this._getShrewd(context, "integer", ""));
parametersArray.push(this._getShrewd(text, "string", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
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
 * @returns {void} 
 */
OpenResourceManager: function(fileExtensions){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(fileExtensions);
} else {
parametersArray.push(this._getShrewd(fileExtensions, "list", "string"));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OpenResourceManager",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {BuildEmpire.Mosaic.Courseware.EditableForm}
 * @returns {void} 
 */
OpenRelationshipManager: function(editableForm){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(editableForm);
} else {
parametersArray.push(this._getShrewd(editableForm, "BuildEmpire.Mosaic.Courseware.EditableForm", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OpenRelationshipManager",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {BuildEmpire.Mosaic.Courseware.EditableForm}
 * @returns {void} 
 */
OpenEditDialog: function(editableForm){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.isServer) {
parametersArray.push(editableForm);
} else {
parametersArray.push(this._getShrewd(editableForm, "BuildEmpire.Mosaic.Courseware.EditableForm", ""));
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
this.getShrewdVersion(),
this.getShrewdNS(),
"OpenEditDialog",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
_ReadyGetReturnType: function() {
return "void";
},
_ReadyGetReturnContentType: function() {
return "";
},
_SetInboundServiceGetReturnType: function() {
return "void";
},
_SetInboundServiceGetReturnContentType: function() {
return "";
},
_SetScreenDataDirtyGetReturnType: function() {
return "void";
},
_SetScreenDataDirtyGetReturnContentType: function() {
return "";
},
_SetControllerButtonsDirtyGetReturnType: function() {
return "void";
},
_SetControllerButtonsDirtyGetReturnContentType: function() {
return "";
},
_SetContextInformationGetReturnType: function() {
return "void";
},
_SetContextInformationGetReturnContentType: function() {
return "";
},
_OpenResourceManagerGetReturnType: function() {
return "void";
},
_OpenResourceManagerGetReturnContentType: function() {
return "";
},
_OpenRelationshipManagerGetReturnType: function() {
return "void";
},
_OpenRelationshipManagerGetReturnContentType: function() {
return "";
},
_OpenEditDialogGetReturnType: function() {
return "void";
},
_OpenEditDialogGetReturnContentType: function() {
return "";
},
_ReadyGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_SetInboundServiceGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "InboundService";
param.type = "Object";
param.optional = false;
params.push(param);
return params;
},
_SetScreenDataDirtyGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_SetControllerButtonsDirtyGetArguments: function() {
var params;
var param;
params = [];
return params;
},
_SetContextInformationGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "context";
param.type = "integer";
param.optional = false;
params.push(param);
param = {};
param.name = "text";
param.type = "string";
param.optional = false;
params.push(param);
return params;
},
_OpenResourceManagerGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "fileExtensions";
param.type = "list";
param.contentType = "string";
param.optional = false;
params.push(param);
return params;
},
_OpenRelationshipManagerGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "editableForm";
param.type = "BuildEmpire.Mosaic.Courseware.EditableForm";
param.optional = false;
params.push(param);
return params;
},
_OpenEditDialogGetArguments: function() {
var params;
var param;
params = [];
param = {};
param.name = "editableForm";
param.type = "BuildEmpire.Mosaic.Courseware.EditableForm";
param.optional = false;
params.push(param);
return params;
},
_ReadyGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetInboundServiceGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetScreenDataDirtyGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetControllerButtonsDirtyGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_SetContextInformationGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OpenResourceManagerGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OpenRelationshipManagerGetExceptions: function() {
var params;
var param;
params = [];
return params;
},
_OpenEditDialogGetExceptions: function() {
var params;
var param;
params = [];
return params;
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
initialize: function(shrewdObject, skipCheck){
if (shrewdObject instanceof AShrewd || skipCheck) {
this._shrewd = shrewdObject;
} else {
alert ('The object passed to BuildEmpire.Mosaic.Courseware.ConnectorOutboundService is not an instance of AShrewd.');
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
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Mode = {"SCREEN_EDITOR" : 1, "SCREEN_DISPLAY" : 2};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Context = {"GENERAL" : 1, "POSITION" : 2};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.CoursewareType = {"DANNY_01" : 1, "FRED_01" : 2};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.RelationshipDirection = {"PREVIOUS" : 1, "NEXT" : 2};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.RelationshipTarget = {"ANY" : 1, "SAME" : 2};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ScalingMode = {"NONE" : 1, "FREE" : 2, "RATIO" : 3, "XAXIS" : 4, "YAXIS" : 5};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Alignment = {"LEFT" : 0, "CENTER" : 1, "RIGHT" : 2};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.LearningPathFulfilmentType = {"NONE" : 1, "CHILDREN" : 2, "ALL" : 3};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.DragMode = {"FREE" : 1, "COLUMNS" : 2, "ALL" : 3};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormFieldType = {"TEXT" : 1, "PASSWORD" : 2, "TEXTAREA" : 3, "HTML" : 4, "SELECT" : 5, "CHECKBOX" : 6, "RADIO" : 7, "RANGE" : 8, "BUTTON" : 9};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.StructureItemType = {"PROJECT" : 1, "FOLDER" : 2, "SCREEN" : 3};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.StructureItemTag = {"ANIMATION_REQUIRED" : 1, "ANIMATION_PRESENT" : 2, "AUDIO_REQUIRED" : 4, "AUDIO_PRESENT" : 8, "GRAPHIC_REQUIRED" : 16, "GRAPHIC_PRESENT" : 32, "VIDEO_REQUIRED" : 64, "VIDEO_PRESENT" : 128, "STAR_REQUIRED" : 256, "STAR_PRESENT" : 512};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EventsInbound = {"READY" : "READY", "SCALE" : "SCALE", "DATA_CONFIGURATION" : "DATA_CONFIGURATION", "DATA_SCREEN" : "DATA_SCREEN", "DRAW" : "DRAW", "COLUMN_ADD" : "COLUMN_ADD", "COLUMN_HIGHLIGHT" : "COLUMN_HIGHLIGHT", "COLUMN_UNHIGHLIGHT" : "COLUMN_UNHIGHLIGHT", "COMPONENT_ADD" : "COMPONENT_ADD"};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EventsOutbound = {"READY" : "READY", "MODE" : "MODE", "CONTEXT" : "CONTEXT", "DIRTY" : "DIRTY"};
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Translation = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {boolean} base
 */
base : false,
/**
 * @type {String} name
 */
name : null,
/**
 * @type {String} value
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.Translation";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.base, "boolean", ""));
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.value, "string", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.base = shrewdObj.base;
this.name = shrewdObj.name;
this.value = shrewdObj.value;
} else {
this.id = this._setShrewd(shrewdObj[0],"string-id","",true);
this.base = this._setShrewd(shrewdObj[1],"boolean","",false);
this.name = this._setShrewd(shrewdObj[2],"string","",false);
this.value = this._setShrewd(shrewdObj[3],"string","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.LearningPath = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {boolean} base
 */
base : false,
/**
 * @type {String} name
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.LearningPath";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.base, "boolean", ""));
parametersArray.push(this._getShrewd(this.name, "string", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.base = shrewdObj.base;
this.name = shrewdObj.name;
} else {
this.id = this._setShrewd(shrewdObj[0],"string-id","",true);
this.base = this._setShrewd(shrewdObj[1],"boolean","",false);
this.name = this._setShrewd(shrewdObj[2],"string","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Relationship = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id
 */
id : null,
/**
 * @type {Object} source (mixed)
 */
source : null,
/**
 * @type {Object} event (mixed)
 */
event : null,
/**
 * @type {Object} target (mixed)
 */
target : null,
/**
 * @type {Object} action (mixed)
 */
action : null,
/**
 * @type {Object} data (mixed)
 */
data : null,
/**
 * @type {integer} direction
 */
direction : null,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.Relationship";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string", ""));
parametersArray.push(this._getShrewd(this.source, "mixed", ""));
parametersArray.push(this._getShrewd(this.event, "mixed", ""));
parametersArray.push(this._getShrewd(this.target, "mixed", ""));
parametersArray.push(this._getShrewd(this.action, "mixed", ""));
parametersArray.push(this._getShrewd(this.data, "mixed", ""));
parametersArray.push(this._getShrewd(this.direction, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.source = shrewdObj.source;
this.event = shrewdObj.event;
this.target = shrewdObj.target;
this.action = shrewdObj.action;
this.data = shrewdObj.data;
this.direction = shrewdObj.direction;
} else {
this.id = this._setShrewd(shrewdObj[0],"string","",false);
this.source = this._setShrewd(shrewdObj[1],"mixed","",false);
this.event = this._setShrewd(shrewdObj[2],"mixed","",false);
this.target = this._setShrewd(shrewdObj[3],"mixed","",false);
this.action = this._setShrewd(shrewdObj[4],"mixed","",false);
this.data = this._setShrewd(shrewdObj[5],"mixed","",true);
this.direction = this._setShrewd(shrewdObj[6],"integer","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ControllerButton = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id
 */
id : null,
/**
 * @type {String} title
 */
title : null,
/**
 * @type {boolean} selected
 */
selected : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ControllerButton",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ControllerButton";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string", ""));
parametersArray.push(this._getShrewd(this.title, "string", ""));
parametersArray.push(this._getShrewd(this.selected, "boolean", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.title = shrewdObj.title;
this.selected = shrewdObj.selected;
} else {
this.id = this._setShrewd(shrewdObj[0],"string","",false);
this.title = this._setShrewd(shrewdObj[1],"string","",false);
this.selected = this._setShrewd(shrewdObj[2],"boolean","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ScreenSound = new Class({
Extends:AShrewdBase,
/**
 * @type {String} soundFile
 */
soundFile : null,
/**
 * @type {boolean} startImmediately
 */
startImmediately : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ScreenSound",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ScreenSound";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.soundFile, "string", ""));
parametersArray.push(this._getShrewd(this.startImmediately, "boolean", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.soundFile = shrewdObj.soundFile;
this.startImmediately = shrewdObj.startImmediately;
} else {
this.soundFile = this._setShrewd(shrewdObj[0],"string","",false);
this.startImmediately = this._setShrewd(shrewdObj[1],"boolean","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ComponentMetrics = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ComponentMetrics";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.xPercent, "float", ""));
parametersArray.push(this._getShrewd(this.yPercent, "float", ""));
parametersArray.push(this._getShrewd(this.widthPercent, "float", ""));
parametersArray.push(this._getShrewd(this.heightPercent, "float", ""));
parametersArray.push(this._getShrewd(this.tabIndex, "integer", ""));
parametersArray.push(this._getShrewd(this.zIndex, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.xPercent = shrewdObj.xPercent;
this.yPercent = shrewdObj.yPercent;
this.widthPercent = shrewdObj.widthPercent;
this.heightPercent = shrewdObj.heightPercent;
this.tabIndex = shrewdObj.tabIndex;
this.zIndex = shrewdObj.zIndex;
} else {
this.xPercent = this._setShrewd(shrewdObj[0],"float","",true);
this.yPercent = this._setShrewd(shrewdObj[1],"float","",true);
this.widthPercent = this._setShrewd(shrewdObj[2],"float","",true);
this.heightPercent = this._setShrewd(shrewdObj[3],"float","",true);
this.tabIndex = this._setShrewd(shrewdObj[4],"integer","",true);
this.zIndex = this._setShrewd(shrewdObj[5],"integer","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ComponentDisplayProps = new Class({
Extends:AShrewdBase,
/**
 * @type {integer} alignment
 */
alignment : null,
/**
 * @type {integer} marginTop
 */
marginTop : null,
/**
 * @type {integer} marginBottom
 */
marginBottom : null,
/**
 * @type {integer} marginLeft
 */
marginLeft : null,
/**
 * @type {integer} marginRight
 */
marginRight : null,
/**
 * @type {integer} initialVisual
 */
initialVisual : null,
/**
 * @type {String} appliedClass
 */
appliedClass : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ComponentDisplayProps",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ComponentDisplayProps";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.alignment, "integer", ""));
parametersArray.push(this._getShrewd(this.marginTop, "integer", ""));
parametersArray.push(this._getShrewd(this.marginBottom, "integer", ""));
parametersArray.push(this._getShrewd(this.marginLeft, "integer", ""));
parametersArray.push(this._getShrewd(this.marginRight, "integer", ""));
parametersArray.push(this._getShrewd(this.initialVisual, "integer", ""));
parametersArray.push(this._getShrewd(this.appliedClass, "string", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.alignment = shrewdObj.alignment;
this.marginTop = shrewdObj.marginTop;
this.marginBottom = shrewdObj.marginBottom;
this.marginLeft = shrewdObj.marginLeft;
this.marginRight = shrewdObj.marginRight;
this.initialVisual = shrewdObj.initialVisual;
this.appliedClass = shrewdObj.appliedClass;
} else {
this.alignment = this._setShrewd(shrewdObj[0],"integer","",true);
this.marginTop = this._setShrewd(shrewdObj[1],"integer","",true);
this.marginBottom = this._setShrewd(shrewdObj[2],"integer","",true);
this.marginLeft = this._setShrewd(shrewdObj[3],"integer","",true);
this.marginRight = this._setShrewd(shrewdObj[4],"integer","",true);
this.initialVisual = this._setShrewd(shrewdObj[5],"integer","",true);
this.appliedClass = this._setShrewd(shrewdObj[6],"string","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Component = new Class({
Extends:AShrewdBase,
/**
 * @type {String} name
 */
name : null,
/**
 * @type {String} title
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.Component";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.title, "string", ""));
parametersArray.push(this._getShrewd(this.active, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.name = shrewdObj.name;
this.title = shrewdObj.title;
this.active = shrewdObj.active;
} else {
this.name = this._setShrewd(shrewdObj[0],"string","",false);
this.title = this._setShrewd(shrewdObj[1],"string","",false);
this.active = this._setShrewd(shrewdObj[2],"integer","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ComponentInstance = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {String} alias
 */
alias : null,
/**
 * @type {String} name
 */
name : null,
/**
 * @type {Hash} data
 */
data : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.ComponentMetrics}
 */
metrics : null,
/**
 * @type {integer} scale
 */
scale : null,
/**
 * @type {Object} autoAdjacent (mixed)
 */
autoAdjacent : null,
/**
 * @type {Hash} settings
 */
settings : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.ComponentDisplayProps}
 */
displayProperties : null,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ComponentInstance";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.alias, "string", ""));
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.data, "map", ""));
parametersArray.push(this._getShrewd(this.metrics, "BuildEmpire.Mosaic.Courseware.ComponentMetrics", ""));
parametersArray.push(this._getShrewd(this.scale, "integer", ""));
parametersArray.push(this._getShrewd(this.autoAdjacent, "mixed", ""));
parametersArray.push(this._getShrewd(this.settings, "map", ""));
parametersArray.push(this._getShrewd(this.displayProperties, "BuildEmpire.Mosaic.Courseware.ComponentDisplayProps", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.alias = shrewdObj.alias;
this.name = shrewdObj.name;
this.data = shrewdObj.data;
this.metrics = shrewdObj.metrics;
this.scale = shrewdObj.scale;
this.autoAdjacent = shrewdObj.autoAdjacent;
this.settings = shrewdObj.settings;
this.displayProperties = shrewdObj.displayProperties;
} else {
this.id = this._setShrewd(shrewdObj[0],"string-id","",false);
this.alias = this._setShrewd(shrewdObj[1],"string","",false);
this.name = this._setShrewd(shrewdObj[2],"string","",false);
this.data = this._setShrewd(shrewdObj[3],"map","",true);
this.metrics = this._setShrewd(shrewdObj[4],"BuildEmpire.Mosaic.Courseware.ComponentMetrics","",true);
this.scale = this._setShrewd(shrewdObj[5],"integer","",true);
this.autoAdjacent = this._setShrewd(shrewdObj[6],"mixed","",true);
this.settings = this._setShrewd(shrewdObj[7],"map","",true);
this.displayProperties = this._setShrewd(shrewdObj[8],"BuildEmpire.Mosaic.Courseware.ComponentDisplayProps","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ColumnRowMetrics = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ColumnRowMetrics";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.widthPercent, "float", ""));
parametersArray.push(this._getShrewd(this.heightPercent, "float", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.widthPercent = shrewdObj.widthPercent;
this.heightPercent = shrewdObj.heightPercent;
} else {
this.widthPercent = this._setShrewd(shrewdObj[0],"float","",true);
this.heightPercent = this._setShrewd(shrewdObj[1],"float","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Column = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {Array} components
 */
components : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.ColumnRowMetrics}
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.Column";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.components, "list", "BuildEmpire.Mosaic.Courseware.ComponentInstance"));
parametersArray.push(this._getShrewd(this.metrics, "BuildEmpire.Mosaic.Courseware.ColumnRowMetrics", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.components = shrewdObj.components;
this.metrics = shrewdObj.metrics;
} else {
this.id = this._setShrewd(shrewdObj[0],"string-id","",false);
this.components = this._setShrewd(shrewdObj[1],"list","BuildEmpire.Mosaic.Courseware.ComponentInstance",true);
this.metrics = this._setShrewd(shrewdObj[2],"BuildEmpire.Mosaic.Courseware.ColumnRowMetrics","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Row = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {Array} columns
 */
columns : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.ColumnRowMetrics}
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.Row";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.columns, "list", "BuildEmpire.Mosaic.Courseware.Column"));
parametersArray.push(this._getShrewd(this.metrics, "BuildEmpire.Mosaic.Courseware.ColumnRowMetrics", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.columns = shrewdObj.columns;
this.metrics = shrewdObj.metrics;
} else {
this.id = this._setShrewd(shrewdObj[0],"string-id","",false);
this.columns = this._setShrewd(shrewdObj[1],"list","BuildEmpire.Mosaic.Courseware.Column",true);
this.metrics = this._setShrewd(shrewdObj[2],"BuildEmpire.Mosaic.Courseware.ColumnRowMetrics","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.Template = new Class({
Extends:AShrewdBase,
/**
 * @type {String} name
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.Template";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.rows, "list", "BuildEmpire.Mosaic.Courseware.Row"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.name = shrewdObj.name;
this.rows = shrewdObj.rows;
} else {
this.name = this._setShrewd(shrewdObj[0],"string","",false);
this.rows = this._setShrewd(shrewdObj[1],"list","BuildEmpire.Mosaic.Courseware.Row",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.DataRows = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.DataRows";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.allow, "boolean", ""));
parametersArray.push(this._getShrewd(this.resizable, "boolean", ""));
parametersArray.push(this._getShrewd(this.initial, "integer", ""));
parametersArray.push(this._getShrewd(this.min, "integer", ""));
parametersArray.push(this._getShrewd(this.max, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.allow = shrewdObj.allow;
this.resizable = shrewdObj.resizable;
this.initial = shrewdObj.initial;
this.min = shrewdObj.min;
this.max = shrewdObj.max;
} else {
this.allow = this._setShrewd(shrewdObj[0],"boolean","",false);
this.resizable = this._setShrewd(shrewdObj[1],"boolean","",false);
this.initial = this._setShrewd(shrewdObj[2],"integer","",false);
this.min = this._setShrewd(shrewdObj[3],"integer","",false);
this.max = this._setShrewd(shrewdObj[4],"integer","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.DataColumns = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.DataColumns";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.allow, "boolean", ""));
parametersArray.push(this._getShrewd(this.resizable, "boolean", ""));
parametersArray.push(this._getShrewd(this.initial, "integer", ""));
parametersArray.push(this._getShrewd(this.min, "integer", ""));
parametersArray.push(this._getShrewd(this.max, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.allow = shrewdObj.allow;
this.resizable = shrewdObj.resizable;
this.initial = shrewdObj.initial;
this.min = shrewdObj.min;
this.max = shrewdObj.max;
} else {
this.allow = this._setShrewd(shrewdObj[0],"boolean","",false);
this.resizable = this._setShrewd(shrewdObj[1],"boolean","",false);
this.initial = this._setShrewd(shrewdObj[2],"integer","",false);
this.min = this._setShrewd(shrewdObj[3],"integer","",false);
this.max = this._setShrewd(shrewdObj[4],"integer","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.DataCanvas = new Class({
Extends:AShrewdBase,
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
 * @type {integer} width
 */
width : null,
/**
 * @type {integer} height
 */
height : null,
/**
 * @type {integer} leftPos
 */
leftPos : null,
/**
 * @type {integer} topPos
 */
topPos : null,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.DataCanvas";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.placeInColumns, "boolean", ""));
parametersArray.push(this._getShrewd(this.restrictWidth, "boolean", ""));
parametersArray.push(this._getShrewd(this.restrictHeight, "boolean", ""));
parametersArray.push(this._getShrewd(this.width, "integer", ""));
parametersArray.push(this._getShrewd(this.height, "integer", ""));
parametersArray.push(this._getShrewd(this.leftPos, "integer", ""));
parametersArray.push(this._getShrewd(this.topPos, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.placeInColumns = shrewdObj.placeInColumns;
this.restrictWidth = shrewdObj.restrictWidth;
this.restrictHeight = shrewdObj.restrictHeight;
this.width = shrewdObj.width;
this.height = shrewdObj.height;
this.leftPos = shrewdObj.leftPos;
this.topPos = shrewdObj.topPos;
} else {
this.placeInColumns = this._setShrewd(shrewdObj[0],"boolean","",false);
this.restrictWidth = this._setShrewd(shrewdObj[1],"boolean","",false);
this.restrictHeight = this._setShrewd(shrewdObj[2],"boolean","",false);
this.width = this._setShrewd(shrewdObj[3],"integer","",true);
this.height = this._setShrewd(shrewdObj[4],"integer","",true);
this.leftPos = this._setShrewd(shrewdObj[5],"integer","",true);
this.topPos = this._setShrewd(shrewdObj[6],"integer","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.DataGrid = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.DataGrid";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.x, "integer", ""));
parametersArray.push(this._getShrewd(this.y, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.x = shrewdObj.x;
this.y = shrewdObj.y;
} else {
this.x = this._setShrewd(shrewdObj[0],"integer","",false);
this.y = this._setShrewd(shrewdObj[1],"integer","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ConfigurationData = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {String} name
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
 * @type {String} language
 */
language : "en",
/**
 * @type {boolean} valid
 */
valid : false,
/**
 * @type {integer} dragMode
 */
dragMode : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.DataRows}
 */
rows : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.DataColumns}
 */
columns : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.DataGrid}
 */
grid : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.DataCanvas}
 */
canvas : null,
/**
 * @type {integer} screenWidth
 */
screenWidth : null,
/**
 * @type {integer} screenHeight
 */
screenHeight : null,
/**
 * @type {integer} coursewareType
 */
coursewareType : null,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ConfigurationData";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.translations, "list", "BuildEmpire.Mosaic.Courseware.Translation"));
parametersArray.push(this._getShrewd(this.learningPaths, "list", "BuildEmpire.Mosaic.Courseware.LearningPath"));
parametersArray.push(this._getShrewd(this.components, "list", "BuildEmpire.Mosaic.Courseware.Component"));
parametersArray.push(this._getShrewd(this.language, "string", ""));
parametersArray.push(this._getShrewd(this.valid, "boolean", ""));
parametersArray.push(this._getShrewd(this.dragMode, "integer", ""));
parametersArray.push(this._getShrewd(this.rows, "BuildEmpire.Mosaic.Courseware.DataRows", ""));
parametersArray.push(this._getShrewd(this.columns, "BuildEmpire.Mosaic.Courseware.DataColumns", ""));
parametersArray.push(this._getShrewd(this.grid, "BuildEmpire.Mosaic.Courseware.DataGrid", ""));
parametersArray.push(this._getShrewd(this.canvas, "BuildEmpire.Mosaic.Courseware.DataCanvas", ""));
parametersArray.push(this._getShrewd(this.screenWidth, "integer", ""));
parametersArray.push(this._getShrewd(this.screenHeight, "integer", ""));
parametersArray.push(this._getShrewd(this.coursewareType, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.name = shrewdObj.name;
this.translations = shrewdObj.translations;
this.learningPaths = shrewdObj.learningPaths;
this.components = shrewdObj.components;
this.language = shrewdObj.language;
this.valid = shrewdObj.valid;
this.dragMode = shrewdObj.dragMode;
this.rows = shrewdObj.rows;
this.columns = shrewdObj.columns;
this.grid = shrewdObj.grid;
this.canvas = shrewdObj.canvas;
this.screenWidth = shrewdObj.screenWidth;
this.screenHeight = shrewdObj.screenHeight;
this.coursewareType = shrewdObj.coursewareType;
} else {
this.id = this._setShrewd(shrewdObj[0],"string-id","",false);
this.name = this._setShrewd(shrewdObj[1],"string","",false);
this.translations = this._setShrewd(shrewdObj[2],"list","BuildEmpire.Mosaic.Courseware.Translation",true);
this.learningPaths = this._setShrewd(shrewdObj[3],"list","BuildEmpire.Mosaic.Courseware.LearningPath",true);
this.components = this._setShrewd(shrewdObj[4],"list","BuildEmpire.Mosaic.Courseware.Component",true);
this.language = this._setShrewd(shrewdObj[5],"string","",false);
this.valid = this._setShrewd(shrewdObj[6],"boolean","",false);
this.dragMode = this._setShrewd(shrewdObj[7],"integer","",false);
this.rows = this._setShrewd(shrewdObj[8],"BuildEmpire.Mosaic.Courseware.DataRows","",false);
this.columns = this._setShrewd(shrewdObj[9],"BuildEmpire.Mosaic.Courseware.DataColumns","",false);
this.grid = this._setShrewd(shrewdObj[10],"BuildEmpire.Mosaic.Courseware.DataGrid","",false);
this.canvas = this._setShrewd(shrewdObj[11],"BuildEmpire.Mosaic.Courseware.DataCanvas","",false);
this.screenWidth = this._setShrewd(shrewdObj[12],"integer","",true);
this.screenHeight = this._setShrewd(shrewdObj[13],"integer","",true);
this.coursewareType = this._setShrewd(shrewdObj[14],"integer","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormFieldHtml = new Class({
Extends:AShrewdBase,
/**
 * @type {Array} contentCss
 */
contentCss : null,
/**
 * @type {Array} styleFormats
 */
styleFormats : null,
/**
 * @type {Hash} cssAttributes
 */
cssAttributes : null,
/**
 * @type {String} validElements
 */
validElements : null,
/**
 * @type {Hash} options
 */
options : null,
/**
 * @type {integer} rows
 */
rows : null,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldHtml";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.contentCss, "list", "string"));
parametersArray.push(this._getShrewd(this.styleFormats, "list", "map"));
parametersArray.push(this._getShrewd(this.cssAttributes, "map", "string"));
parametersArray.push(this._getShrewd(this.validElements, "string", ""));
parametersArray.push(this._getShrewd(this.options, "map", ""));
parametersArray.push(this._getShrewd(this.rows, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.contentCss = shrewdObj.contentCss;
this.styleFormats = shrewdObj.styleFormats;
this.cssAttributes = shrewdObj.cssAttributes;
this.validElements = shrewdObj.validElements;
this.options = shrewdObj.options;
this.rows = shrewdObj.rows;
} else {
this.contentCss = this._setShrewd(shrewdObj[0],"list","string",true);
this.styleFormats = this._setShrewd(shrewdObj[1],"list","map",true);
this.cssAttributes = this._setShrewd(shrewdObj[2],"map","string",true);
this.validElements = this._setShrewd(shrewdObj[3],"string","",true);
this.options = this._setShrewd(shrewdObj[4],"map","",true);
this.rows = this._setShrewd(shrewdObj[5],"integer","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormFieldSelect = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldSelect";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.options, "map", "string"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.options = shrewdObj.options;
} else {
this.options = this._setShrewd(shrewdObj[0],"map","string",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormFieldRadio = new Class({
Extends:AShrewdBase,
/**
 * @type {Array} values
 */
values : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.EditableFormFieldRadio",
/**
 * Get the version of the generated shrewd file.
 * 
 * @returns {string}
 */
getShrewdVersion : function(){
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldRadio";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.values, "list", "map"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.values = shrewdObj.values;
} else {
this.values = this._setShrewd(shrewdObj[0],"list","map",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormFieldRange = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldRange";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.min, "integer", ""));
parametersArray.push(this._getShrewd(this.max, "integer", ""));
parametersArray.push(this._getShrewd(this.step, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.min = shrewdObj.min;
this.max = shrewdObj.max;
this.step = shrewdObj.step;
} else {
this.min = this._setShrewd(shrewdObj[0],"integer","",false);
this.max = this._setShrewd(shrewdObj[1],"integer","",false);
this.step = this._setShrewd(shrewdObj[2],"integer","",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormFieldText = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldText";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.rows, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.rows = shrewdObj.rows;
} else {
this.rows = this._setShrewd(shrewdObj[0],"integer","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormField = new Class({
Extends:AShrewdBase,
/**
 * @type {integer} type
 */
type : null,
/**
 * @type {String} name
 */
name : null,
/**
 * @type {String} title
 */
title : null,
/**
 * @type {boolean} required
 */
required : null,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {Object} value (mixed)
 */
value : null,
/**
 * @type {Object} data (struct)
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableFormField";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.type, "integer", ""));
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.title, "string", ""));
parametersArray.push(this._getShrewd(this.required, "boolean", ""));
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.value, "mixed", ""));
parametersArray.push(this._getShrewd(this.data, "struct", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.type = shrewdObj.type;
this.name = shrewdObj.name;
this.title = shrewdObj.title;
this.required = shrewdObj.required;
this.id = shrewdObj.id;
this.value = shrewdObj.value;
this.data = shrewdObj.data;
} else {
this.type = this._setShrewd(shrewdObj[0],"integer","",false);
this.name = this._setShrewd(shrewdObj[1],"string","",false);
this.title = this._setShrewd(shrewdObj[2],"string","",false);
this.required = this._setShrewd(shrewdObj[3],"boolean","",false);
this.id = this._setShrewd(shrewdObj[4],"string-id","",true);
this.value = this._setShrewd(shrewdObj[5],"mixed","",true);
this.data = this._setShrewd(shrewdObj[6],"struct","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableFormGroup = new Class({
Extends:AShrewdBase,
/**
 * @type {String} name
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableFormGroup";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.fields, "list", "BuildEmpire.Mosaic.Courseware.EditableFormField"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.name = shrewdObj.name;
this.fields = shrewdObj.fields;
} else {
this.name = this._setShrewd(shrewdObj[0],"string","",false);
this.fields = this._setShrewd(shrewdObj[1],"list","BuildEmpire.Mosaic.Courseware.EditableFormField",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.EditableForm = new Class({
Extends:AShrewdBase,
/**
 * @type {String} name
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.EditableForm";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.groups, "list", "BuildEmpire.Mosaic.Courseware.EditableFormGroup"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.name = shrewdObj.name;
this.groups = shrewdObj.groups;
} else {
this.name = this._setShrewd(shrewdObj[0],"string","",false);
this.groups = this._setShrewd(shrewdObj[1],"list","BuildEmpire.Mosaic.Courseware.EditableFormGroup",false);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent = new Class({
Extends:AShrewdBase,
/**
 * @type {String} context
 */
context : null,
/**
 * @type {String} event
 */
event : null,
/**
 * @type {String} key
 */
key : null,
/**
 * @type {String} string
 */
string : null,
/**
 * @type {Object} data (mixed)
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.context, "string", ""));
parametersArray.push(this._getShrewd(this.event, "string", ""));
parametersArray.push(this._getShrewd(this.key, "string", ""));
parametersArray.push(this._getShrewd(this.string, "string", ""));
parametersArray.push(this._getShrewd(this.data, "mixed", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.context = shrewdObj.context;
this.event = shrewdObj.event;
this.key = shrewdObj.key;
this.string = shrewdObj.string;
this.data = shrewdObj.data;
} else {
this.context = this._setShrewd(shrewdObj[0],"string","",false);
this.event = this._setShrewd(shrewdObj[1],"string","",false);
this.key = this._setShrewd(shrewdObj[2],"string","",false);
this.string = this._setShrewd(shrewdObj[3],"string","",false);
this.data = this._setShrewd(shrewdObj[4],"mixed","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ValidRelationshipAction = new Class({
Extends:AShrewdBase,
/**
 * @type {String} context
 */
context : null,
/**
 * @type {String} action
 */
action : null,
/**
 * @type {String} key
 */
key : null,
/**
 * @type {String} string
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ValidRelationshipAction";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.context, "string", ""));
parametersArray.push(this._getShrewd(this.action, "string", ""));
parametersArray.push(this._getShrewd(this.key, "string", ""));
parametersArray.push(this._getShrewd(this.string, "string", ""));
parametersArray.push(this._getShrewd(this.fields, "list", "BuildEmpire.Mosaic.Courseware.EditableFormField"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.context = shrewdObj.context;
this.action = shrewdObj.action;
this.key = shrewdObj.key;
this.string = shrewdObj.string;
this.fields = shrewdObj.fields;
} else {
this.context = this._setShrewd(shrewdObj[0],"string","",false);
this.action = this._setShrewd(shrewdObj[1],"string","",false);
this.key = this._setShrewd(shrewdObj[2],"string","",false);
this.string = this._setShrewd(shrewdObj[3],"string","",false);
this.fields = this._setShrewd(shrewdObj[4],"list","BuildEmpire.Mosaic.Courseware.EditableFormField",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.RelationshipCollection = new Class({
Extends:AShrewdBase,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.RelationshipCollection";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.events, "list", "BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent"));
parametersArray.push(this._getShrewd(this.actions, "list", "BuildEmpire.Mosaic.Courseware.ValidRelationshipAction"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.events = shrewdObj.events;
this.actions = shrewdObj.actions;
} else {
this.events = this._setShrewd(shrewdObj[0],"list","BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent",true);
this.actions = this._setShrewd(shrewdObj[1],"list","BuildEmpire.Mosaic.Courseware.ValidRelationshipAction",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer = new Class({
Extends:AShrewdBase,
/**
 * @type {String} name
 */
name : null,
/**
 * @type {String} selector
 */
selector : null,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.name, "string", ""));
parametersArray.push(this._getShrewd(this.selector, "string", ""));
parametersArray.push(this._getShrewd(this.actions, "list", "BuildEmpire.Mosaic.Courseware.ValidRelationshipAction"));
parametersArray.push(this._getShrewd(this.events, "list", "BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent"));
parametersArray.push(this._getShrewd(this.items, "list", "BuildEmpire.Mosaic.Courseware.RelationshipCollection"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.name = shrewdObj.name;
this.selector = shrewdObj.selector;
this.actions = shrewdObj.actions;
this.events = shrewdObj.events;
this.items = shrewdObj.items;
} else {
this.name = this._setShrewd(shrewdObj[0],"string","",true);
this.selector = this._setShrewd(shrewdObj[1],"string","",true);
this.actions = this._setShrewd(shrewdObj[2],"list","BuildEmpire.Mosaic.Courseware.ValidRelationshipAction",true);
this.events = this._setShrewd(shrewdObj[3],"list","BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent",true);
this.items = this._setShrewd(shrewdObj[4],"list","BuildEmpire.Mosaic.Courseware.RelationshipCollection",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.RelationshipContainer = new Class({
Extends:AShrewdBase,
/**
 * @type {BuildEmpire.Mosaic.Courseware.RelationshipCollection}
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.RelationshipContainer";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.engine, "BuildEmpire.Mosaic.Courseware.RelationshipCollection", ""));
parametersArray.push(this._getShrewd(this.components, "map", "BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer"));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.engine = shrewdObj.engine;
this.components = shrewdObj.components;
} else {
this.engine = this._setShrewd(shrewdObj[0],"BuildEmpire.Mosaic.Courseware.RelationshipCollection","",true);
this.components = this._setShrewd(shrewdObj[1],"map","BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.ScreenData = new Class({
Extends:AShrewdBase,
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
 * @type {String} appliedClass
 */
appliedClass : null,
/**
 * @type {BuildEmpire.Mosaic.Courseware.ScreenSound}
 */
sound : null,
/**
 * @type {html} rawData
 */
rawData : null,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.ScreenData";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.rows, "list", "BuildEmpire.Mosaic.Courseware.Row"));
parametersArray.push(this._getShrewd(this.freeComponents, "list", "BuildEmpire.Mosaic.Courseware.ComponentInstance"));
parametersArray.push(this._getShrewd(this.relationships, "list", "BuildEmpire.Mosaic.Courseware.Relationship"));
parametersArray.push(this._getShrewd(this.appliedClass, "string", ""));
parametersArray.push(this._getShrewd(this.sound, "BuildEmpire.Mosaic.Courseware.ScreenSound", ""));
parametersArray.push(this._getShrewd(this.rawData, "html", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.rows = shrewdObj.rows;
this.freeComponents = shrewdObj.freeComponents;
this.relationships = shrewdObj.relationships;
this.appliedClass = shrewdObj.appliedClass;
this.sound = shrewdObj.sound;
this.rawData = shrewdObj.rawData;
} else {
this.rows = this._setShrewd(shrewdObj[0],"list","BuildEmpire.Mosaic.Courseware.Row",true);
this.freeComponents = this._setShrewd(shrewdObj[1],"list","BuildEmpire.Mosaic.Courseware.ComponentInstance",true);
this.relationships = this._setShrewd(shrewdObj[2],"list","BuildEmpire.Mosaic.Courseware.Relationship",true);
this.appliedClass = this._setShrewd(shrewdObj[3],"string","",true);
this.sound = this._setShrewd(shrewdObj[4],"BuildEmpire.Mosaic.Courseware.ScreenSound","",true);
this.rawData = this._setShrewd(shrewdObj[5],"html","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
/**
 * Automatically Generated Shrewd File
 */
var BuildEmpire = BuildEmpire || {};
BuildEmpire.Mosaic = BuildEmpire.Mosaic || {};
BuildEmpire.Mosaic.Courseware = BuildEmpire.Mosaic.Courseware || {};
BuildEmpire.Mosaic.Courseware.StructureItem = new Class({
Extends:AShrewdBase,
/**
 * @type {String} id (ID).
 */
id : null,
/**
 * @type {String} alias (ID).
 */
alias : null,
/**
 * @type {integer} type
 */
type : null,
/**
 * @type {String} title
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
 * @type {BuildEmpire.Mosaic.Courseware.ScreenData}
 */
screenData : null,
/**
 * @type {integer} tags
 */
tags : 0,
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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
},
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "BuildEmpire.Mosaic.Courseware.StructureItem";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this._getShrewd(this.id, "string-id", ""));
parametersArray.push(this._getShrewd(this.alias, "string-id", ""));
parametersArray.push(this._getShrewd(this.type, "integer", ""));
parametersArray.push(this._getShrewd(this.title, "string", ""));
parametersArray.push(this._getShrewd(this.populated, "boolean", ""));
parametersArray.push(this._getShrewd(this.children, "list", "BuildEmpire.Mosaic.Courseware.StructureItem"));
parametersArray.push(this._getShrewd(this.learningPathIds, "map", "integer"));
parametersArray.push(this._getShrewd(this.screenData, "BuildEmpire.Mosaic.Courseware.ScreenData", ""));
parametersArray.push(this._getShrewd(this.tags, "integer", ""));
return parametersArray;
},
/**
 * Set the content via the shrewd array.
 * 
 * @param {Array|AShrewdBase} shrewdObj
 * @returns {null} 
 */
setShrewd: function(shrewdObj){
if (typeof shrewdObj.shrewdNS != undefined && shrewdObj.shrewdNS == this.shrewdNS) {
this.id = shrewdObj.id;
this.alias = shrewdObj.alias;
this.type = shrewdObj.type;
this.title = shrewdObj.title;
this.populated = shrewdObj.populated;
this.children = shrewdObj.children;
this.learningPathIds = shrewdObj.learningPathIds;
this.screenData = shrewdObj.screenData;
this.tags = shrewdObj.tags;
} else {
this.id = this._setShrewd(shrewdObj[0],"string-id","",false);
this.alias = this._setShrewd(shrewdObj[1],"string-id","",false);
this.type = this._setShrewd(shrewdObj[2],"integer","",false);
this.title = this._setShrewd(shrewdObj[3],"string","",false);
this.populated = this._setShrewd(shrewdObj[4],"boolean","",false);
this.children = this._setShrewd(shrewdObj[5],"list","BuildEmpire.Mosaic.Courseware.StructureItem",true);
this.learningPathIds = this._setShrewd(shrewdObj[6],"map","integer",true);
this.screenData = this._setShrewd(shrewdObj[7],"BuildEmpire.Mosaic.Courseware.ScreenData","",true);
this.tags = this._setShrewd(shrewdObj[8],"integer","",true);
}
},
initialize: function(initObj){
if (initObj) {Object.append(this, initObj);}
}
});
