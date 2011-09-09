<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentData implements IShrewdStruct
{
/**
 * @var string
 */
public $name;
/**
 * @var []
 */
public $data;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentData", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("ComponentData", 1, $this->data, "data", "list", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->name = $shrewd->setParameter("ComponentData", 2, $shrewdArray[0], "name", "string", "", false);}
if (isset($shrewdArray[1])) {$this->data = $shrewd->setParameter("ComponentData", 2, $shrewdArray[1], "data", "list", "", false);}
}
}