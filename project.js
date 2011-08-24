/**
 * Automatically Generated Shrewd File
 */
var ProjectColumn = new Class({
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
shrewdNS : "Project.Column",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "ProjectColumn";
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
var ProjectTemplate = new Class({
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
shrewdNS : "Project.Template",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "ProjectTemplate";
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
var theClass = new ProjectColumn();
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
var ProjectScreen = new Class({
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
shrewdNS : "Project.Screen",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "ProjectScreen";
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
var ProjectComponent = new Class({
/**
 * @type {string} name
 */
name : null,
/**
 * @type {string}
 */
shrewdNS : "Project.Component",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "ProjectComponent";
},
/**
 * Get the content as a shrewd array.
 * 
 * @returns {null} The shrewd array.
 */
getShrewd: function(){
var parametersArray = new Array();
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
this.name = shrewdArray[0];
},
initialize: function(){
}
});
/**
 * Automatically Generated Shrewd File
 */
var ProjectComponentData = new Class({
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
shrewdNS : "Project.ComponentData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "ProjectComponentData";
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
var ProjectConfigurationData = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {string} name
 */
name : null,
/**
 * @type {ProjectScreen}
 */
screen : new ProjectScreen(),
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
shrewdNS : "Project.ConfigurationData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "ProjectConfigurationData";
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
var theClass = new ProjectScreen();
theClass.setShrewd(shrewdArray[2]);
this.screen = theClass;
} else {
this.screen = null;
}
var l=shrewdArray[3].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[3][a]) {
var theClass = new ProjectTemplate();
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
var theClass = new ProjectComponent();
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
var ProjectScreenData = new Class({
/**
 * @type {string} id (ID).
 */
id : null,
/**
 * @type {ProjectTemplate}
 */
template : new ProjectTemplate(),
/**
 * @type {Array} components
 */
components : null,
/**
 * @type {string}
 */
shrewdNS : "Project.ScreenData",
/**
 * Get the name of the MooTools class.
 * 
 * @returns {string}
 */
getName : function(){
return "ProjectScreenData";
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
var theClass = new ProjectTemplate();
theClass.setShrewd(shrewdArray[1]);
this.template = theClass;
} else {
this.template = null;
}
var l=shrewdArray[2].length;
var lArray = new Array();
for (var a=0; a<l; a++) {
if (shrewdArray[2][a]) {
var theClass = new ProjectComponentData();
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
