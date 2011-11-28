<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ComponentDataGrid implements IShrewdStruct
{
/**
 * @var integer
 */
public $x = 20;
/**
 * @var integer
 */
public $y = 20;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ComponentDataGrid";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ComponentDataGrid", 1, $this->x, "x", "integer", "", false);
$paramArray[] = $shrewd->getParameter("ComponentDataGrid", 1, $this->y, "y", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->x = $shrewd->setParameter("ComponentDataGrid", 2, $shrewdArray[0], "x", "integer", "", false);}
if (isset($shrewdArray[1])) {$this->y = $shrewd->setParameter("ComponentDataGrid", 2, $shrewdArray[1], "y", "integer", "", false);}
}
}