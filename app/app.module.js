// Load the Angular Material CSS associated with ngMaterial
// then load the app.css to provide overrides, etc.
import "angular-material/angular-material.css!";
import "assets/css/app.css!";

// Load Angular libraries
import angular from "angular";
import material from "angular-material";
import "angular-route";
import "angular-animate";

// Load MUTE modules
import toolbar from "./components/toolbar/toolbar.module";
import home from "./components/home/home.module";
import editor from "./components/editor/editor.module";

const MODULE_NAME = "app";

angular
  .module(MODULE_NAME, [
    /* Angular modules */
    "ngRoute",
    "ngAnimate",
    /* Cross-app modules */
    toolbar,
    home,
    editor,
    /* 3rd-party modules */
    material,
  ])
  .config(config);

config.$inject = ["$mdThemingProvider", "$routeProvider"];

function config($mdThemingProvider, $routeProvider) {
  $mdThemingProvider
    .theme("default")
    .primaryPalette("amber")
    .accentPalette("indigo")
    .warnPalette("red")
    .backgroundPalette("indigo", {
      "default": "50",
      "hue-1": "A200",
      "hue-2": "300",
      "hue-3": "400",
    });

  $routeProvider.otherwise("/");
}

export default MODULE_NAME;
