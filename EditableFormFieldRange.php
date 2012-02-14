<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldRange implements IShrewdStruct
{
/**
 * @var integer
 */
public $min;
/**
 * @var integer
 */
public $max;
/**
 * @var integer
 */
public $step;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldRange";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldRange", 1, $this->min, "min", "integer", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormFieldRange", 1, $this->max, "max", "integer", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormFieldRange", 1, $this->step, "step", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->min = $shrewd->setParameter("EditableFormFieldRange", 2, $shrewdArray[0], "min", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->max = $shrewd->setParameter("EditableFormFieldRange", 2, $shrewdArray[1], "max", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->step = $shrewd->setParameter("EditableFormFieldRange", 2, $shrewdArray[2], "step", "integer", "", false);}
}
}