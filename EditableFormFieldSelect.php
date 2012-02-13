<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldSelect implements IShrewdStruct
{
/**
 * @var string[]
 */
public $options;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldSelect";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldSelect", 1, $this->options, "options", "map", "string", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->options = $shrewd->setParameter("EditableFormFieldSelect", 2, $shrewdArray[0], "options", "map", "string", false);}
}
}