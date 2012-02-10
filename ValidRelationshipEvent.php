<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ValidRelationshipEvent implements IShrewdStruct
{
/**
 * @var string
 */
public $context;
/**
 * @var string
 */
public $event;
/**
 * @var string
 */
public $key;
/**
 * @var string
 */
public $string;
/**
 * @var \\native-js-Object
 */
public $data;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ValidRelationshipEvent";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ValidRelationshipEvent", 1, $this->context, "context", "string", "", false);
$paramArray[] = $shrewd->getParameter("ValidRelationshipEvent", 1, $this->event, "event", "string", "", false);
$paramArray[] = $shrewd->getParameter("ValidRelationshipEvent", 1, $this->key, "key", "string", "", false);
$paramArray[] = $shrewd->getParameter("ValidRelationshipEvent", 1, $this->string, "string", "string", "", false);
$paramArray[] = ($shrewd->getParameter("ValidRelationshipEvent", 1, $this->data, "data", "\\native-js-Object", "", true)) ? $shrewd->getParameter("ValidRelationshipEvent", 1, $this->data, "data", "\\native-js-Object", "", true) : null;
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->context = $shrewd->setParameter("ValidRelationshipEvent", 2, $shrewdArray[0], "context", "string", "", false);}
if (isset($shrewdArray[1])) {$this->event = $shrewd->setParameter("ValidRelationshipEvent", 2, $shrewdArray[1], "event", "string", "", false);}
if (isset($shrewdArray[2])) {$this->key = $shrewd->setParameter("ValidRelationshipEvent", 2, $shrewdArray[2], "key", "string", "", false);}
if (isset($shrewdArray[3])) {$this->string = $shrewd->setParameter("ValidRelationshipEvent", 2, $shrewdArray[3], "string", "string", "", false);}
if ($shrewdArray[4]) {
$theClass = new \\native-js-Object();
$theClass->setShrewd($shrewd, $shrewdArray[4]);
$this->data = $theClass;
}
}
}