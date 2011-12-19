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
 * @var \BuildEmpire\Mosaic\Courseware\Translation[]
 */
public $translations;
/**
 * @var \BuildEmpire\Mosaic\Courseware\LearningPath[]
 */
public $learningPaths;
/**
 * @var \BuildEmpire\Mosaic\Courseware\Component[]
 */
public $components;
/**
 * @var integer
 */
public $dragMode;
/**
 * @var \BuildEmpire\Mosaic\Courseware\DataRows
 */
public $rows;
/**
 * @var \BuildEmpire\Mosaic\Courseware\DataColumns
 */
public $columns;
/**
 * @var \BuildEmpire\Mosaic\Courseware\DataCanvas
 */
public $canvas;
/**
 * @var \BuildEmpire\Mosaic\Courseware\DataGrid
 */
public $grid;
/**
 * @var string
 */
public $language = "en";
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ConfigurationData";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->translations, "translations", "list", "\BuildEmpire\Mosaic\Courseware\Translation", true);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->learningPaths, "learningPaths", "list", "\BuildEmpire\Mosaic\Courseware\LearningPath", true);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->components, "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->dragMode, "dragMode", "integer", "", false);
$paramArray[] = ($shrewd->getParameter("ConfigurationData", 1, $this->rows, "rows", "\BuildEmpire\Mosaic\Courseware\DataRows", "", false)) ? $shrewd->getParameter("ConfigurationData", 1, $this->rows, "rows", "\BuildEmpire\Mosaic\Courseware\DataRows", "", false) : null;
$paramArray[] = ($shrewd->getParameter("ConfigurationData", 1, $this->columns, "columns", "\BuildEmpire\Mosaic\Courseware\DataColumns", "", false)) ? $shrewd->getParameter("ConfigurationData", 1, $this->columns, "columns", "\BuildEmpire\Mosaic\Courseware\DataColumns", "", false) : null;
$paramArray[] = ($shrewd->getParameter("ConfigurationData", 1, $this->canvas, "canvas", "\BuildEmpire\Mosaic\Courseware\DataCanvas", "", false)) ? $shrewd->getParameter("ConfigurationData", 1, $this->canvas, "canvas", "\BuildEmpire\Mosaic\Courseware\DataCanvas", "", false) : null;
$paramArray[] = ($shrewd->getParameter("ConfigurationData", 1, $this->grid, "grid", "\BuildEmpire\Mosaic\Courseware\DataGrid", "", false)) ? $shrewd->getParameter("ConfigurationData", 1, $this->grid, "grid", "\BuildEmpire\Mosaic\Courseware\DataGrid", "", false) : null;
$paramArray[] = $shrewd->getParameter("ConfigurationData", 1, $this->language, "language", "string", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->name = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[1], "name", "string", "", false);}
if (isset($shrewdArray[2])) {$this->translations = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[2], "translations", "list", "\BuildEmpire\Mosaic\Courseware\Translation", true);}
if (isset($shrewdArray[3])) {$this->learningPaths = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[3], "learningPaths", "list", "\BuildEmpire\Mosaic\Courseware\LearningPath", true);}
if (isset($shrewdArray[4])) {$this->components = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[4], "components", "list", "\BuildEmpire\Mosaic\Courseware\Component", true);}
if (isset($shrewdArray[5])) {$this->dragMode = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[5], "dragMode", "integer", "", false);}
if ($shrewdArray[6]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\DataRows();
$theClass->setShrewd($shrewd, $shrewdArray[6]);
$this->rows = $theClass;
}
if ($shrewdArray[7]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\DataColumns();
$theClass->setShrewd($shrewd, $shrewdArray[7]);
$this->columns = $theClass;
}
if ($shrewdArray[8]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\DataCanvas();
$theClass->setShrewd($shrewd, $shrewdArray[8]);
$this->canvas = $theClass;
}
if ($shrewdArray[9]) {
$theClass = new \BuildEmpire\Mosaic\Courseware\DataGrid();
$theClass->setShrewd($shrewd, $shrewdArray[9]);
$this->grid = $theClass;
}
if (isset($shrewdArray[10])) {$this->language = $shrewd->setParameter("ConfigurationData", 2, $shrewdArray[10], "language", "string", "", false);}
}
}