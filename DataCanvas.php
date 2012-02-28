<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class DataCanvas implements IShrewdStruct
{
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
/**
 * @var integer
 */
public $width;
/**
 * @var integer
 */
public $height;
/**
 * @var integer
 */
public $leftPos;
/**
 * @var integer
 */
public $topPos;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.DataCanvas";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->placeInColumns, "placeInColumns", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->restrictWidth, "restrictWidth", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->restrictHeight, "restrictHeight", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->width, "width", "integer", "", true);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->height, "height", "integer", "", true);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->leftPos, "leftPos", "integer", "", true);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->topPos, "topPos", "integer", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->placeInColumns = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[0], "placeInColumns", "boolean", "", false);}
if (isset($shrewdArray[1])) {$this->restrictWidth = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[1], "restrictWidth", "boolean", "", false);}
if (isset($shrewdArray[2])) {$this->restrictHeight = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[2], "restrictHeight", "boolean", "", false);}
if (isset($shrewdArray[3])) {$this->width = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[3], "width", "integer", "", true);}
if (isset($shrewdArray[4])) {$this->height = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[4], "height", "integer", "", true);}
if (isset($shrewdArray[5])) {$this->leftPos = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[5], "leftPos", "integer", "", true);}
if (isset($shrewdArray[6])) {$this->topPos = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[6], "topPos", "integer", "", true);}
}
}