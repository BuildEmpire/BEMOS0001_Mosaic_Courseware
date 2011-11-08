<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class Column implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
/**
 * @var integer
 */
public $x;
/**
 * @var integer
 */
public $y;
/**
 * @var integer
 */
public $width;
/**
 * @var integer
 */
public $height;
/**
 * @var boolean
 */
public $display = true;
/**
 * @var boolean
 */
public $structure = true;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Component[]
 */
public $components;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Column";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Column", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->x, "x", "integer", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->y, "y", "integer", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->width, "width", "integer", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->height, "height", "integer", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->display, "display", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->structure, "structure", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("Column", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->x = $shrewd->setParameter("Column", 2, $shrewdArray[1], "x", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->y = $shrewd->setParameter("Column", 2, $shrewdArray[2], "y", "integer", "", false);}
if (isset($shrewdArray[3])) {$this->width = $shrewd->setParameter("Column", 2, $shrewdArray[3], "width", "integer", "", false);}
if (isset($shrewdArray[4])) {$this->height = $shrewd->setParameter("Column", 2, $shrewdArray[4], "height", "integer", "", false);}
if (isset($shrewdArray[5])) {$this->display = $shrewd->setParameter("Column", 2, $shrewdArray[5], "display", "boolean", "", false);}
if (isset($shrewdArray[6])) {$this->structure = $shrewd->setParameter("Column", 2, $shrewdArray[6], "structure", "boolean", "", false);}
if (isset($shrewdArray[7])) {$this->components = $shrewd->setParameter("Column", 2, $shrewdArray[7], "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);}
}
}