<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldHTML implements IShrewdStruct
{
/**
 * @var string
 */
public $cssPath;
/**
 * @var []
 */
public $styleFormats;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldHTML";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldHTML", 1, $this->cssPath, "cssPath", "string", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHTML", 1, $this->styleFormats, "styleFormats", "list", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->cssPath = $shrewd->setParameter("EditableFormFieldHTML", 2, $shrewdArray[0], "cssPath", "string", "", false);}
if (isset($shrewdArray[1])) {$this->styleFormats = $shrewd->setParameter("EditableFormFieldHTML", 2, $shrewdArray[1], "styleFormats", "list", "", false);}
}
}