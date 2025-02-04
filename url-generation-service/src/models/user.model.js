'use strict';

const mongoose = require('mongoose');
const { Schema,model } = mongoose;

const userSchema = new Schema({
   user_name:{
         type:String,
         required:true
    },
    user_email:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    
}, {
    timestamps: true
});

module.exports = model('User', userSchema);