import material from 'angular-material';
import muteSticky from './sticky.directive';

const MODULE_NAME = 'app.sticky';

angular
  .module(MODULE_NAME, [material])
  .directive('mute-Sticky', muteSticky.directiveFactory);

export default MODULE_NAME;
