System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "bower:*": "jspm_packages/bower/*"
  },

  map: {
    "ace-builds": "bower:ace-builds@1.2.2",
    "ajaxorg/ace": "github:ajaxorg/ace@1.2.2",
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-animate": "github:angular/bower-angular-animate@1.4.8",
    "angular-aria": "github:angular/bower-angular-aria@1.4.8",
    "angular-indexed-db": "bower:angular-indexed-db@1.1.3",
    "angular-local-storage": "npm:angular-local-storage@0.2.2",
    "angular-material": "github:angular/bower-material@master",
    "angular-route": "github:angular/bower-angular-route@1.4.8",
    "angular-ui-ace": "bower:angular-ui-ace@0.2.3",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bramski/angular-indexedDB": "github:bramski/angular-indexedDB@1.1.3",
    "coast-team/mute-client": "github:coast-team/mute-client@master",
    "coast-team/mute-structs": "github:coast-team/mute-structs@master",
    "coast-team/mute-utils": "github:coast-team/mute-utils@master",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "bower:angular-indexed-db@1.1.3": {
      "angular": "bower:angular@1.3.20"
    },
    "bower:angular-ui-ace@0.2.3": {
      "ace-builds": "bower:ace-builds@1.2.2",
      "angular": "bower:angular@1.4.8"
    },
    "github:angular/bower-angular-animate@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-aria@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-route@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-animate": "github:angular/bower-angular-animate@1.4.8",
      "angular-aria": "github:angular/bower-angular-aria@1.4.8",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
