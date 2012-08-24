<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentDisplayPrefs implements IShrewdStruct
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
 * @var string
 */
public $appliedClass;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentDisplayPrefs";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentDisplayPrefs", 1, $this->alignment, "alignment", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayPrefs", 1, $this->marginTop, "marginTop", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayPrefs", 1, $this->marginBottom, "marginBottom", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayPrefs", 1, $this->marginLeft, "marginLeft", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayPrefs", 1, $this->marginRight, "marginRight", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentDisplayPrefs", 1, $this->appliedClass, "appliedClass", "string", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->alignment = $shrewd->setParameter("ComponentDisplayPrefs", 2, $shrewdArray[0], "alignment", "integer", "", true);}
if (isset($shrewdArray[1])) {$this->marginTop = $shrewd->setParameter("ComponentDisplayPrefs", 2, $shrewdArray[1], "marginTop", "integer", "", true);}
if (isset($shrewdArray[2])) {$this->marginBottom = $shrewd->setParameter("ComponentDisplayPrefs", 2, $shrewdArray[2], "marginBottom", "integer", "", true);}
if (isset($shrewdArray[3])) {$this->marginLeft = $shrewd->setParameter("ComponentDisplayPrefs", 2, $shrewdArray[3], "marginLeft", "integer", "", true);}
if (isset($shrewdArray[4])) {$this->marginRight = $shrewd->setParameter("ComponentDisplayPrefs", 2, $shrewdArray[4], "marginRight", "integer", "", true);}
if (isset($shrewdArray[5])) {$this->appliedClass = $shrewd->setParameter("ComponentDisplayPrefs", 2, $shrewdArray[5], "appliedClass", "string", "", true);}
}
}