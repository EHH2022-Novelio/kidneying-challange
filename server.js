const express = require("express");
const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

const connection = `mongodb+srv://Novelia:wEl48hCMZNQMwWpF@novelia.nnqwj2b.mongodb.net/?retryWrites=true&w=majority`;



mongoose.connect(connection, {useNewUrlParser: true}, ()=>{
	console.log("connected");
});

const userSchema = new mongoose.Schema({
    username: {required:true, type:String, unique: true, min:3},
    password: {required:true, type:String}
});

const User = mongoose.model("users", userSchema);

app.use(express.json());

app.use(express.urlencoded());

app.post("/api/login", (req, res) => {
    console.log(req.body);
    User.find({username: req.body.username, password: CryptoJS.MD5(req.body.password).toString()}, (err, result) => {
        console.log(result)
        if (err){
            res.status(500).send(err);
        }else if (result.length === 0){
            res.status(400).send("Password or user name is wrong");
        }else{
            console.log(result)
            res.status(200).send(result);
        }
    })
})

app.post("/api/register", (req, res) => {
    console.log(req.body);
    
    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.MD5(req.body.password).toString()
    });
    
        newUser.save((err, result) => {
            if (err){
                res.status(500).send(err);
            }else if (result.length === 0){
                res.status(400).send("Password or user name is wrong");
            }else{
                console.log(result)
                res.status(200).send(result);
            }
        });
})

if (true){
    app.use(express.static("./frontend/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
    })
}


app.listen(PORT, () => console.log(`Example app listening at yaay http://localhost:${PORT}`));