<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class LearningPath implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
/**
 * @var boolean
 */
public $base = false;
/**
 * @var string
 */
public $name;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.LearningPath";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("LearningPath", 1, $this->id, "id", "string-id", "", true);
$paramArray[] = $shrewd->getParameter("LearningPath", 1, $this->base, "base", "boolean", "", false);
$paramArray[] = $shrewd->getParameter("LearningPath", 1, $this->name, "name", "string", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->id = $shrewd->setParameter("LearningPath", 2, $shrewdArray[0], "id", "string-id", "", true);
$this->base = $shrewd->setParameter("LearningPath", 2, $shrewdArray[1], "base", "boolean", "", false);
$this->name = $shrewd->setParameter("LearningPath", 2, $shrewdArray[2], "name", "string", "", false);
}
}