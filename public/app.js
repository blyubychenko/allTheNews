import axios from "axios";

var APIkey = "967bbeeec1d94109a8ea018027af616b";

var helpers = {
  runQuery: (location) => {
    console.log(location);
    // Figure out news
    var queryURL = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-03&sortBy=publishedAt&apiKey=" + APIkey;
    return axios.get(queryURL).then((response) => {
      console.log(response);
      return response.data.results[0].formatted;
    });
  },
  
  saveSearch: function(searchInfo){
    console.log("search info is: " + JSON.stringify(searchInfo));
    return axios.post("/search", searchInfo);
  },

  getSearches: function()
  {
    return axios.get("/search");
  }
};
