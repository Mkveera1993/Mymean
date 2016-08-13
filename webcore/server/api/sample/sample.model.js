'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SampleSchema = new Schema({
    field1: String,
    field:String,
    name: String,   
    createdTimestamp: {
        type: Date,
        default: Date.now
    },
    modifiedTimestamp: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Sample', SampleSchema);