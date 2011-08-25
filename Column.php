<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Project;
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
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Project.Column";
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
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->id = $shrewd->setParameter("Column", 2, $shrewdArray[0], "id", "string-id", "", false);
$this->x = $shrewd->setParameter("Column", 2, $shrewdArray[1], "x", "integer", "", false);
$this->y = $shrewd->setParameter("Column", 2, $shrewdArray[2], "y", "integer", "", false);
$this->width = $shrewd->setParameter("Column", 2, $shrewdArray[3], "width", "integer", "", false);
$this->height = $shrewd->setParameter("Column", 2, $shrewdArray[4], "height", "integer", "", false);
$this->display = $shrewd->setParameter("Column", 2, $shrewdArray[5], "display", "boolean", "", false);
$this->structure = $shrewd->setParameter("Column", 2, $shrewdArray[6], "structure", "boolean", "", false);
}
}