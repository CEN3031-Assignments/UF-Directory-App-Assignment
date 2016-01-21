/* Fill out these functions using Mongoose queries*/
var config = require('./config');
var mongoose = require('mongoose');
var Listing = require('./ListingSchema.js')
/* Connect to your database */
mongoose.connect(config.db.uri, function(err){
  if(err){
    throw err;
  }
});

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({'code' : 'LBW'}, function(err,list){
    if (err){
      throw err;
    }
    console.log(list);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.remove({'code' : 'CABL'}, function(err,list){
    if (err){
      throw err;
    }
  });

};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  var date = new Date();    
  Listing.update({'address':'701 N Broadway, Sleepy Hollow, NY 10591, United States'},{$set:{'address':'100 Phelps Lab P.O. Box 116350, Gainesville, FL  32611'}}, function(err, list){
    if (err){
      throw err;
    }
    console.log(list);
  });

  Listing.update({'code':'PHL'},{$set:{'updated_at': date}}, function(err, list){
    if (err){
      throw err;
    }
    console.log(list);
  });

  Listing.findOne({'code' : 'PHL'}, function(err,list){
    if (err){
      throw err;
    }
    console.log(list);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

  Listing.find({}, function(err,list){
    if (err){
      throw err;
    }
    console.log(list);
  });

};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
