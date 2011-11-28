<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentMetrics implements IShrewdStruct
{
/**
 * @var integer
 */
public $xPercent;
/**
 * @var integer
 */
public $yPercent;
/**
 * @var integer
 */
public $widthPercent;
/**
 * @var integer
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
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->xPercent, "xPercent", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->yPercent, "yPercent", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->widthPercent, "widthPercent", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->heightPercent, "heightPercent", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->tabIndex, "tabIndex", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentMetrics", 1, $this->zIndex, "zIndex", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->xPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[0], "xPercent", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->yPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[1], "yPercent", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->widthPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[2], "widthPercent", "integer", "", false);}
if (isset($shrewdArray[3])) {$this->heightPercent = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[3], "heightPercent", "integer", "", false);}
if (isset($shrewdArray[4])) {$this->tabIndex = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[4], "tabIndex", "integer", "", false);}
if (isset($shrewdArray[5])) {$this->zIndex = $shrewd->setParameter("ComponentMetrics", 2, $shrewdArray[5], "zIndex", "integer", "", false);}
}
}