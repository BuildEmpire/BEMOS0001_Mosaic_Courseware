<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class EditableForm implements IShrewdStruct
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
 * @var \BuildEmpire\Mosaic\Courseware\EditableFormGroup[]
 */
public $groups;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.EditableForm";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("EditableForm", 1, $this->id, "id", "string-id", "", false);
$paramArray[] = $shrewd->getParameter("EditableForm", 1, $this->name, "name", "string", "", false);
$paramArray[] = $shrewd->getParameter("EditableForm", 1, $this->groups, "groups", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormGroup", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->id = $shrewd->setParameter("EditableForm", 2, $shrewdArray[0], "id", "string-id", "", false);}
if (isset($shrewdArray[1])) {$this->name = $shrewd->setParameter("EditableForm", 2, $shrewdArray[1], "name", "string", "", false);}
if (isset($shrewdArray[2])) {$this->groups = $shrewd->setParameter("EditableForm", 2, $shrewdArray[2], "groups", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormGroup", false);}
}
}