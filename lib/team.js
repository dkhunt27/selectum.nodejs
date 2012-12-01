var Team = function(){
    var mongoose = require('mongoose');
    var Schema = require('mongoose').Schema;  //bummer - have to declare this up-front
    var teamSchema = new Schema({
        teamId    : {Number, index: { unique: true, required : true }},
        teamShortName : String,
        teamLongName  : String
    });
    //the model uses the schema declaration
    var _model = mongoose.model('teams', teamSchema);
    var _findByTeamId = function(teamId, success, fail){
        _model.findOne({teamId:teamId}, function(e, doc){
            if(e){
                fail(e)
            }else{
                success(doc);
            }
        });
    }
    return {
        schema : teamSchema,
        model : _model,
        findByTeamId : _findByTeamId,
    }
}();
