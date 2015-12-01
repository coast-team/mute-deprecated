class Toolbar {
  constructor() {
    this.restrict = "E";
    this.templateUrl = "app/shared/toolbar/toolbar.html";
  }
  static directiveFactory() {
    Toolbar.instance = new Toolbar();
    return Toolbar.instance;
  }
}

export default Toolbar;
