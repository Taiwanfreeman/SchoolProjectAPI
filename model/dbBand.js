var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost/HomeSecurity');

var mongoSchema =   mongoose.Schema;
// create schema
var BandSchema = {
    "HeartRate" : String,
};
// create model if not exists.
module.exports = mongoose.model('Single',BandSchema);
