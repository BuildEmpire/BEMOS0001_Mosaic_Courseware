<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class Relationship implements IShrewdStruct
{
/**
 * @var string
 */
public $source;
/**
 * @var string
 */
public $event;
/**
 * @var string
 */
public $target;
/**
 * @var string
 */
public $action;
/**
 * @var \\native-js-All
 */
public $data;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Relationship";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->source, "source", "string", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->event, "event", "string", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->target, "target", "string", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->action, "action", "string", "", false);
$paramArray[] = ($shrewd->getParameter("Relationship", 1, $this->data, "data", "\\native-js-All", "", true)) ? $shrewd->getParameter("Relationship", 1, $this->data, "data", "\\native-js-All", "", true) : null;
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->source = $shrewd->setParameter("Relationship", 2, $shrewdArray[0], "source", "string", "", false);}
if (isset($shrewdArray[1])) {$this->event = $shrewd->setParameter("Relationship", 2, $shrewdArray[1], "event", "string", "", false);}
if (isset($shrewdArray[2])) {$this->target = $shrewd->setParameter("Relationship", 2, $shrewdArray[2], "target", "string", "", false);}
if (isset($shrewdArray[3])) {$this->action = $shrewd->setParameter("Relationship", 2, $shrewdArray[3], "action", "string", "", false);}
if ($shrewdArray[4]) {
$theClass = new \\native-js-All();
$theClass->setShrewd($shrewd, $shrewdArray[4]);
$this->data = $theClass;
}
}
}