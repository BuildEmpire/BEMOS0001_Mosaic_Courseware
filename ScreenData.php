<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ScreenData implements IShrewdStruct
{
/**
 * @var \BuildEmpire\Mosaic\Courseware\Template
 */
public $template;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Row[]
 */
public $rows;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ScreenData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = ($shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Courseware\Template", "", true)) ? $shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Courseware\Template", "", true) : null;
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->rows, "rows", "list", "\BuildEmpire\Mosaic\Courseware\Row", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if ($shrewdArray[0]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\Template();
$theClass->setShrewd($shrewd, $shrewdArray[0]);
$this->template = $theClass;
}
if (isset($shrewdArray[1])) {$this->rows = $shrewd->setParameter("ScreenData", 2, $shrewdArray[1], "rows", "list", "\BuildEmpire\Mosaic\Courseware\Row", true);}
}
}