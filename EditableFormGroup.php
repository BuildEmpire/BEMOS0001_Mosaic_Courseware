<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormGroup implements IShrewdStruct
{
/**
 * @var string
 */
public $name;
/**
 * @var \BuildEmpire\Mosaic\Courseware\EditableFormField[]
 */
public $fields;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormGroup";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormGroup", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormGroup", 1, $this->fields, "fields", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormField", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->name = $shrewd->setParameter("EditableFormGroup", 2, $shrewdArray[0], "name", "string", "", false);}
if (isset($shrewdArray[1])) {$this->fields = $shrewd->setParameter("EditableFormGroup", 2, $shrewdArray[1], "fields", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormField", false);}
}
}