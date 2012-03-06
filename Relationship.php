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
public $id;
/**
 * @var mixed
 */
public $source;
/**
 * @var mixed
 */
public $event;
/**
 * @var mixed
 */
public $target;
/**
 * @var mixed
 */
public $action;
/**
 * @var mixed
 */
public $data;
/**
 * @var integer
 */
public $direction;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Relationship";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->id, "id", "string", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->source, "source", "mixed", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->event, "event", "mixed", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->target, "target", "mixed", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->action, "action", "mixed", "", false);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->data, "data", "mixed", "", true);
$paramArray[] = $shrewd->getParameter("Relationship", 1, $this->direction, "direction", "integer", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("Relationship", 2, $shrewdArray[0], "id", "string", "", false);}
if (isset($shrewdArray[1])) {$this->source = $shrewd->setParameter("Relationship", 2, $shrewdArray[1], "source", "mixed", "", false);}
if (isset($shrewdArray[2])) {$this->event = $shrewd->setParameter("Relationship", 2, $shrewdArray[2], "event", "mixed", "", false);}
if (isset($shrewdArray[3])) {$this->target = $shrewd->setParameter("Relationship", 2, $shrewdArray[3], "target", "mixed", "", false);}
if (isset($shrewdArray[4])) {$this->action = $shrewd->setParameter("Relationship", 2, $shrewdArray[4], "action", "mixed", "", false);}
if (isset($shrewdArray[5])) {$this->data = $shrewd->setParameter("Relationship", 2, $shrewdArray[5], "data", "mixed", "", true);}
if (isset($shrewdArray[6])) {$this->direction = $shrewd->setParameter("Relationship", 2, $shrewdArray[6], "direction", "integer", "", true);}
}
}