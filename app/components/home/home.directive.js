(function() {
  "use strict";

  angular.module("app.home", []).directive("home", home );

  function home() {
    return {
      restrict: "E",
      templateUrl: "app/components/home/home.html"
    };
  }
}());
