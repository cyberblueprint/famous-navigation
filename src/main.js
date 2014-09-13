define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var View = require('views/AppView');
    

    // create the main context
    var mainContext = Engine.createContext();
    var appView = new View();

    

    mainContext.add(appView);
});