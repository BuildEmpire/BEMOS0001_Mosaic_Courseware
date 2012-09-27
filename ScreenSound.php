<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdStruct;
class ScreenSound implements IShrewdStruct
{
/**
 * @var string
 */
public $soundFile;
/**
 * @var boolean
 */
public $startImmediately;
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ScreenSound";
}
public function getShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd){
$paramArray = array();
$paramArray[] = $shrewd->getParameter("ScreenSound", 1, $this->soundFile, "soundFile", "string", "", false);
$paramArray[] = $shrewd->getParameter("ScreenSound", 1, $this->startImmediately, "startImmediately", "boolean", "", false);
return $paramArray;
}
public function setShrewd(
\BuildEmpire\Shrewd\IShrewd $shrewd, 
$shrewdArray){
if (isset($shrewdArray[0])) {$this->soundFile = $shrewd->setParameter("ScreenSound", 2, $shrewdArray[0], "soundFile", "string", "", false);}
if (isset($shrewdArray[1])) {$this->startImmediately = $shrewd->setParameter("ScreenSound", 2, $shrewdArray[1], "startImmediately", "boolean", "", false);}
}
}