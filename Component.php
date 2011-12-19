<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class Component implements IShrewdStruct
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
 * @var string
 */
public $title;
/**
 * @var integer
 */
public $active = 1;
/**
 * @var []
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
return "BuildEmpire.Mosaic.Courseware.Component";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Component", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("Component", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("Component", 1, $this->title, "title", "string", "", false);
$paramArray[] = $shrewd->getParameter("Component", 1, $this->active, "active", "integer", "", false);
$paramArray[] = $shrewd->getParameter("Component", 1, $this->data, "data", "list", "", false);
$paramArray[] = ($shrewd->getParameter("Component", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ComponentMetrics", "", true)) ? $shrewd->getParameter("Component", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ComponentMetrics", "", true) : null;
$paramArray[] = $shrewd->getParameter("Component", 1, $this->scale, "scale", "integer", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("Component", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->name = $shrewd->setParameter("Component", 2, $shrewdArray[1], "name", "string", "", false);}
if (isset($shrewdArray[2])) {$this->title = $shrewd->setParameter("Component", 2, $shrewdArray[2], "title", "string", "", false);}
if (isset($shrewdArray[3])) {$this->active = $shrewd->setParameter("Component", 2, $shrewdArray[3], "active", "integer", "", false);}
if (isset($shrewdArray[4])) {$this->data = $shrewd->setParameter("Component", 2, $shrewdArray[4], "data", "list", "", false);}
if ($shrewdArray[5]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\ComponentMetrics();
$theClass->setShrewd($shrewd, $shrewdArray[5]);
$this->metrics = $theClass;
}
if (isset($shrewdArray[6])) {$this->scale = $shrewd->setParameter("Component", 2, $shrewdArray[6], "scale", "integer", "", true);}
}
}