<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldRadio implements IShrewdStruct
{
/**
 * @var map[]
 */
public $values;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldRadio";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldRadio", 1, $this->values, "values", "list", "map", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->values = $shrewd->setParameter("EditableFormFieldRadio", 2, $shrewdArray[0], "values", "list", "map", false);}
}
}