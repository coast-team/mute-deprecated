const STORAGE = new WeakMap();

class ToolbarController {

  constructor(storage) {
    STORAGE.set(this, storage);
    this.userName = storage.getUserName();
  }

  saveUserName() {
    STORAGE.get(this).setUserName(this.userName);
    STORAGE.get(this).getDocList((docs) => {
      console.log("CA marche: " + docs[0].title);
    });
  }
}

ToolbarController.$inject = ["storage"];

export default ToolbarController;
