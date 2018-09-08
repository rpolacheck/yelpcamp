var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
   var campgrounds = [
        {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c8fc5a023e80b24f9fa26451a3c52cc&auto=format&fit=crop&w=1050&q=80"},
        {name: "Granite Hill", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=500&q=60"},
        {name: "Camp Mountain Goat", image: "https://images.unsplash.com/photo-1532115599357-443f70b59086?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb3a2edcd6538e7fbd9256727a0f121e&auto=format&fit=crop&w=700&q=60"}
    ]
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Yelp camp has started"); 
});