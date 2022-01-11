const express = require('express');
const { addBook,getAllBook,getSingleBook,editDetailsBook,delBook,getcatbook} = require('../controllers/book');
const router = express.Router();

router.post("/addbook",addBook);
router.get("/allbook",getAllBook)
 
 
 router.put("/edit/:id",editDetailsBook)
 router.get("/getbook/:id",getSingleBook)
 router.delete("/delete/:id",delBook)
 router.get("/getcatbook/:id",getcatbook)
 
 
 

module.exports = router;

