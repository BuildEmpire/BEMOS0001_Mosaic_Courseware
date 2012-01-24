<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldText implements IShrewdStruct
{
/**
 * @var integer
 */
public $rows;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldText";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldText", 1, $this->rows, "rows", "integer", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->rows = $shrewd->setParameter("EditableFormFieldText", 2, $shrewdArray[0], "rows", "integer", "", true);}
}
}