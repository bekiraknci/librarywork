const mongoose = require('mongoose');
const Category = require("../models/Category");


const Schema  =  mongoose.Schema;


const BookSchema = new Schema ({

    category : {
        type : mongoose.Schema.ObjectId,
        ref : "Category",
        required : true

    },

    bookname : {
        type : String,
        required : true
    },

    
    bookimg : {
        type : String,

    },
    author : {
        type : String,
        required : true,
    }
});
BookSchema.pre("save",async function(next){

    const category = await Category.findById(this.category)
    category.book.push(this._id);
    await category.save();
    next();
    
});

module.exports = mongoose.model("Book",BookSchema); 