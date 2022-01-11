const Category = require("../models/Category");
const CustomError = require("../helpers/CustomError");
const addCategory = async (req,res,next) => {
// post data



 const {name} = req.body;


   
 
    try{
        
        const category= await  Category.create({
            name,
            
          
        });
        
       return res
        .status(200)
        .json({
            success : true,
            data : category
        });

    }
    catch (error){
        return next(error);
    
    }
}
    const getCategory = async(req,res,next) => {
        const {id} = req.params;
        const  category = await Category.findById(id);
        
        
      
        
    
        return res.status(200)
        .json({
            success : true,
            data : category
        })
    
    
    }
    
      const getAllCategory = async (req,res,next) => {
         const category =  await Category.find();
         return res.status(200)
         .json({
             success : true,
            data : category
        })
     }

  


const editDetails = async (req,res,next) => {
    const {name} = req.body;
    const {id} = req.params;
    const category = await Category.findByIdAndUpdate(id,{name},{
        new : true,
        runValidators : true
       
});
return res.status(200)
.json({
    success :true,
    data : category
})
}
const delCategory = async (req,res,next) => {
    const {id} = req.params;

    await Category.findByIdAndDelete(id);
    res.status(200)
    .json({
        success :true,
        message : "Delete Succesfully"
    })

}




    


   





module.exports = {  
    addCategory,editDetails,getAllCategory,getCategory,delCategory
    
}