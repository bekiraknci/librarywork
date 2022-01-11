const  Book = require("../models/Book");
const Category = require("../models/Category");
const CustomError = require("../helpers/CustomError");

const addBook =  async(req,res,next) => {


    const {bookname,bookimg,category,author} = req.body;
    try{

        const book = await Book.create({
            bookname,
            bookimg,
            category: category_id,
            author,
        
        })
       return  res
        .status(200)
        .json({
            success :true,
            data : book
        });
    
    }
    catch (error){
        return next(error);
    }
    
       

    }
    const getSingleBook = async(req,res,next) => {
        const {id} = req.params;
        const  book = await Book.findById(id).populate('category');
        
      
        
    
        return res.status(200)
        .json({
            success : true,
            data : book
        })
    
    
    }
    
      const getAllBook = async (req,res,next) => {
         const book =  await Book.find();
         return res.status(200)
         .json({
             success : true,
            data : book
        })
     }
     const getcatbook = async (req,res,next) => {

        const {category_id} = req.params;
        const category = await Category.findById(category_id);
        const book = category.book;
        return res.status(200)
        .json({
            success :true,
            data :  book
        })

     }
        
     const editDetailsBook = async (req,res,next) => {
        const {bookname,bookimg,author,category} = req.body;
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id,{ $set: {bookname,bookimg,author,category }},
        {
            new : true,
            runValidators : true
           
    });
    return res.status(200)
    .json({
        success :true,
        data :  book
    })
     }
     const delBook = async (req,res,next) => {
        const {id} = req.params;
    
        await Book.findByIdAndDelete(id);
        res.status(200)
        .json({
            success :true,
            message : "Delete Succesfully"
        })
   
    }
   
    
module.exports  = {
    addBook,
    getAllBook,
    getSingleBook,
    editDetailsBook,
    delBook,
    getcatbook
    
}
