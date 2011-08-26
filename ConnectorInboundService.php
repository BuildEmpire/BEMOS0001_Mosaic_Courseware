<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdService;
use BuildEmpire\Shrewd\Schema\Parameter;
class ConnectorInboundService implements IShrewdService
{
protected $_handler;
public function __construct($handler) {
$this->_handler = $handler;
}
public function getHandler(){
return $this->_handler;
}
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ConnectorInboundService";
}
private function _ReadyGetReturnType() {
return "void";
}
private function _ReadyGetReturnContentType() {
return "";
}
private function _SetProjectToMosaicServiceGetReturnType() {
return "void";
}
private function _SetProjectToMosaicServiceGetReturnContentType() {
return "";
}
private function _SetCourseConfigurationDataGetReturnType() {
return "void";
}
private function _SetCourseConfigurationDataGetReturnContentType() {
return "";
}
private function _SetCourseContentScreenDataGetReturnType() {
return "void";
}
private function _SetCourseContentScreenDataGetReturnContentType() {
return "";
}
private function _ReadyGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "service";
$param->type = "\\native-js-Object";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _SetProjectToMosaicServiceGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "service";
$param->type = "\\native-js-Object";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _SetCourseConfigurationDataGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "courseConfigurationData";
$param->type = "\BuildEmpire\Mosaic\Courseware\ConfigurationData";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _SetCourseContentScreenDataGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "courseContentScreenData";
$param->type = "\BuildEmpire\Mosaic\Courseware\ScreenData";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _ReadyGetExceptions() {
$params = array();
return $params;
}
private function _SetProjectToMosaicServiceGetExceptions() {
$params = array();
return $params;
}
private function _SetCourseConfigurationDataGetExceptions() {
$params = array();
return $params;
}
private function _SetCourseContentScreenDataGetExceptions() {
$params = array();
return $params;
}
}