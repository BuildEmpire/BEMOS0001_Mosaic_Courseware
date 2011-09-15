<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentData implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
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
$paramArray[] = $shrewd->getParameter("ComponentData", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("ComponentData", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("ComponentData", 1, $this->data, "data", "list", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("ComponentData", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->name = $shrewd->setParameter("ComponentData", 2, $shrewdArray[1], "name", "string", "", false);}
if (isset($shrewdArray[2])) {$this->data = $shrewd->setParameter("ComponentData", 2, $shrewdArray[2], "data", "list", "", false);}
}
}