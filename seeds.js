var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");






function seedDB(){
    Campground.remove({}, function(err){
       if(err) {
           console.log(err);
       } 
        console.log("removed campground");
    });
}





module.exports = seedDB;