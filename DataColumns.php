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
 * @var boolean
 */
public $resizable = true;
/**
 * @var integer
 */
public $initial = 1;
/**
 * @var integer
 */
public $min = 0;
/**
 * @var integer
 */
public $max = 10;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.DataColumns";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->allow, "allow", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->resizable, "resizable", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->initial, "initial", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->min, "min", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataColumns", 1, $this->max, "max", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->allow = $shrewd->setParameter("DataColumns", 2, $shrewdArray[0], "allow", "boolean", "", false);}
if (isset($shrewdArray[1])) {$this->resizable = $shrewd->setParameter("DataColumns", 2, $shrewdArray[1], "resizable", "boolean", "", false);}
if (isset($shrewdArray[2])) {$this->initial = $shrewd->setParameter("DataColumns", 2, $shrewdArray[2], "initial", "integer", "", false);}
if (isset($shrewdArray[3])) {$this->min = $shrewd->setParameter("DataColumns", 2, $shrewdArray[3], "min", "integer", "", false);}
if (isset($shrewdArray[4])) {$this->max = $shrewd->setParameter("DataColumns", 2, $shrewdArray[4], "max", "integer", "", false);}
}
}