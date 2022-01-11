const express = require('express');
const { addCategory,editDetails,getCategory,getAllCategory,delCategory} = require('../controllers/category');
const router = express.Router();

router.post("/addcategory",addCategory);
router.get("/getallcategory",getAllCategory);
router.put("/edit/:id",editDetails);
router.get("/getcategory/:id",getCategory);
router.delete("/delete/:id",delCategory);

module.exports =router;