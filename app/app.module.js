// Load the Angular Material CSS associated with ngMaterial
// then load the app.css to provide overrides, etc.
import "angular-material/angular-material.css!";
import "assets/css/app.css!";

// Load Angular libraries
import angular from "angular";
import material from "angular-material";

// Load MUTE modules
import toolbar from "./shared/toolbar/toolbar.module";
import home from "./components/home/home.module";

const MODULE_NAME = "mute";

angular
  .module(MODULE_NAME, [
    material,
    toolbar,
    home,
  ])
  .config(config);

config.$inject = ["$mdThemingProvider"];

function config($mdThemingProvider) {
  $mdThemingProvider
    .theme("default")
    .primaryPalette("deep-purple")
    .accentPalette("grey");
}

export default MODULE_NAME;
