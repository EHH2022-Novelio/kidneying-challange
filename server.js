const express = require("express");
const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true}, ()=>{
	console.log("connected");
});

const userSchema = new mongoose.Schema({
    username: {required:true, type:String, unique: true, min:3},
    keys: {type: [{type: mongoose.Schema.ObjectId, ref: "keys", default:[]}]},
    verified: {type: Boolean, default: false},
    passwordCode: String,
    verificationCode: String,
});

const User = mongoose.model("users", userSchema);

app.use(express.json());

app.use(express.urlencoded());

if (true){
    app.use(express.static("./public/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
    })
}


app.listen(PORT, () => console.log(`Example app listening at yaay http://localhost:${PORT}`));