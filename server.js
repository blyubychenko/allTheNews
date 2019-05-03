var express = require("express");
var bodyParser = require("body-parser");
var mongojs = require('mongojs');
var Article = require("./models/article.js");
var request = require("request");





var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

var db = mongojs('mydb', ['mycollection'])




db.once("open", function() 
{
  console.log(" connection successful.");
});


require("./routes/api-routes.js")(app, db);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() 
{
  console.log("App running on port 3000!");
});
