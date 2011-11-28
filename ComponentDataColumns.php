<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentDataColumns implements IShrewdStruct
{
/**
 * @var boolean
 */
public $allow = true;
/**
 * @var integer
 */
public $min = 0;
/**
 * @var integer
 */
public $max = 0;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentDataColumns";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentDataColumns", 1, $this->allow, "allow", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("ComponentDataColumns", 1, $this->min, "min", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentDataColumns", 1, $this->max, "max", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->allow = $shrewd->setParameter("ComponentDataColumns", 2, $shrewdArray[0], "allow", "boolean", "", false);}
if (isset($shrewdArray[1])) {$this->min = $shrewd->setParameter("ComponentDataColumns", 2, $shrewdArray[1], "min", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->max = $shrewd->setParameter("ComponentDataColumns", 2, $shrewdArray[2], "max", "integer", "", false);}
}
}