<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentMetrics implements IShrewdStruct
{
/**
 * @var float
 */
public $xPercent;
/**
 * @var float
 */
public $yPercent;
/**
 * @var float
 */
public $widthPercent;
/**
 * @var float
 */
public $heightPercent;
/**
 * @var integer
 */
public $tabIndex;
/**
 * @var integer
 */
public $zIndex;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentMetrics";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->xPercent, "xPercent", "float", "", true);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->yPercent, "yPercent", "float", "", true);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->widthPercent, "widthPercent", "float", "", true);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->heightPercent, "heightPercent", "float", "", true);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->tabIndex, "tabIndex", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->zIndex, "zIndex", "integer", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->xPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[0], "xPercent", "float", "", true);}
if (isset($shrewdArray[1])) {$this->yPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[1], "yPercent", "float", "", true);}
if (isset($shrewdArray[2])) {$this->widthPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[2], "widthPercent", "float", "", true);}
if (isset($shrewdArray[3])) {$this->heightPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[3], "heightPercent", "float", "", true);}
if (isset($shrewdArray[4])) {$this->tabIndex = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[4], "tabIndex", "integer", "", true);}
if (isset($shrewdArray[5])) {$this->zIndex = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[5], "zIndex", "integer", "", true);}
}
}