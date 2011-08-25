<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Project;
use BuildEmpire\Shrewd\IShrewdStruct;
class Screen implements IShrewdStruct
{
/**
 * @var integer
 */
public $width;
/**
 * @var integer
 */
public $height;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Project.Screen";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("Screen", 1, $this->width, "width", "integer", "", false);
$paramArray[] = $shrewd->getParameter("Screen", 1, $this->height, "height", "integer", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
$this->width = $shrewd->setParameter("Screen", 2, $shrewdArray[0], "width", "integer", "", false);
$this->height = $shrewd->setParameter("Screen", 2, $shrewdArray[1], "height", "integer", "", false);
}
}