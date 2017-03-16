var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost/HomeSecurity');

var mongoSchema =   mongoose.Schema;
// create schema
var LogSchema = {
    "Event" : String,
    "Date" : String
};
// create model if not exists.
module.exports = mongoose.model('Log',LogSchema);
