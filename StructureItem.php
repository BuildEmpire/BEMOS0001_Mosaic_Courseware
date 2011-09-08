<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class StructureItem implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
/**
 * @var integer
 */
public $type;
/**
 * @var string
 */
public $title;
/**
 * @var integer
 */
public $available;
/**
 * @var \BuildEmpire\Mosaic\Courseware\StructureItem[]
 */
public $children;
/**
 * @var integer[]
 */
public $learningPathIds;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.StructureItem";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("StructureItem", 1, $this->id, "id", "string-id", "", true);
$paramArray[] = $shrewd->getParameter("StructureItem", 1, $this->type, "type", "integer", "", false);
$paramArray[] = $shrewd->getParameter("StructureItem", 1, $this->title, "title", "string", "", false);
$paramArray[] = $shrewd->getParameter("StructureItem", 1, $this->available, "available", "integer", "", false);
$paramArray[] = $shrewd->getParameter("StructureItem", 1, $this->children, "children", "list", "\BuildEmpire\Mosaic\Courseware\StructureItem", true);
$paramArray[] = $shrewd->getParameter("StructureItem", 1, $this->learningPathIds, "learningPathIds", "map", "integer", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->id = $shrewd->setParameter("StructureItem", 2, $shrewdArray[0], "id", "string-id", "", true);
$this->type = $shrewd->setParameter("StructureItem", 2, $shrewdArray[1], "type", "integer", "", false);
$this->title = $shrewd->setParameter("StructureItem", 2, $shrewdArray[2], "title", "string", "", false);
$this->available = $shrewd->setParameter("StructureItem", 2, $shrewdArray[3], "available", "integer", "", false);
$this->children = $shrewd->setParameter("StructureItem", 2, $shrewdArray[4], "children", "list", "\BuildEmpire\Mosaic\Courseware\StructureItem", true);
$this->learningPathIds = $shrewd->setParameter("StructureItem", 2, $shrewdArray[5], "learningPathIds", "map", "integer", true);
}
}