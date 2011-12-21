<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ScreenData implements IShrewdStruct
{
/**
 * @var \BuildEmpire\Mosaic\Courseware\Row[]
 */
public $rows;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ComponentInstance[]
 */
public $freeComponents;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ScreenData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->rows, "rows", "list", "\BuildEmpire\Mosaic\Courseware\Row", true);
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->freeComponents, "freeComponents", "list", "\BuildEmpire\Mosaic\Courseware\ComponentInstance", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->rows = $shrewd->setParameter("ScreenData", 2, $shrewdArray[0], "rows", "list", "\BuildEmpire\Mosaic\Courseware\Row", true);}
if (isset($shrewdArray[1])) {$this->freeComponents = $shrewd->setParameter("ScreenData", 2, $shrewdArray[1], "freeComponents", "list", "\BuildEmpire\Mosaic\Courseware\ComponentInstance", true);}
}
}