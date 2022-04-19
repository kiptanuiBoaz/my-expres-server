//fishlint esversion:6
const { request, response } = require("express");
const express= require ("express");

const app =express();

app.get("/",function(req,res){
res.send("<h1>Hello ,world</h1>");
});

app.get("/contact",function(req,res){
res.send("contact me at:boaserem022@gmail.com")
});

app.get("/about",function(req,res){
    res.send("<h5>kiptanui boaz</h5><br><p>moi university student</p><br><p>curently learning javascript</p>");
}); 

app.get("/hobbies",function(req,res){
res.send("<ul><li><h4>Hobbies</h4></li><li>Running</li><li>Swimming</li><li>Drinking</li></ul>");
});
app.listen(3000, function(){
    console.log("server started on port 3000");
});