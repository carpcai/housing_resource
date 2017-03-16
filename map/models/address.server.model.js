var mongoose = require('mongoose');

var AddressSchema = new mongoose.Schema({
    targeturl: String,
    pub_time: String,
    city: String,
    title: String,
    money: String,
    area: String,
    method: String,
    community: String
});

mongoose.model('Address', AddressSchema);