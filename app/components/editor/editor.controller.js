import Mute from 'coast-team/mute-client/build/mute-client';

const ROUTE_PARAMS = new WeakMap();

class EditorController {

  constructor($routeParams) {
    ROUTE_PARAMS.set(this, $routeParams);
    console.log('ID: ' + $routeParams.docID);

    this.init();
  }

  init() {
    this.coordinator = new Mute.Coordinator('<%= docID %>', null);
    //this.editor = new Mute.AceEditorAdapter('<%= editorID %>', coordinator);
  }

}


EditorController.$inject = ['$routeParams'];

export default EditorController;
