<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class Template implements IShrewdStruct
{
/**
 * @var string
 */
public $name;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Column[]
 */
public $columns;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.Template";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Template", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("Template", 1, $this->columns, "columns", "list", "\BuildEmpire\Mosaic\Courseware\Column", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->name = $shrewd->setParameter("Template", 2, $shrewdArray[0], "name", "string", "", false);}
if (isset($shrewdArray[1])) {$this->columns = $shrewd->setParameter("Template", 2, $shrewdArray[1], "columns", "list", "\BuildEmpire\Mosaic\Courseware\Column", false);}
}
}