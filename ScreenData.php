<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Project;
use BuildEmpire\Shrewd\IShrewdStruct;
class ScreenData implements IShrewdStruct
{
/**
 * @var string-id
 */
public $id;
/**
 * @var \BuildEmpire\Mosaic\Project\Template
 */
public $template;
/**
 * @var \BuildEmpire\Mosaic\Project\ComponentData[]
 */
public $components;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Project.ScreenData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = ($shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Project\Template", "", false)) ? $shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Project\Template", "", false) : null;
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Project\ComponentData", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->id = $shrewd->setParameter("ScreenData", 2, $shrewdArray[0], "id", "string-id", "", false);
$theClass = new \BuildEmpire\Mosaic\Project\Template();
$theClass->setShrewd($shrewd, $shrewdArray[1]);
$this->template = $theClass;
$this->components = $shrewd->setParameter("ScreenData", 2, $shrewdArray[2], "components", "list", "\BuildEmpire\Mosaic\Project\ComponentData", false);
}
}