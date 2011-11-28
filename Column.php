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
/**
 * @var \BuildEmpire\Mosaic\Courseware\ColumnRowMetrics
 */
public $metrics;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Column";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Column", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->display, "display", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->structure, "structure", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("Column", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);
$paramArray[] = ($shrewd->getParameter("Column", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ColumnRowMetrics", "", false)) ? $shrewd->getParameter("Column", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ColumnRowMetrics", "", false) : null;
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("Column", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->display = $shrewd->setParameter("Column", 2, $shrewdArray[1], "display", "boolean", "", false);}
if (isset($shrewdArray[2])) {$this->structure = $shrewd->setParameter("Column", 2, $shrewdArray[2], "structure", "boolean", "", false);}
if (isset($shrewdArray[3])) {$this->components = $shrewd->setParameter("Column", 2, $shrewdArray[3], "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);}
if ($shrewdArray[4]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\ColumnRowMetrics();
$theClass->setShrewd($shrewd, $shrewdArray[4]);
$this->metrics = $theClass;
}
}
}