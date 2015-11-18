var EventProxy = require('eventproxy');
var models     = require('../models');
var Relation   = models.Relation;

exports.newAndSave = function (user_id, follow_id, source, action, callback) {
  var relation       = new Relation();
  relation.user_id     =  user_id;
  relation.follow_id   =  follow_id;
  relation.source      =  source;
  relation.action      =  action;
  Relation.findOne({user_id: user_id,follow_id:follow_id}, function (err, haveRelation) {
    if(haveRelation){
      haveRelation.remove(callback);
    }else{
      relation.save(callback);
    }
  });

};

exports.getRelation = function (user_id, follow_id, callback) {
  if (!user_id || !follow_id) {
    return callback(null, null);
  }
  Relation.findOne({user_id: user_id, follow_id: follow_id},callback);
};

//exports.getRelation = function(user_id, follow_id, callback){
//  if (!user_id || !follow_id) {
//    return callback(null, null);
//  }
//  Relation.findOne({user_id: user_id, follow_id: follow_id}, function (err, relation) {
//    if (err) {
//      return callback(err);
//    }
//
//    return callback(null,relation._id);
//  });
//};
