var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")


mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



// Schema Setup

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        name: "Granite Hill", 
        image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebb0b2d80f4b2d82f3587492b80e2321&auto=format&fit=crop&w=500&q=60",
        description: "This is a huge granite hill, no water or bathrooms"
    
    }, function(err, campground){
      if(err){
          console.log(err);
      } else {
          console.log("Newly Created Campground");
          console.log(campground);
      }
    });


app.get("/", function(req,res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds){
           if(err){
               console.log(err);
           } else {
               res.render("campgrounds", {campgrounds:allCampgrounds});
           }
        });
});

app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
     if(err){
         console.log(err);
     } else {
          // redirect back to campgrounds page
         res.redirect("/campgrounds");
     }
  });
 
  
});

// Create a New Campground
app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    //render show template with that campground
   res.send("This will be the SHOW PAGE one day!"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Yelp camp has started"); 
});