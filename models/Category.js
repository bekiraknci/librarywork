const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const Schema  =  mongoose.Schema;


const CateSchema = new Schema ({

    
    name : {
        type : String,
        required : true,

    },
    book : [
        {
            type : mongoose.Schema.ObjectId,
            ref :"Book"
        }  

    ]
    
    
});

module.exports =mongoose.model("Category",CateSchema);
