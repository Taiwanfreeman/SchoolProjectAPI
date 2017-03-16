var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost/HomeSecurity');

var mongoSchema =   mongoose.Schema;
// create schema
var ControlSchema  = {
    "Window" : String,
    "Door" : String
};
// create model if not exists.
module.exports = mongoose.model('Control',ControlSchema);
