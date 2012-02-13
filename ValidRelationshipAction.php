<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ValidRelationshipAction implements IShrewdStruct
{
/**
 * @var string
 */
public $context;
/**
 * @var string
 */
public $action;
/**
 * @var string
 */
public $key;
/**
 * @var string
 */
public $string;
/**
 * @var \BuildEmpire\Mosaic\Courseware\EditableFormField[]
 */
public $fields;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ValidRelationshipAction";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ValidRelationshipAction", 1, $this->context, "context", "string", "", false);
$paramArray[] = $shrewd->getParameter("ValidRelationshipAction", 1, $this->action, "action", "string", "", false);
$paramArray[] = $shrewd->getParameter("ValidRelationshipAction", 1, $this->key, "key", "string", "", false);
$paramArray[] = $shrewd->getParameter("ValidRelationshipAction", 1, $this->string, "string", "string", "", false);
$paramArray[] = $shrewd->getParameter("ValidRelationshipAction", 1, $this->fields, "fields", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormField", true);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->context = $shrewd->setParameter("ValidRelationshipAction", 2, $shrewdArray[0], "context", "string", "", false);}
if (isset($shrewdArray[1])) {$this->action = $shrewd->setParameter("ValidRelationshipAction", 2, $shrewdArray[1], "action", "string", "", false);}
if (isset($shrewdArray[2])) {$this->key = $shrewd->setParameter("ValidRelationshipAction", 2, $shrewdArray[2], "key", "string", "", false);}
if (isset($shrewdArray[3])) {$this->string = $shrewd->setParameter("ValidRelationshipAction", 2, $shrewdArray[3], "string", "string", "", false);}
if (isset($shrewdArray[4])) {$this->fields = $shrewd->setParameter("ValidRelationshipAction", 2, $shrewdArray[4], "fields", "list", "\BuildEmpire\Mosaic\Courseware\EditableFormField", true);}
}
}