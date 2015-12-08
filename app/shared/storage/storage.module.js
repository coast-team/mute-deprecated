import angular from 'angular';
import 'angular-local-storage';
import 'angular-indexed-db';
import storage from './storage.service';

const MODULE_NAME = 'mute.storage';

angular
  .module(MODULE_NAME, [
    'LocalStorageModule',
    'indexedDB',
  ])
  .constant('STORAGE_NAME', 'mute')
  .factory('storage', storage.serviceFactory )
  .config(config);

config.$inject = ['localStorageServiceProvider', '$indexedDBProvider', 'STORAGE_NAME'];

function config(localStorageServiceProvider, $indexedDBProvider, STORAGE_NAME) {
  // Local storage configuration
  localStorageServiceProvider
    .setPrefix(STORAGE_NAME);

  //  IndexedDB configuration
  $indexedDBProvider
  .connection(STORAGE_NAME)
  .upgradeDatabase(1, (event, db, tx) => {
    const objStore = db.createObjectStore('docs', {keyPath: 'id'});
    objStore.createIndex('title', 'title', {unique: false});
    objStore.createIndex('created', 'created', {unique: false});
    objStore.createIndex('content', 'content', {unique: false});
  });
}

export default MODULE_NAME;
