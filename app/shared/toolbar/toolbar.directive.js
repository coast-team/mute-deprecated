(function() {
  "use strict";

  angular.module("app.toolbar").directive("toolbar", toolbar );

  function toolbar() {
    return {
      restrict: "E",
      templateUrl: "app/shared/toolbar/toolbar.html"
    };
  }
}());
