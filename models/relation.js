var mongoose  = require('mongoose');
var BaseModel = require("./base_model");
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var RelationSchema = new Schema({
  //topic_id: { type: ObjectId},
  source: {type: String},
  user_id: { type: ObjectId },
  follow_id: { type: ObjectId },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  deleted: {type: Boolean, default: false}
});

RelationSchema.plugin(BaseModel);
RelationSchema.index({user_id: 1});
RelationSchema.index({follow_id: 1, create_at: -1});

//RelationSchema.virtual('user_concat').get(function () {
//  return this.user_id + this.follow_id;
//});

mongoose.model('Relation', RelationSchema);
