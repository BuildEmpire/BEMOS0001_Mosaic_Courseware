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
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->xPercent, "xPercent", "float", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->yPercent, "yPercent", "float", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->widthPercent, "widthPercent", "float", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->heightPercent, "heightPercent", "float", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->tabIndex, "tabIndex", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->zIndex, "zIndex", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->xPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[0], "xPercent", "float", "", false);}
if (isset($shrewdArray[1])) {$this->yPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[1], "yPercent", "float", "", false);}
if (isset($shrewdArray[2])) {$this->widthPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[2], "widthPercent", "float", "", false);}
if (isset($shrewdArray[3])) {$this->heightPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[3], "heightPercent", "float", "", false);}
if (isset($shrewdArray[4])) {$this->tabIndex = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[4], "tabIndex", "integer", "", false);}
if (isset($shrewdArray[5])) {$this->zIndex = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[5], "zIndex", "integer", "", false);}
}
}