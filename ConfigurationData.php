<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ConfigurationData implements IShrewdStruct
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
 * @var \BuildEmpire\Mosaic\Courseware\Screen
 */
public $screen;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Translation[]
 */
public $translations;
/**
 * @var \BuildEmpire\Mosaic\Courseware\LearningPath[]
 */
public $learningPaths;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Template[]
 */
public $templates;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Component[]
 */
public $components;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ConfigurationData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->name, "name", "string", "", false);
$paramArray[] = ($shrewd->getParameter("ConfigurationData", 1, $this->screen, "screen", "\BuildEmpire\Mosaic\Courseware\Screen", "", true)) ? $shrewd->getParameter("ConfigurationData", 1, $this->screen, "screen", "\BuildEmpire\Mosaic\Courseware\Screen", "", true) : null;
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->translations, "translations", "list", "\BuildEmpire\Mosaic\Courseware\Translation", true);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->learningPaths, "learningPaths", "list", "\BuildEmpire\Mosaic\Courseware\LearningPath", true);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->templates, "templates", "list", "\BuildEmpire\Mosaic\Courseware\Template", true);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->id = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[0], "id", "string-id", "", false);
$this->name = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[1], "name", "string", "", false);
$theClass = new \BuildEmpire\Mosaic\Courseware\Screen();
$theClass->setShrewd($shrewd, $shrewdArray[2]);
$this->screen = $theClass;
$this->translations = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[3], "translations", "list", "\BuildEmpire\Mosaic\Courseware\Translation", true);
$this->learningPaths = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[4], "learningPaths", "list", "\BuildEmpire\Mosaic\Courseware\LearningPath", true);
$this->templates = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[5], "templates", "list", "\BuildEmpire\Mosaic\Courseware\Template", true);
$this->components = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[6], "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);
}
}