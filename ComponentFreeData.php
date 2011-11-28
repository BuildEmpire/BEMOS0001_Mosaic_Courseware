<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentFreeData implements IShrewdStruct
{
/**
 * @var integer
 */
public $xPercent;
/**
 * @var integer
 */
public $yPercent;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentFreeData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentFreeData", 1, $this->xPercent, "xPercent", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentFreeData", 1, $this->yPercent, "yPercent", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->xPercent = $shrewd->setParameter("ComponentFreeData", 2, $shrewdArray[0], "xPercent", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->yPercent = $shrewd->setParameter("ComponentFreeData", 2, $shrewdArray[1], "yPercent", "integer", "", false);}
}
}