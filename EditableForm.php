<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableForm implements IShrewdStruct
{
/**
 * @var \BuildEmpire\Mosaic\Courseware\EditableFormGroup[]
 */
public $groups;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableForm";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableForm", 1, $this->groups, "groups", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormGroup", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->groups = $shrewd->setParameter("EditableForm", 2, $shrewdArray[0], "groups", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormGroup", false);}
}
}