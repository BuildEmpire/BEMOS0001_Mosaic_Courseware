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
public $alias;
/**
 * @var string
 */
public $name;
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
/**
 * @var mixed
 */
public $autoAdjacent;
/**
 * @var []
 */
public $settings;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ComponentDisplayProps
 */
public $displayProperties;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentInstance";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->alias, "alias", "string", "", false);
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->data, "data", "map", "", true);
$paramArray[] = ($shrewd->getParameter("ComponentInstance", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ComponentMetrics", "", true)) ? $shrewd->getParameter("ComponentInstance", 1, $this->metrics, "metrics", "\BuildEmpire\Mosaic\Courseware\ComponentMetrics", "", true) : null;
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->scale, "scale", "integer", "", true);
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->autoAdjacent, "autoAdjacent", "mixed", "", true);
$paramArray[] = $shrewd->getParameter("ComponentInstance", 1, $this->settings, "settings", "map", "", true);
$paramArray[] = ($shrewd->getParameter("ComponentInstance", 1, $this->displayProperties, "displayProperties", "\BuildEmpire\Mosaic\Courseware\ComponentDisplayProps", "", true)) ? $shrewd->getParameter("ComponentInstance", 1, $this->displayProperties, "displayProperties", "\BuildEmpire\Mosaic\Courseware\ComponentDisplayProps", "", true) : null;
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->alias = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[1], "alias", "string", "", false);}
if (isset($shrewdArray[2])) {$this->name = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[2], "name", "string", "", false);}
if (isset($shrewdArray[3])) {$this->data = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[3], "data", "map", "", true);}
if (isset($shrewdArray[4]) && $shrewdArray[4]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\ComponentMetrics();
$theClass->setShrewd($shrewd, $shrewdArray[4]);
$this->metrics = $theClass;
}
if (isset($shrewdArray[5])) {$this->scale = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[5], "scale", "integer", "", true);}
if (isset($shrewdArray[6])) {$this->autoAdjacent = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[6], "autoAdjacent", "mixed", "", true);}
if (isset($shrewdArray[7])) {$this->settings = $shrewd->setParameter("ComponentInstance", 2, $shrewdArray[7], "settings", "map", "", true);}
if (isset($shrewdArray[8]) && $shrewdArray[8]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\ComponentDisplayProps();
$theClass->setShrewd($shrewd, $shrewdArray[8]);
$this->displayProperties = $theClass;
}
}
}