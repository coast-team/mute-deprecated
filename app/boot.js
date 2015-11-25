// Load MUTE
import mute from "./app.module";

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( () => {
    let body = document.getElementsByTagName("body")[ 0 ];
    angular.bootstrap( body, [ mute ], { strictDi: false });
  });
