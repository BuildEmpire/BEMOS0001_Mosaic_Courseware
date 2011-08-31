<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class Translation implements IShrewdStruct
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
 * @var string
 */
public $value;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Translation";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Translation", 1, $this->id, "id", "string-id", "", true);
$paramArray[] = $shrewd->getParameter("Translation", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("Translation", 1, $this->value, "value", "string", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->id = $shrewd->setParameter("Translation", 2, $shrewdArray[0], "id", "string-id", "", true);
$this->name = $shrewd->setParameter("Translation", 2, $shrewdArray[1], "name", "string", "", false);
$this->value = $shrewd->setParameter("Translation", 2, $shrewdArray[2], "value", "string", "", false);
}
}