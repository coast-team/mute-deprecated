const STORAGE = new WeakMap();
const WINDOW = new WeakMap();

class HomeController {

  constructor($window, storage) {
    STORAGE.set(this, storage);
    WINDOW.set(this, $window);
    storage.getDocList((docs) => {
      this.docs = docs;
    });
  }

  gotoDoc(docID) {
    WINDOW.get(this).location.href = `/#/${docID}`;
  }

  createDoc() {
    let id = 0;
    for (const doc of this.docs) {
      if (+doc.id >= id) {
        id = +doc.id;
      }
    }
    id++;

    STORAGE.get(this).putDoc(id, "Unknown", new Date().toLocaleString(), () => {
      WINDOW.get(this).location.href = `/#/${id}`;
    });
  }

  removeDoc($event, docID) {
    $event.stopPropagation();
    let docs = this.docs;
    STORAGE.get(this).removeDoc(docID, () => {
      for (let index in docs) {
        if (docs[index].id === docID) {
          docs.splice(index, 1);
        }
      }
    });
  }
}

HomeController.$inject = [ "$window", "storage"];

export default HomeController;
