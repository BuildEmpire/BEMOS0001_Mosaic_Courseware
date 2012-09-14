<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ControllerButton implements IShrewdStruct
{
/**
 * @var string
 */
public $id;
/**
 * @var string
 */
public $title;
/**
 * @var boolean
 */
public $selected;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ControllerButton";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ControllerButton", 1, $this->id, "id", "string", "", false);
$paramArray[] = $shrewd->getParameter("ControllerButton", 1, $this->title, "title", "string", "", false);
$paramArray[] = $shrewd->getParameter("ControllerButton", 1, $this->selected, "selected", "boolean", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("ControllerButton", 2, $shrewdArray[0], "id", "string", "", false);}
if (isset($shrewdArray[1])) {$this->title = $shrewd->setParameter("ControllerButton", 2, $shrewdArray[1], "title", "string", "", false);}
if (isset($shrewdArray[2])) {$this->selected = $shrewd->setParameter("ControllerButton", 2, $shrewdArray[2], "selected", "boolean", "", false);}
}
}