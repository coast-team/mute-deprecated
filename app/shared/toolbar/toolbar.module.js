import angular from "angular";
import toolbar from "./toolbar.directive";
import ToolbarController from "./toolbar.controller";

const MODULE_NAME = "mute.toolbar";

angular
  .module(MODULE_NAME, [])
  .directive("muteToolbar", toolbar.directiveFactory )
  .controller("ToolbarController", ToolbarController );

export default MODULE_NAME;
