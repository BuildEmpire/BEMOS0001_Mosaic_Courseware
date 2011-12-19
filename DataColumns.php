<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class DataColumns implements IShrewdStruct
{
/**
 * @var boolean
 */
public $allow = true;
/**
 * @var integer
 */
public $default = 1;
/**
 * @var integer
 */
public $min = 0;
/**
 * @var integer
 */
public $max = 0;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.DataColumns";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->allow, "allow", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->default, "default", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->min, "min", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->max, "max", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->allow = $shrewd->setParameter("DataColumns", 2, $shrewdArray[0], "allow", "boolean", "", false);}
if (isset($shrewdArray[1])) {$this->default = $shrewd->setParameter("DataColumns", 2, $shrewdArray[1], "default", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->min = $shrewd->setParameter("DataColumns", 2, $shrewdArray[2], "min", "integer", "", false);}
if (isset($shrewdArray[3])) {$this->max = $shrewd->setParameter("DataColumns", 2, $shrewdArray[3], "max", "integer", "", false);}
}
}