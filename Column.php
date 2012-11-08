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
 * @var \BuildEmpire\Mosaic\Courseware\ComponentInstance[]
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
$paramArray[] = $shrewd->getParameter("Column", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Courseware\ComponentInstance", true);
$paramArray[] = ($shrewd->getParameter("Column", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ColumnRowMetrics", "", true)) ? $shrewd->getParameter("Column", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ColumnRowMetrics", "", true) : null;
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("Column", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->components = $shrewd->setParameter("Column", 2, $shrewdArray[1], "components", "list", "\BuildEmpire\Mosaic\Courseware\ComponentInstance", true);}
if ($shrewdArray[2]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\ColumnRowMetrics();
$theClass->setShrewd($shrewd, $shrewdArray[2]);
$this->metrics = $theClass;
}
}
}