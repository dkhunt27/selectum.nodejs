var patio = require("patio");

patio.addModel("gameFilter", {
    static:{
        init:function () {
            this._super(arguments);
        }
    }
}).as(module);