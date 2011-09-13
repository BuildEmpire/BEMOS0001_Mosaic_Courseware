<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormField implements IShrewdStruct
{
/**
 * @var integer
 */
public $type;
/**
 * @var string
 */
public $name;
/**
 * @var string
 */
public $title;
/**
 * @var string
 */
public $value;
/**
 * @var boolean
 */
public $required;
/**
 * @var \\native-js-Object
 */
public $data;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormField";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->type, "type", "integer", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->title, "title", "string", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->value, "value", "string", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->required, "required", "boolean", "", false);
$paramArray[] = ($shrewd->getParameter("EditableFormField", 1, $this->data, "data", "\\native-js-Object", "", false)) ? $shrewd->getParameter("EditableFormField", 1, $this->data, "data", "\\native-js-Object", "", false) : null;
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->type = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[0], "type", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->name = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[1], "name", "string", "", false);}
if (isset($shrewdArray[2])) {$this->title = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[2], "title", "string", "", false);}
if (isset($shrewdArray[3])) {$this->value = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[3], "value", "string", "", false);}
if (isset($shrewdArray[4])) {$this->required = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[4], "required", "boolean", "", false);}
if ($shrewdArray[5]) {
$theClass = new \\native-js-Object();
$theClass->setShrewd($shrewd, $shrewdArray[5]);
$this->data = $theClass;
}
}
}