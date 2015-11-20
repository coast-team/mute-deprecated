(function() {
  "use strict";

  angular
    .module("app", [ "ngMaterial", "app.toolbar", "app.home" ])
    .config(function( $mdThemingProvider, $mdIconProvider ) {
      var background = $mdThemingProvider.extendPalette( "grey", {
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
    });
}());
