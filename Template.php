<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Project;
use BuildEmpire\Shrewd\IShrewdStruct;
class Template implements IShrewdStruct
{
/**
 * @var string
 */
public $name;
/**
 * @var \BuildEmpire\Mosaic\Project\Column[]
 */
public $columns;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Project.Template";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Template", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("Template", 1, $this->columns, "columns", "list", "\BuildEmpire\Mosaic\Project\Column", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->name = $shrewd->setParameter("Template", 2, $shrewdArray[0], "name", "string", "", false);
$this->columns = $shrewd->setParameter("Template", 2, $shrewdArray[1], "columns", "list", "\BuildEmpire\Mosaic\Project\Column", false);
}
}