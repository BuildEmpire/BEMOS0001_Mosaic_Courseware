<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ScreenData implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Template
 */
public $template;
/**
 * @var \BuildEmpire\Mosaic\Courseware\ComponentData[]
 */
public $components;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ScreenData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = ($shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Courseware\Template", "", false)) ? $shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Courseware\Template", "", false) : null;
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Courseware\ComponentData", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->id = $shrewd->setParameter("ScreenData", 2, $shrewdArray[0], "id", "string-id", "", false);
$theClass = new \BuildEmpire\Mosaic\Courseware\Template();
$theClass->setShrewd($shrewd, $shrewdArray[1]);
$this->template = $theClass;
$this->components = $shrewd->setParameter("ScreenData", 2, $shrewdArray[2], "components", "list", "\BuildEmpire\Mosaic\Courseware\ComponentData", false);
}
}