// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.
import "angular-material/angular-material.css!";
import "assets/css/app.css!";

// Load Angular libraries
import angular from "angular";
import material from "angular-material";

// Load MUTE modules
import toolbar from "./shared/toolbar/toolbar.module";
import home from "./components/home/home.module";

export default angular.module("mute", [ material, toolbar, home ])
  .config( ( $mdThemingProvider, $mdIconProvider ) => {
    let background = $mdThemingProvider.extendPalette( "grey", {
      "A100": "f2f2f2"
    });

    $mdThemingProvider
      .definePalette("background", background )
      .theme("default")
      .primaryPalette("deep-purple")
      .accentPalette("grey")
      .backgroundPalette("background");

    $mdIconProvider
      .iconSet("flaticon", "assets/fonts/continuous/flaticon.svg");
  }).name;
