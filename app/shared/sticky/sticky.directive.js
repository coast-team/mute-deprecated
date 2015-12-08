const LOG = new WeakMap();
const COMPILE = new WeakMap();
const MD_STICKY = new WeakMap();

class	Sticky {
  constructor($mdSticky, $compile, $log) {
    LOG.set(this, $log);
    COMPILE.set(this, $compile);
    MD_STICKY.set(this, $mdSticky);
    this.restrict = 'A';
    this.replace = true;
    this.transclude = true;
    this.template = '<div class="mute-sticky-content"></div>';
    this.compile = this.link;
  }

  link(element, attrs, transclude) {
    return (scope, element, attr) => {
      let outerHTML = element[0].outerHTML;
      LOG.get(Sticky.instance).debug(outerHTML);
      transclude(scope, (clone) => {
        LOG.get(Sticky.instance).debug(clone);
        element.append(clone);
      });

      transclude(scope, function (clone) {
        let stickyClone = COMPILE.get(Sticky.instance)(angular.element(outerHTML).removeAttr('mute-sticky'))(scope);
        stickyClone.append(clone);
        MD_STICKY.get(Sticky.instance)(scope, element, stickyClone);
      });
    }
  }

  static directiveFactory($mdSticky, $compile, $log) {
    Sticky.instance = new Sticky($mdSticky, $compile, $log);
    return Sticky.instance;
  }
}
	Sticky.$inject = ['$mdSticky', '$compile', '$log'];

export default Sticky;
