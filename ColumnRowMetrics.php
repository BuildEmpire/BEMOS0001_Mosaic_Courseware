<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ColumnRowMetrics implements IShrewdStruct
{
/**
 * @var float
 */
public $widthPercent;
/**
 * @var float
 */
public $heightPercent;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ColumnRowMetrics";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ColumnRowMetrics", 1, $this->widthPercent, "widthPercent", "float", "", true);
$paramArray[] = $shrewd->getParameter("ColumnRowMetrics", 1, $this->heightPercent, "heightPercent", "float", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->widthPercent = $shrewd->setParameter("ColumnRowMetrics", 2, $shrewdArray[0], "widthPercent", "float", "", true);}
if (isset($shrewdArray[1])) {$this->heightPercent = $shrewd->setParameter("ColumnRowMetrics", 2, $shrewdArray[1], "heightPercent", "float", "", true);}
}
}