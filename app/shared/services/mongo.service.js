(function() {
  "use strict";

  // TODO: parameterize database host

  angular.module("app")
    .factory("mongo", mongo );

  mongo.$inject = [ "$http" ];

  function mongo( $http ) {
    var service = {
      docContent: docContent,
      createDoc: createDoc
    };

    function docContent( docID ) {

    }

    function createDoc( docID ) {

    }
  }
}());
