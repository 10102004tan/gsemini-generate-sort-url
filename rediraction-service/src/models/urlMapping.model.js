'use strict';

const mongoose = require('mongoose');
const { Schema,model } = mongoose;

const urlMappingSchema = new Schema({
   short_url:{
    type:String,
    required:true
   },
   long_url:{
    type:String,
    required:true
   },
   expiration_date:{
    type:Date,
    required:false,
    timestamps: true
   },
   user_id:{
    type:Schema.Types.ObjectId,
    required:true
   },
    click_count:{
     type:Number,
     required:true
    },
}, {
    timestamps: true
});

module.exports = model('UrlMapping', urlMappingSchema);