const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/blogApplication")
.then(console.log("connected to database..."))
.catch(console.error);