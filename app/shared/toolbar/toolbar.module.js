import directive from "./toolbar.directive";
import controller from "./toolbar.controller";

export default angular
  .module("mute.toolbar", [])
  .directive("toolbar", directive )
  .controller("Toolbar", controller ).name;
