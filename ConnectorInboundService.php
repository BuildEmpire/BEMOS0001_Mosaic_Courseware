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
private function _SetConfigurationDataGetReturnType() {
return "void";
}
private function _SetConfigurationDataGetReturnContentType() {
return "";
}
private function _SetScreenDataGetReturnType() {
return "void";
}
private function _SetScreenDataGetReturnContentType() {
return "";
}
private function _AddComponentGetReturnType() {
return "void";
}
private function _AddComponentGetReturnContentType() {
return "";
}
private function _ReadyGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "OutboundService";
$param->type = "\\native-js-Object";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _SetConfigurationDataGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "configurationData";
$param->type = "\BuildEmpire\Mosaic\Courseware\ConfigurationData";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _SetScreenDataGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "screenData";
$param->type = "\BuildEmpire\Mosaic\Courseware\ScreenData";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _AddComponentGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "componentName";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _ReadyGetExceptions() {
$params = array();
return $params;
}
private function _SetConfigurationDataGetExceptions() {
$params = array();
return $params;
}
private function _SetScreenDataGetExceptions() {
$params = array();
return $params;
}
private function _AddComponentGetExceptions() {
$params = array();
return $params;
}
}