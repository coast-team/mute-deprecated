class Home {
  constructor() {
    this.restrict = "E";
    this.templateUrl = "app/components/home/home.html";
  }

  static directiveFactory() {
    Home.instance = new Home();
    return new Home();
  }
}

export default Home;
