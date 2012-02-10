<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class RelationshipCollection implements IShrewdStruct
{
/**
 * @var \BuildEmpire\Mosaic\Courseware\ValidRelationshipEvent[]
 */
public $events;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ValidRelationshipAction[]
 */
public $actions;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.RelationshipCollection";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("RelationshipCollection", 1, $this->events, "events", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipEvent", true);
$paramArray[] = $shrewd->getParameter("RelationshipCollection", 1, $this->actions, "actions", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipAction", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->events = $shrewd->setParameter("RelationshipCollection", 2, $shrewdArray[0], "events", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipEvent", true);}
if (isset($shrewdArray[1])) {$this->actions = $shrewd->setParameter("RelationshipCollection", 2, $shrewdArray[1], "actions", "list", "\BuildEmpire\Mosaic\Courseware\ValidRelationshipAction", true);}
}
}