const HTTP = new WeakMap();

class DocService {

  constructor($http) {
    HTTP.set(this, $http);
  }

  create(docID) {
    console.log('Doc Service: create function');
    return 0;
    //return HTTP.get(this).post('/createDoc', {docID});
  }

  static serviceFactory($http) {
    return new DocService($http);
  }
}

DocService.serviceFactory.$inject = ['$http'];

export default DocService;
