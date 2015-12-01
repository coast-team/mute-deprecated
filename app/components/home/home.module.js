import angular from "angular";
import home from "./home.directive";

const MODULE_NAME = "mute.home";

angular
  .module(MODULE_NAME, [])
  .directive("muteHome", home.directiveFactory );

export default MODULE_NAME;
