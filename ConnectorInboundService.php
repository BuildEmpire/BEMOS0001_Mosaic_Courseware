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
return "c4597cdb036e34d80fbbf8e1a719b323fb14da7f";
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
private function _SetModeGetReturnType() {
return "boolean";
}
private function _SetModeGetReturnContentType() {
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
return "void";
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
private function _HighlightComponentGetReturnType() {
return "void";
}
private function _HighlightComponentGetReturnContentType() {
return "";
}
private function _UnhighlightComponentGetReturnType() {
return "void";
}
private function _UnhighlightComponentGetReturnContentType() {
return "";
}
private function _GetValidRelationshipsGetReturnType() {
return "\BuildEmpire\Mosaic\Courseware\RelationshipContainer";
}
private function _GetValidRelationshipsGetReturnContentType() {
return "";
}
private function _GetValidComponentRelationshipsGetReturnType() {
return "\BuildEmpire\Mosaic\Courseware\RelationshipComponentContainer";
}
private function _GetValidComponentRelationshipsGetReturnContentType() {
return "";
}
private function _GetAllValidComponentRelationshipsGetReturnType() {
return "map";
}
private function _GetAllValidComponentRelationshipsGetReturnContentType() {
return "\BuildEmpire\Mosaic\Courseware\RelationshipComponentContainer";
}
private function _ShowVisualRelationshipsEditorGetReturnType() {
return "void";
}
private function _ShowVisualRelationshipsEditorGetReturnContentType() {
return "";
}
private function _HideVisualRelationshipsEditorGetReturnType() {
return "void";
}
private function _HideVisualRelationshipsEditorGetReturnContentType() {
return "";
}
private function _ShowVisualRelationshipGetReturnType() {
return "void";
}
private function _ShowVisualRelationshipGetReturnContentType() {
return "";
}
private function _HideVisualRelationshipGetReturnType() {
return "void";
}
private function _HideVisualRelationshipGetReturnContentType() {
return "";
}
private function _SetRelationshipsDataGetReturnType() {
return "void";
}
private function _SetRelationshipsDataGetReturnContentType() {
return "";
}
private function _GetRelationshipsDataGetReturnType() {
return "list";
}
private function _GetRelationshipsDataGetReturnContentType() {
return "\BuildEmpire\Mosaic\Courseware\Relationship";
}
private function _OnResourceManagerSelectGetReturnType() {
return "void";
}
private function _OnResourceManagerSelectGetReturnContentType() {
return "";
}
private function _OnResourceManagerCloseGetReturnType() {
return "void";
}
private function _OnResourceManagerCloseGetReturnContentType() {
return "";
}
private function _OnRelationshipManagerSaveGetReturnType() {
return "void";
}
private function _OnRelationshipManagerSaveGetReturnContentType() {
return "";
}
private function _OnRelationshipManagerCloseGetReturnType() {
return "void";
}
private function _OnRelationshipManagerCloseGetReturnContentType() {
return "";
}
private function _OnEditDialogSaveGetReturnType() {
return "void";
}
private function _OnEditDialogSaveGetReturnContentType() {
return "";
}
private function _OnEditDialogCloseGetReturnType() {
return "void";
}
private function _OnEditDialogCloseGetReturnContentType() {
return "";
}
private function _GetControllerButtonsGetReturnType() {
return "list";
}
private function _GetControllerButtonsGetReturnContentType() {
return "\BuildEmpire\Mosaic\Courseware\ControllerButton";
}
private function _TriggerControllerButtonGetReturnType() {
return "mixed";
}
private function _TriggerControllerButtonGetReturnContentType() {
return "";
}
private function _ReadyGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "OutboundServer";
$param->type = "\\native-js-Object";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _SetModeGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "mode";
$param->type = "integer";
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
private function _HighlightComponentGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "id";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _UnhighlightComponentGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "id";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _GetValidRelationshipsGetArguments() {
$params = array();
return $params;
}
private function _GetValidComponentRelationshipsGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "componentName";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _GetAllValidComponentRelationshipsGetArguments() {
$params = array();
return $params;
}
private function _ShowVisualRelationshipsEditorGetArguments() {
$params = array();
return $params;
}
private function _HideVisualRelationshipsEditorGetArguments() {
$params = array();
return $params;
}
private function _ShowVisualRelationshipGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "relationshipId";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _HideVisualRelationshipGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "relationshipId";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _SetRelationshipsDataGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "relationshipsData";
$param->type = "list";
$param->contentType = "\BuildEmpire\Mosaic\Courseware\Relationship";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _GetRelationshipsDataGetArguments() {
$params = array();
return $params;
}
private function _OnResourceManagerSelectGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "filePathRelative";
$param->type = "string";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _OnResourceManagerCloseGetArguments() {
$params = array();
return $params;
}
private function _OnRelationshipManagerSaveGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "relationshipsData";
$param->type = "list";
$param->contentType = "\BuildEmpire\Mosaic\Courseware\Relationship";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _OnRelationshipManagerCloseGetArguments() {
$params = array();
return $params;
}
private function _OnEditDialogSaveGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "sForm";
$param->type = "\BuildEmpire\Mosaic\Courseware\EditableForm";
$param->optional = false;
$params[] = $param;
return $params;
}
private function _OnEditDialogCloseGetArguments() {
$params = array();
return $params;
}
private function _GetControllerButtonsGetArguments() {
$params = array();
return $params;
}
private function _TriggerControllerButtonGetArguments() {
$params = array();
$param = new Parameter();
$param->name = "id";
$param->type = "string";
$param->optional = false;
$params[] = $param;
$param = new Parameter();
$param->name = "data";
$param->type = "map";
$param->optional = true;
$params[] = $param;
return $params;
}
private function _ReadyGetExceptions() {
$params = array();
return $params;
}
private function _SetModeGetExceptions() {
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
private function _HighlightComponentGetExceptions() {
$params = array();
return $params;
}
private function _UnhighlightComponentGetExceptions() {
$params = array();
return $params;
}
private function _GetValidRelationshipsGetExceptions() {
$params = array();
return $params;
}
private function _GetValidComponentRelationshipsGetExceptions() {
$params = array();
return $params;
}
private function _GetAllValidComponentRelationshipsGetExceptions() {
$params = array();
return $params;
}
private function _ShowVisualRelationshipsEditorGetExceptions() {
$params = array();
return $params;
}
private function _HideVisualRelationshipsEditorGetExceptions() {
$params = array();
return $params;
}
private function _ShowVisualRelationshipGetExceptions() {
$params = array();
return $params;
}
private function _HideVisualRelationshipGetExceptions() {
$params = array();
return $params;
}
private function _SetRelationshipsDataGetExceptions() {
$params = array();
return $params;
}
private function _GetRelationshipsDataGetExceptions() {
$params = array();
return $params;
}
private function _OnResourceManagerSelectGetExceptions() {
$params = array();
return $params;
}
private function _OnResourceManagerCloseGetExceptions() {
$params = array();
return $params;
}
private function _OnRelationshipManagerSaveGetExceptions() {
$params = array();
return $params;
}
private function _OnRelationshipManagerCloseGetExceptions() {
$params = array();
return $params;
}
private function _OnEditDialogSaveGetExceptions() {
$params = array();
return $params;
}
private function _OnEditDialogCloseGetExceptions() {
$params = array();
return $params;
}
private function _GetControllerButtonsGetExceptions() {
$params = array();
return $params;
}
private function _TriggerControllerButtonGetExceptions() {
$params = array();
return $params;
}
}