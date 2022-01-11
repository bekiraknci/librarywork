const express = require('express');
const book = require('./book');
const category = require("./category");
const  router = express.Router();


router.use("/category",category);
router.use("/book",book);

module.exports = router;