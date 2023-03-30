const express = require("express");

const app = express();

const userRouter = require("./routes/users");

app.get("/", function(req, res){
    res.send("hola world");
});

app.use("/users", userRouter);
app.listen(3000);

module.exports = app;