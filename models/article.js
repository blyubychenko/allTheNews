
var mongojs = require('mongojs');

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

var Article = mongojs.model("Article", ArticleSchema);

module.exports = Article;