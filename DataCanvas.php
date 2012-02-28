<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class DataCanvas implements IShrewdStruct
{
/**
 * @var integer
 */
public $width = 800;
/**
 * @var integer
 */
public $height = 600;
/**
 * @var integer
 */
public $leftPos = 0;
/**
 * @var integer
 */
public $topPos = 0;
/**
 * @var boolean
 */
public $placeInColumns = true;
/**
 * @var boolean
 */
public $restrictWidth = true;
/**
 * @var boolean
 */
public $restrictHeight = false;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.DataCanvas";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->width, "width", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->height, "height", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->leftPos, "leftPos", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->topPos, "topPos", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->placeInColumns, "placeInColumns", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->restrictWidth, "restrictWidth", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->restrictHeight, "restrictHeight", "boolean", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->width = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[0], "width", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->height = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[1], "height", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->leftPos = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[2], "leftPos", "integer", "", false);}
if (isset($shrewdArray[3])) {$this->topPos = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[3], "topPos", "integer", "", false);}
if (isset($shrewdArray[4])) {$this->placeInColumns = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[4], "placeInColumns", "boolean", "", false);}
if (isset($shrewdArray[5])) {$this->restrictWidth = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[5], "restrictWidth", "boolean", "", false);}
if (isset($shrewdArray[6])) {$this->restrictHeight = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[6], "restrictHeight", "boolean", "", false);}
}
}