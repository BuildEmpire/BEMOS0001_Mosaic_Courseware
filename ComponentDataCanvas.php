<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentDataCanvas implements IShrewdStruct
{
/**
 * @var integer
 */
public $width = 0;
/**
 * @var integer
 */
public $height = 0;
/**
 * @var integer
 */
public $sensitiveBoundarySize = 50;
/**
 * @var integer
 */
public $resizeHandleSize = 8;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentDataCanvas";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentDataCanvas", 1, $this->width, "width", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentDataCanvas", 1, $this->height, "height", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentDataCanvas", 1, $this->sensitiveBoundarySize, "sensitiveBoundarySize", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentDataCanvas", 1, $this->resizeHandleSize, "resizeHandleSize", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->width = $shrewd->setParameter("ComponentDataCanvas", 2, $shrewdArray[0], "width", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->height = $shrewd->setParameter("ComponentDataCanvas", 2, $shrewdArray[1], "height", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->sensitiveBoundarySize = $shrewd->setParameter("ComponentDataCanvas", 2, $shrewdArray[2], "sensitiveBoundarySize", "integer", "", false);}
if (isset($shrewdArray[3])) {$this->resizeHandleSize = $shrewd->setParameter("ComponentDataCanvas", 2, $shrewdArray[3], "resizeHandleSize", "integer", "", false);}
}
}