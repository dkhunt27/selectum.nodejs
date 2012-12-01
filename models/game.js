var patio = require("patio");

patio.addModel("game", {
    static:{
        init:function () {
            this._super(arguments);
            this.manyToOne("team", {fetchType:this.fetchType.EAGER, key:"favoriteTeamId"})
                .manyToOne("team", {fetchType:this.fetchType.EAGER, key:"underdogTeamId"})
                .manyToOne("gameFilter", {fetchType:this.fetchType.EAGER, key:"gameFilterId"});
        }
    }
}).as(module);