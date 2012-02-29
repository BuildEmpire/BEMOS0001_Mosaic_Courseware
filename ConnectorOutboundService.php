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
public function getShrewdVersion(){
return "f77de256f6d9d5a86678aedd75579f230ef74b0a";
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
private function _SetScreenDataDirtyGetReturnType() {
return "void";
}
private function _SetScreenDataDirtyGetReturnContentType() {
return "";
}
private function _SetContextInformationGetReturnType() {
return "void";
}
private function _SetContextInformationGetReturnContentType() {
return "";
}
private function _OpenResourceManagerGetReturnType() {
return "boolean";
}
private function _OpenResourceManagerGetReturnContentType() {
return "";
}
private function _OpenRelationshipManagerGetReturnType() {
return "void";
}
private function _OpenRelationshipManagerGetReturnContentType() {
return "";
}
private function _OpenEditDialogGetReturnType() {
return "void";
}
private function _OpenEditDialogGetReturnContentType() {
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
private function _SetScreenDataDirtyGetArguments() {
$params = array();
return $params;
}
private function _SetContextInformationGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "context";
$param->type = "integer";
$param->optional = false;
$params[] = $param;
$param = new Parameter();
$param->name = "text";
$param->type = "string";
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
private function _OpenRelationshipManagerGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "editableForm";
$param->type = "\BuildEmpire\Mosaic\Courseware\EditableForm";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _OpenEditDialogGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "editableForm";
$param->type = "\BuildEmpire\Mosaic\Courseware\EditableForm";
$param->optional = false;
$params[] = $param;
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
private function _SetScreenDataDirtyGetExceptions() {
$params = array();
return $params;
}
private function _SetContextInformationGetExceptions() {
$params = array();
return $params;
}
private function _OpenResourceManagerGetExceptions() {
$params = array();
return $params;
}
private function _OpenRelationshipManagerGetExceptions() {
$params = array();
return $params;
}
private function _OpenEditDialogGetExceptions() {
$params = array();
return $params;
}
}