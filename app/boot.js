// Load MUTE
import mute from './app.module';
import angular from 'angular';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( () => {
    const body = document.getElementsByTagName('body')[ 0 ];
    angular.bootstrap( body, [ mute ], { strictDi: false });
  });
