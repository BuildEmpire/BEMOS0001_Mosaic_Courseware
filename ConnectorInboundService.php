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
public function getShrewdVersion(){
return "6792b64cd5e59d782e281f68cfb2f69101ab752f";
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
private function _SetScaleGetReturnType() {
return "boolean";
}
private function _SetScaleGetReturnContentType() {
return "";
}
private function _GetScaleGetReturnType() {
return "float";
}
private function _GetScaleGetReturnContentType() {
return "";
}
private function _IsTransformationAppliedGetReturnType() {
return "boolean";
}
private function _IsTransformationAppliedGetReturnContentType() {
return "";
}
private function _SetTransformationGetReturnType() {
return "boolean";
}
private function _SetTransformationGetReturnContentType() {
return "";
}
private function _GetTransformationGetReturnType() {
return "float";
}
private function _GetTransformationGetReturnContentType() {
return "";
}
private function _SetConfigurationDataGetReturnType() {
return "void";
}
private function _SetConfigurationDataGetReturnContentType() {
return "";
}
private function _GetConfigurationDataGetReturnType() {
return "\BuildEmpire\Mosaic\Courseware\ConfigurationData";
}
private function _GetConfigurationDataGetReturnContentType() {
return "";
}
private function _SetScreenDataGetReturnType() {
return "\\native-js-jQuery";
}
private function _SetScreenDataGetReturnContentType() {
return "";
}
private function _GetScreenDataGetReturnType() {
return "\BuildEmpire\Mosaic\Courseware\ScreenData";
}
private function _GetScreenDataGetReturnContentType() {
return "";
}
private function _DrawGetReturnType() {
return "void";
}
private function _DrawGetReturnContentType() {
return "";
}
private function _AddColumnGetReturnType() {
return "void";
}
private function _AddColumnGetReturnContentType() {
return "";
}
private function _AddComponentGetReturnType() {
return "void";
}
private function _AddComponentGetReturnContentType() {
return "";
}
private function _HighlightColumnGetReturnType() {
return "void";
}
private function _HighlightColumnGetReturnContentType() {
return "";
}
private function _UnhighlightColumnGetReturnType() {
return "void";
}
private function _UnhighlightColumnGetReturnContentType() {
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
private function _SetScaleGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "scale";
$param->type = "float";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _GetScaleGetArguments() {
$params = array();
return $params;
}
private function _IsTransformationAppliedGetArguments() {
$params = array();
return $params;
}
private function _SetTransformationGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "transformation";
$param->type = "float";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _GetTransformationGetArguments() {
$params = array();
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
private function _GetConfigurationDataGetArguments() {
$params = array();
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
private function _GetScreenDataGetArguments() {
$params = array();
return $params;
}
private function _DrawGetArguments() {
$params = array();
return $params;
}
private function _AddColumnGetArguments() {
$params = array();
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
private function _HighlightColumnGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "id";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _UnhighlightColumnGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "id";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _ReadyGetExceptions() {
$params = array();
return $params;
}
private function _SetScaleGetExceptions() {
$params = array();
return $params;
}
private function _GetScaleGetExceptions() {
$params = array();
return $params;
}
private function _IsTransformationAppliedGetExceptions() {
$params = array();
return $params;
}
private function _SetTransformationGetExceptions() {
$params = array();
return $params;
}
private function _GetTransformationGetExceptions() {
$params = array();
return $params;
}
private function _SetConfigurationDataGetExceptions() {
$params = array();
return $params;
}
private function _GetConfigurationDataGetExceptions() {
$params = array();
return $params;
}
private function _SetScreenDataGetExceptions() {
$params = array();
return $params;
}
private function _GetScreenDataGetExceptions() {
$params = array();
return $params;
}
private function _DrawGetExceptions() {
$params = array();
return $params;
}
private function _AddColumnGetExceptions() {
$params = array();
return $params;
}
private function _AddComponentGetExceptions() {
$params = array();
return $params;
}
private function _HighlightColumnGetExceptions() {
$params = array();
return $params;
}
private function _UnhighlightColumnGetExceptions() {
$params = array();
return $params;
}
}