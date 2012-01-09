<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentInstance implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
/**
 * @var string
 */
public $name;
/**
 * @var string[]
 */
public $data;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ComponentMetrics
 */
public $metrics;
/**
 * @var integer
 */
public $scale;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentInstance";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->data, "data", "map", "string", false);
$paramArray[] = ($shrewd->getParameter("ComponentInstance", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ComponentMetrics", "", true)) ? $shrewd->getParameter("ComponentInstance", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ComponentMetrics", "", true) : null;
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->scale, "scale", "integer", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->name = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[1], "name", "string", "", false);}
if (isset($shrewdArray[2])) {$this->data = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[2], "data", "map", "string", false);}
if ($shrewdArray[3]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\ComponentMetrics();
$theClass->setShrewd($shrewd, $shrewdArray[3]);
$this->metrics = $theClass;
}
if (isset($shrewdArray[4])) {$this->scale = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[4], "scale", "integer", "", true);}
}
}