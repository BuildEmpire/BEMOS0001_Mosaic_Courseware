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
 * @var integer
 */
public $event;
/**
 * @var string
 */
public $target;
/**
 * @var integer
 */
public $action;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Relationship";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->source, "source", "string", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->event, "event", "integer", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->target, "target", "string", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->action, "action", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->source = $shrewd->setParameter("Relationship", 2, $shrewdArray[0], "source", "string", "", false);}
if (isset($shrewdArray[1])) {$this->event = $shrewd->setParameter("Relationship", 2, $shrewdArray[1], "event", "integer", "", false);}
if (isset($shrewdArray[2])) {$this->target = $shrewd->setParameter("Relationship", 2, $shrewdArray[2], "target", "string", "", false);}
if (isset($shrewdArray[3])) {$this->action = $shrewd->setParameter("Relationship", 2, $shrewdArray[3], "action", "integer", "", false);}
}
}