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
 * @var boolean
 */
public $required;
/**
 * @var mixed
 */
public $value;
/**
 * @var struct
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
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->required, "required", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->value, "value", "mixed", "", true);
$paramArray[] = $shrewd->getParameter("EditableFormField", 1, $this->data, "data", "struct", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->type = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[0], "type", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->name = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[1], "name", "string", "", false);}
if (isset($shrewdArray[2])) {$this->title = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[2], "title", "string", "", false);}
if (isset($shrewdArray[3])) {$this->required = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[3], "required", "boolean", "", false);}
if (isset($shrewdArray[4])) {$this->value = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[4], "value", "mixed", "", true);}
if (isset($shrewdArray[5])) {$this->data = $shrewd->setParameter("EditableFormField", 2, $shrewdArray[5], "data", "struct", "", true);}
}
}