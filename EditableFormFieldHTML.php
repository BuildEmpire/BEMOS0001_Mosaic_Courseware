<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldHTML implements IShrewdStruct
{
/**
 * @var string
 */
public $name;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldHTML";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldHTML", 1, $this->name, "name", "string", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->name = $shrewd->setParameter("EditableFormFieldHTML", 2, $shrewdArray[0], "name", "string", "", false);}
}
}