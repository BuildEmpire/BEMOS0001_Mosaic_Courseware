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
public $canvasWidth = 800;
/**
 * @var integer
 */
public $canvasHeight = 600;
/**
 * @var integer
 */
public $canvasLeftPos = 0;
/**
 * @var integer
 */
public $canvasTopPos = 0;
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
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->canvasWidth, "canvasWidth", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->canvasHeight, "canvasHeight", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->canvasLeftPos, "canvasLeftPos", "integer", "", false);
$paramArray[] = $shrewd->getParameter("DataCanvas", 1, $this->canvasTopPos, "canvasTopPos", "integer", "", false);
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
if (isset($shrewdArray[2])) {$this->canvasWidth = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[2], "canvasWidth", "integer", "", false);}
if (isset($shrewdArray[3])) {$this->canvasHeight = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[3], "canvasHeight", "integer", "", false);}
if (isset($shrewdArray[4])) {$this->canvasLeftPos = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[4], "canvasLeftPos", "integer", "", false);}
if (isset($shrewdArray[5])) {$this->canvasTopPos = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[5], "canvasTopPos", "integer", "", false);}
if (isset($shrewdArray[6])) {$this->placeInColumns = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[6], "placeInColumns", "boolean", "", false);}
if (isset($shrewdArray[7])) {$this->restrictWidth = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[7], "restrictWidth", "boolean", "", false);}
if (isset($shrewdArray[8])) {$this->restrictHeight = $shrewd->setParameter("DataCanvas", 2, $shrewdArray[8], "restrictHeight", "boolean", "", false);}
}
}