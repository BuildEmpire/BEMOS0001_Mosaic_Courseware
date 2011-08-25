/**
 * Automatically Generated Shrewd File
 */
var MosaicProjectToCourseService = new Class({
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectToCourseService";
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
"BuildEmpire.Mosaic.Project.ToCourseService",
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
"BuildEmpire.Mosaic.Project.ToCourseService",
"SetProjectToMosaicService",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {MosaicProjectConfigurationData}
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
"BuildEmpire.Mosaic.Project.ToCourseService",
"SetCourseConfigurationData",
parametersArray,
"void",
"",
exceptionsArray
);
}
},
/**
 * @param {MosaicProjectScreenData}
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
"BuildEmpire.Mosaic.Project.ToCourseService",
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
alert ('The object passed to MosaicProjectToCourseService is not an instance of AShrewd.');
}
}
});
/**
 * Automatically Generated Shrewd File
 */
var MosaicProjectFromCourseService = new Class({
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectFromCourseService";
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
"BuildEmpire.Mosaic.Project.FromCourseService",
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
"BuildEmpire.Mosaic.Project.FromCourseService",
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
alert ('The object passed to MosaicProjectFromCourseService is not an instance of AShrewd.');
}
}
});
/**
 * Automatically Generated Shrewd File
 */
var MosaicProjectColumn = new Class({
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
shrewdNS : "BuildEmpire.Mosaic.Project.Column",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectColumn";
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
var MosaicProjectTemplate = new Class({
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
shrewdNS : "BuildEmpire.Mosaic.Project.Template",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectTemplate";
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
var theClass = new MosaicProjectColumn();
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
var MosaicProjectScreen = new Class({
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
shrewdNS : "BuildEmpire.Mosaic.Project.Screen",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectScreen";
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
var MosaicProjectComponent = new Class({
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
shrewdNS : "BuildEmpire.Mosaic.Project.Component",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectComponent";
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
var MosaicProjectComponentData = new Class({
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
shrewdNS : "BuildEmpire.Mosaic.Project.ComponentData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectComponentData";
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
var MosaicProjectConfigurationData = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {MosaicProjectScreen}
 */
screen : new MosaicProjectScreen(),
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
shrewdNS : "BuildEmpire.Mosaic.Project.ConfigurationData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectConfigurationData";
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
var theClass = new MosaicProjectScreen();
theClass.setShrewd(shrewdArray[2]);
this.screen = theClass;
} else {
this.screen = null;
}
var l=shrewdArray[3].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[3][a]) {
var theClass = new MosaicProjectTemplate();
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
var theClass = new MosaicProjectComponent();
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
var MosaicProjectScreenData = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {MosaicProjectTemplate}
 */
template : new MosaicProjectTemplate(),
/**
 * @type {Array} components
 */
components : null,
/**
 * @type {string}
 */
shrewdNS : "BuildEmpire.Mosaic.Project.ScreenData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "MosaicProjectScreenData";
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
var theClass = new MosaicProjectTemplate();
theClass.setShrewd(shrewdArray[1]);
this.template = theClass;
} else {
this.template = null;
}
var l=shrewdArray[2].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[2][a]) {
var theClass = new MosaicProjectComponentData();
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
