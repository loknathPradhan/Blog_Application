const express = require("express")
require("./connection/connect");
const app = express();
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login")

app.use("/avi/blog", signupRoute);
app.use("/avi/blog/", loginRoute)

app.get("/", (req, res)=> {
    res.send("hello form loknath")
})

app.listen(3000, ()=> {
    console.log("The server is up at 3000 port...")
})