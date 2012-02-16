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
return "a410f36affc0eba0e7b371833391434b2dd6db1c";
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
private function _UpdateScreenDataGetReturnType() {
return "void";
}
private function _UpdateScreenDataGetReturnContentType() {
return "";
}
private function _SetContextInformationGetReturnType() {
return "void";
}
private function _SetContextInformationGetReturnContentType() {
return "";
}
private function _OpenResourceManagerGetReturnType() {
return "void";
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
private function _UpdateScreenDataGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "sScreenData";
$param->type = "\BuildEmpire\Mosaic\Courseware\ScreenData";
$param->optional = false;
$params[] = $param;
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
$param = new Parameter();
$param->name = "onSelectCallback";
$param->type = "\\native-js-Object";
$param->optional = true;
$params[] = $param;
$param = new Parameter();
$param->name = "onCancelCallback";
$param->type = "\\native-js-Object";
$param->optional = true;
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
$param = new Parameter();
$param->name = "onSaveCallback";
$param->type = "\\native-js-Object";
$param->optional = true;
$params[] = $param;
$param = new Parameter();
$param->name = "onCancelCallback";
$param->type = "\\native-js-Object";
$param->optional = true;
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
$param = new Parameter();
$param->name = "onSaveCallback";
$param->type = "\\native-js-Object";
$param->optional = true;
$params[] = $param;
$param = new Parameter();
$param->name = "onCancelCallback";
$param->type = "\\native-js-Object";
$param->optional = true;
$params[] = $param;
return $params;
}
private function _ReadyGetExceptions() {
$params = array();
return $params;
}
private function _UpdateScreenDataGetExceptions() {
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