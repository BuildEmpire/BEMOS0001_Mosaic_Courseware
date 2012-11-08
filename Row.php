<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class Row implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Column[]
 */
public $columns;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ColumnRowMetrics
 */
public $metrics;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Row";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Row", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("Row", 1, $this->columns, "columns", "list", "\BuildEmpire\Mosaic\Courseware\Column", true);
$paramArray[] = ($shrewd->getParameter("Row", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ColumnRowMetrics", "", true)) ? $shrewd->getParameter("Row", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ColumnRowMetrics", "", true) : null;
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("Row", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->columns = $shrewd->setParameter("Row", 2, $shrewdArray[1], "columns", "list", "\BuildEmpire\Mosaic\Courseware\Column", true);}
if ($shrewdArray[2]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\ColumnRowMetrics();
$theClass->setShrewd($shrewd, $shrewdArray[2]);
$this->metrics = $theClass;
}
}
}