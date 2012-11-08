<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class RelationshipContainer implements IShrewdStruct
{
/**
 * @var \BuildEmpire\Mosaic\Courseware\RelationshipCollection
 */
public $engine;
/**
 * @var \BuildEmpire\Mosaic\Courseware\RelationshipComponentContainer[]
 */
public $components;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.RelationshipContainer";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = ($shrewd->getParameter("RelationshipContainer", 1, $this->engine, "engine", "\BuildEmpire\Mosaic\Courseware\RelationshipCollection", "", true)) ? $shrewd->getParameter("RelationshipContainer", 1, $this->engine, "engine", "\BuildEmpire\Mosaic\Courseware\RelationshipCollection", "", true) : null;
$paramArray[] = $shrewd->getParameter("RelationshipContainer", 1, $this->components, "components", "map", "\BuildEmpire\Mosaic\Courseware\RelationshipComponentContainer", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0]) && $shrewdArray[0]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\RelationshipCollection();
$theClass->setShrewd($shrewd, $shrewdArray[0]);
$this->engine = $theClass;
}
if (isset($shrewdArray[1])) {$this->components = $shrewd->setParameter("RelationshipContainer", 2, $shrewdArray[1], "components", "map", "\BuildEmpire\Mosaic\Courseware\RelationshipComponentContainer", true);}
}
}