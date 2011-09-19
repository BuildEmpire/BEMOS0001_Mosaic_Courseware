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
 * @var \BuildEmpire\Mosaic\Courseware\LearningPath[]
 */
public $learningPaths;
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
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->learningPaths, "learningPaths", "list", "\BuildEmpire\Mosaic\Courseware\LearningPath", true);
$paramArray[] = ($shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Courseware\Template", "", true)) ? $shrewd->getParameter("ScreenData", 1, $this->template, "template", "\BuildEmpire\Mosaic\Courseware\Template", "", true) : null;
$paramArray[] = $shrewd->getParameter("ScreenData", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Courseware\ComponentData", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("ScreenData", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->learningPaths = $shrewd->setParameter("ScreenData", 2, $shrewdArray[1], "learningPaths", "list", "\BuildEmpire\Mosaic\Courseware\LearningPath", true);}
if ($shrewdArray[2]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\Template();
$theClass->setShrewd($shrewd, $shrewdArray[2]);
$this->template = $theClass;
}
if (isset($shrewdArray[3])) {$this->components = $shrewd->setParameter("ScreenData", 2, $shrewdArray[3], "components", "list", "\BuildEmpire\Mosaic\Courseware\ComponentData", true);}
}
}