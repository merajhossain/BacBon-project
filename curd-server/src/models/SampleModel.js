const mongoose = require("mongoose");

const DataBaseScheme = mongoose.Schema({
    firstName : {type : String, required : true },
    lastName : {type : String, required : true },
    emailAddress : {type : String, required : true }
});

module.exports = mongoose.model('curdDetails', DataBaseScheme);