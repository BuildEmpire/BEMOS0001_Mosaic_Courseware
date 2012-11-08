<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableFormFieldHtml implements IShrewdStruct
{
/**
 * @var string[]
 */
public $contentCss;
/**
 * @var map[]
 */
public $styleFormats;
/**
 * @var string[]
 */
public $cssAttributes;
/**
 * @var string
 */
public $validElements;
/**
 * @var []
 */
public $options;
/**
 * @var integer
 */
public $rows;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableFormFieldHtml";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->contentCss, "contentCss", "list", "string", true);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->styleFormats, "styleFormats", "list", "map", true);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->cssAttributes, "cssAttributes", "map", "string", true);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->validElements, "validElements", "string", "", true);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->options, "options", "map", "", true);
$paramArray[] = $shrewd->getParameter("EditableFormFieldHtml", 1, $this->rows, "rows", "integer", "", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->contentCss = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[0], "contentCss", "list", "string", true);}
if (isset($shrewdArray[1])) {$this->styleFormats = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[1], "styleFormats", "list", "map", true);}
if (isset($shrewdArray[2])) {$this->cssAttributes = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[2], "cssAttributes", "map", "string", true);}
if (isset($shrewdArray[3])) {$this->validElements = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[3], "validElements", "string", "", true);}
if (isset($shrewdArray[4])) {$this->options = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[4], "options", "map", "", true);}
if (isset($shrewdArray[5])) {$this->rows = $shrewd->setParameter("EditableFormFieldHtml", 2, $shrewdArray[5], "rows", "integer", "", true);}
}
}