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
 * @param {Object} service
 * @returns {void} 
 */
Ready: function(service){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(service);
} else {
parametersArray.push(service);
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
 * @param {Object} service
 * @returns {void} 
 */
SetProjectToMosaicService: function(service){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(service);
} else {
parametersArray.push(service);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetProjectToMosaicService",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {CoursewareConfigurationData}
 * @returns {void} 
 */
SetCourseConfigurationData: function(courseConfigurationData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(courseConfigurationData);
} else {
parametersArray.push((courseConfigurationData) ? courseConfigurationData.getShrewd() : null);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetCourseConfigurationData",
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
SetCourseContentScreenData: function(courseContentScreenData){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
parametersArray.push(courseContentScreenData);
} else {
parametersArray.push((courseContentScreenData) ? courseContentScreenData.getShrewd() : null);
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorInboundService",
"SetCourseContentScreenData",
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
 * @returns {void} 
 */
OpenDialog: function(){
if (this._shrewd) {
var parametersArray = new Array();
if (this._shrewd.local) {
} else {
}
var exceptionsArray = new Array();
return this._shrewd.communicate(
"BuildEmpire.Mosaic.Courseware.ConnectorOutboundService",
"OpenDialog",
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
 * @type {integer} x
 */
x : null,
/**
 * @type {integer} y
 */
y : null,
/**
 * @type {integer} width
 */
width : null,
/**
 * @type {integer} height
 */
height : null,
/**
 * @type {boolean} display
 */
display : true,
/**
 * @type {boolean} structure
 */
structure : true,
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
parametersArray.push(this.x);
parametersArray.push(this.y);
parametersArray.push(this.width);
parametersArray.push(this.height);
parametersArray.push(this.display);
parametersArray.push(this.structure);
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
this.x = shrewdArray[1];
this.y = shrewdArray[2];
this.width = shrewdArray[3];
this.height = shrewdArray[4];
this.display = shrewdArray[5];
this.structure = shrewdArray[6];
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
 * @type {Array} columns
 */
columns : null,
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
var l=this.columns.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.columns[a]) ? this.columns[a].getShrewd() : null);}parametersArray.push(lArray);
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
this.columns = lArray;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareScreen = new Class({
/**
 * @type {integer} width
 */
width : null,
/**
 * @type {integer} height
 */
height : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.Screen",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareScreen";
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
var CoursewareComponentData = new Class({
/**
 * @type {string} name
 */
name : null,
/**
 * @type {Array} data
 */
data : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Courseware.ComponentData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "CoursewareComponentData";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
parametersArray.push(this.name);
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
this.name = shrewdArray[0];
this.data = shrewdArray[1];
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
 * @type {CoursewareScreen}
 */
screen : new CoursewareScreen(),
/**
 * @type {Array} templates
 */
templates : null,
/**
 * @type {Array} components
 */
components : null,
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
parametersArray.push((this.screen) ? this.screen.getShrewd() : null);
var l=this.templates.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.templates[a]) ? this.templates[a].getShrewd() : null);}parametersArray.push(lArray);
var l=this.components.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.components[a]) ? this.components[a].getShrewd() : null);}parametersArray.push(lArray);
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
var theClass = new CoursewareScreen();
theClass.setShrewd(shrewdArray[2]);
this.screen = theClass;
} else {
this.screen = null;
}
var l=shrewdArray[3].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[3][a]) {
var theClass = new CoursewareTemplate();
theClass.setShrewd(shrewdArray[3][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
this.templates = lArray;
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
this.components = lArray;
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var CoursewareScreenData = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {CoursewareTemplate}
 */
template : new CoursewareTemplate(),
/**
 * @type {Array} components
 */
components : null,
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
parametersArray.push(this.id);
parametersArray.push((this.template) ? this.template.getShrewd() : null);
var l=this.components.length;var lArray = new Array();for (var a=0; a<l; a++) {lArray.push((this.components[a]) ? this.components[a].getShrewd() : null);}parametersArray.push(lArray);
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
var theClass = new CoursewareTemplate();
theClass.setShrewd(shrewdArray[1]);
this.template = theClass;
} else {
this.template = null;
}
var l=shrewdArray[2].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[2][a]) {
var theClass = new CoursewareComponentData();
theClass.setShrewd(shrewdArray[2][a]);
lArray[a] = theClass;
} else {
lArray[a] = null;
}
}
this.components = lArray;
},
initialize: function(){
}
});
