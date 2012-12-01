var patio = require("patio");

patio.addModel("team", {
    static:{
        init:function () {
            this._super(arguments);
            //this.oneToMany("game", {fetchType:this.fetchType.EAGER, key:"favoriteTeamId"})
            //    .oneToMany("game", {fetchType:this.fetchType.EAGER, key:"underdogTeamId"});
        }
    }
}).as(module);