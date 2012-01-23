<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldHtml implements IShrewdStruct
{
/**
 * @var []
 */
public $cssPath;
/**
 * @var []
 */
public $styleFormats;
/**
 * @var integer
 */
public $rows;
/**
 * @var string[]
 */
public $cssAttributes;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldHtml";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->cssPath, "cssPath", "list", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->styleFormats, "styleFormats", "list", "", false);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->rows, "rows", "integer", "", true);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->cssAttributes, "cssAttributes", "map", "string", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->cssPath = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[0], "cssPath", "list", "", false);}
if (isset($shrewdArray[1])) {$this->styleFormats = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[1], "styleFormats", "list", "", false);}
if (isset($shrewdArray[2])) {$this->rows = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[2], "rows", "integer", "", true);}
if (isset($shrewdArray[3])) {$this->cssAttributes = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[3], "cssAttributes", "map", "string", true);}
}
}