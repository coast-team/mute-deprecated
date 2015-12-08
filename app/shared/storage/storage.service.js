const LOCAL = new WeakMap();
const INDEXED_DB = new WeakMap();

const defaults = {
  userName: 'Anonymous',
  docs: [],
};

class Storage {

  constructor(localStorageService, $indexedDB) {
    LOCAL.set(this, localStorageService);
    INDEXED_DB.set(this, $indexedDB);
  }

  getUserName() {
    return LOCAL.get(this).get('userName') || defaults.userName;
  }

  setUserName(userName) {
    return LOCAL.get(this).set('userName', userName);
  }

  getDocList(callback) {
    INDEXED_DB.get(this).openStore('docs', (store) => {
      store
        .getAll()
        .then(callback);
    });
  }

  getDoc(id, callback) {

  }

  putDoc(id, title, created, callback) {
    INDEXED_DB.get(this).openStore('docs', (store) => {
      store
        .insert({id, title, created})
        .then(callback);
    });
  }

  removeDoc(id, callback) {
    INDEXED_DB.get(this).openStore('docs', (store) => {
      store
        .delete(id)
        .then(callback);
    });
  }

  static serviceFactory(localStorageService, $indexedDB) {
    return new Storage(localStorageService, $indexedDB);
  }
}

Storage.serviceFactory.$inject = ['localStorageService', '$indexedDB'];

export default Storage;
