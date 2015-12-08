import angular from "angular";
import "ace-builds/src/ace";
import "angular-ui-ace";
import EditorController from "./editor.controller";

const MODULE_NAME = "app.doc";

angular
  .module(MODULE_NAME, ["ui.ace"])
  .controller("EditorController", EditorController )
  .config(config);

config.$inject = ["$routeProvider"];

function config($routeProvider) {
  $routeProvider
  .when("/:docID", {
    templateUrl: "app/components/editor/editor.html",
    controller: "EditorController",
    controllerAs: "vm",
  });
}

export default MODULE_NAME;
