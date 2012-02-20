<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class RelationshipComponentContainer implements IShrewdStruct
{
/**
 * @var string
 */
public $name;
/**
 * @var string
 */
public $selector;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ValidRelationshipAction[]
 */
public $actions;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ValidRelationshipEvent[]
 */
public $events;
/**
 * @var \BuildEmpire\Mosaic\Courseware\RelationshipCollection[]
 */
public $items;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.RelationshipComponentContainer";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("RelationshipComponentContainer", 1, $this->name, "name", "string", "", true);
$paramArray[] = $shrewd->getParameter("RelationshipComponentContainer", 1, $this->selector, "selector", "string", "", true);
$paramArray[] = $shrewd->getParameter("RelationshipComponentContainer", 1, $this->actions, "actions", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipAction", true);
$paramArray[] = $shrewd->getParameter("RelationshipComponentContainer", 1, $this->events, "events", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipEvent", true);
$paramArray[] = $shrewd->getParameter("RelationshipComponentContainer", 1, $this->items, "items", "list", "\BuildEmpire\Mosaic\Courseware\RelationshipCollection", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->name = $shrewd->setParameter("RelationshipComponentContainer", 2, $shrewdArray[0], "name", "string", "", true);}
if (isset($shrewdArray[1])) {$this->selector = $shrewd->setParameter("RelationshipComponentContainer", 2, $shrewdArray[1], "selector", "string", "", true);}
if (isset($shrewdArray[2])) {$this->actions = $shrewd->setParameter("RelationshipComponentContainer", 2, $shrewdArray[2], "actions", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipAction", true);}
if (isset($shrewdArray[3])) {$this->events = $shrewd->setParameter("RelationshipComponentContainer", 2, $shrewdArray[3], "events", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipEvent", true);}
if (isset($shrewdArray[4])) {$this->items = $shrewd->setParameter("RelationshipComponentContainer", 2, $shrewdArray[4], "items", "list", "\BuildEmpire\Mosaic\Courseware\RelationshipCollection", true);}
}
}