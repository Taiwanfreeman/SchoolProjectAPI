var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost/HomeSecurity');

var mongoSchema =   mongoose.Schema;
// create schema
var StatusSchema = {
    "MQ2" : String,
    "MQ7" : String,
    "FireDetect" : String,
    "Door" : String,
    "Temperature" : String,
    "Humidity" :String 
};
// create model if not exists.
module.exports = mongoose.model('Status',StatusSchema);
