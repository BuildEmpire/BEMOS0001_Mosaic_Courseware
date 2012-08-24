<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentDisplayProps implements IShrewdStruct
{
/**
 * @var integer
 */
public $alignment;
/**
 * @var integer
 */
public $marginTop;
/**
 * @var integer
 */
public $marginBottom;
/**
 * @var integer
 */
public $marginLeft;
/**
 * @var integer
 */
public $marginRight;
/**
 * @var integer
 */
public $initialVisual;
/**
 * @var string
 */
public $appliedClass;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentDisplayProps";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentDisplayProps", 1, $this->alignment, "alignment", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayProps", 1, $this->marginTop, "marginTop", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayProps", 1, $this->marginBottom, "marginBottom", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayProps", 1, $this->marginLeft, "marginLeft", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayProps", 1, $this->marginRight, "marginRight", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayProps", 1, $this->initialVisual, "initialVisual", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayProps", 1, $this->appliedClass, "appliedClass", "string", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->alignment = $shrewd->setParameter("ComponentDisplayProps", 2, $shrewdArray[0], "alignment", "integer", "", true);}
if (isset($shrewdArray[1])) {$this->marginTop = $shrewd->setParameter("ComponentDisplayProps", 2, $shrewdArray[1], "marginTop", "integer", "", true);}
if (isset($shrewdArray[2])) {$this->marginBottom = $shrewd->setParameter("ComponentDisplayProps", 2, $shrewdArray[2], "marginBottom", "integer", "", true);}
if (isset($shrewdArray[3])) {$this->marginLeft = $shrewd->setParameter("ComponentDisplayProps", 2, $shrewdArray[3], "marginLeft", "integer", "", true);}
if (isset($shrewdArray[4])) {$this->marginRight = $shrewd->setParameter("ComponentDisplayProps", 2, $shrewdArray[4], "marginRight", "integer", "", true);}
if (isset($shrewdArray[5])) {$this->initialVisual = $shrewd->setParameter("ComponentDisplayProps", 2, $shrewdArray[5], "initialVisual", "integer", "", true);}
if (isset($shrewdArray[6])) {$this->appliedClass = $shrewd->setParameter("ComponentDisplayProps", 2, $shrewdArray[6], "appliedClass", "string", "", true);}
}
}