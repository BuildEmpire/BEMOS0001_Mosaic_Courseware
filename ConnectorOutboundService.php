<?php
/**
 * Automatically Generated Shrewd File
 */
namespace BuildEmpire\Mosaic\Courseware;
use BuildEmpire\Shrewd\IShrewdService;
use BuildEmpire\Shrewd\Schema\Parameter;
class ConnectorOutboundService implements IShrewdService
{
protected $_handler;
public function __construct($handler) {
$this->_handler = $handler;
}
public function getHandler(){
return $this->_handler;
}
public function getShrewdNS(){
return "BuildEmpire.Mosaic.Courseware.ConnectorOutboundService";
}
private function _ReadyGetReturnType() {
return "void";
}
private function _ReadyGetReturnContentType() {
return "";
}
private function _SetInboundServiceGetReturnType() {
return "void";
}
private function _SetInboundServiceGetReturnContentType() {
return "";
}
private function _OpenResourceManagerGetReturnType() {
return "void";
}
private function _OpenResourceManagerGetReturnContentType() {
return "";
}
private function _OpenDialogGetReturnType() {
return "void";
}
private function _OpenDialogGetReturnContentType() {
return "";
}
private function _ReadyGetArguments() {
$params = array();
return $params;
}
private function _SetInboundServiceGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "InboundService";
$param->type = "\\native-js-Object";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _OpenResourceManagerGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "fileExtensions";
$param->type = "list";
$param->contentType = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _OpenDialogGetArguments() {
$params = array();
return $params;
}
private function _ReadyGetExceptions() {
$params = array();
return $params;
}
private function _SetInboundServiceGetExceptions() {
$params = array();
return $params;
}
private function _OpenResourceManagerGetExceptions() {
$params = array();
return $params;
}
private function _OpenDialogGetExceptions() {
$params = array();
return $params;
}
}