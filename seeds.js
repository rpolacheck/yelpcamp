var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloudy Peaks",
        image: "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=384a51f2b8eaff486e080f101afc8192&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Bob National Park",
        image: "https://images.unsplash.com/photo-1531116495593-07e38d7f4872?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afb5b3ec665f8daeae1a81f2e9322bfd&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    { 
        name: "Yosemite",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    } 
    
]

function seedDB(){
    /// Remove all campgrounds
    Campground.remove({}, function(err){
       if(err) {
           console.log(err);
       } 
        console.log("removed campground");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err)
               } else {
                   console.log("added a campground");
                   // create a comment
                   Comment.create(
                       {
                           text: "This place is great, but I wish there was internet",
                           author: "Bob"
                       }, function(err, comment){
                           if(err){
                               console.log(err)
                           } else {
                               campground.comments.push(comment);
                               campground.save();
                               console.log("created new comment");
                           }
                       });
               }
            }); 
        });
    
    });
    
    //add a few comments
}





module.exports = seedDB;