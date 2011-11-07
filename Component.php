<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class Component implements IShrewdStruct
{
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
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Component";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Component", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("Component", 1, $this->title, "title", "string", "", false);
$paramArray[] = $shrewd->getParameter("Component", 1, $this->active, "active", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->name = $shrewd->setParameter("Component", 2, $shrewdArray[0], "name", "string", "", false);}
if (isset($shrewdArray[1])) {$this->title = $shrewd->setParameter("Component", 2, $shrewdArray[1], "title", "string", "", false);}
if (isset($shrewdArray[2])) {$this->active = $shrewd->setParameter("Component", 2, $shrewdArray[2], "active", "integer", "", false);}
}
}