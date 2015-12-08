const ROUTE_PARAMS = new WeakMap();

class EditorController {

  constructor($routeParams) {
    ROUTE_PARAMS.set(this, $routeParams);
    console.log("ID: " + $routeParams.docID);
  }

}


EditorController.$inject = ["$routeParams"];

export default EditorController;
