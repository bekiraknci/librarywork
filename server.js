const express = require("express");
const dotenv =require("dotenv");
const connectDatabase = require("./helpers/connectDatabase");
const routers =require("./routers");
 const customErrorHandler = require("./middlewares/errors/customErrorHandler");
// environment Variables
dotenv.config({

    path : "./config/config.env"
});


 //MongoDb Connection

 connectDatabase();

const app = express();

// Express - Body  Middleware

app.use(express.json());

const PORT = process.env.PORT;


app.use("/lib",routers);

  app.use(customErrorHandler);
app.listen(PORT,() => {
    console.log("Server Started" + PORT);
    
})