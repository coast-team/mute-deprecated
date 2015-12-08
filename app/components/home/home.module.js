import angular from "angular";
import material from "angular-material";
import doc from "../../shared/services/doc.service";
import HomeController from "./home.controller";

const MODULE_NAME = "app.home";

angular
  .module(MODULE_NAME, [material])
  .factory("doc", doc.serviceFactory)
  .controller("HomeController", HomeController )
  .config(config);

config.$inject = ["$routeProvider"];

function config($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "app/components/home/home.html",
    controller: "HomeController",
    controllerAs: "ctrl",
  });
}

export default MODULE_NAME;
