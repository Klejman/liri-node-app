const fs = require("fs");

const keys = require("./keys.js");

//twitter,spotify, request required HERE
let Twitter = require("twitter");
let Spotify = require("node-spotify-api");
let Request = require("request");

// user generated response based on input
let userRequest = process.argv[2];
let userInput = "";
for (let i = 3; i < process.argv.length; i++) {
  userInput = userInput + " " + process.argv[i];
}

let userInputMovie = "";
for (let i = 3; i < process.argv.length; i++) {
  userInputMovie = userInputMovie + process.argv[i] + "+";
}

//execute defaults if nothing entered by user
let song = "";
if (process.argv.length < 4 && process.argv[2] !== "do-what-it-says") {
  song = "The Sign Ace of Base";
}
else {
  song = userInput;
}


let movie = "";
if (process.argv.length < 4 & process.argv[2] !== "do-what-it-says") {
  movie = "mr+nobody";
}
else {
  movie = userInputMovie;
}

let omdbURL = "http://www.omdbapi.com/?apikey=" + keys.omdbKeys.omdb_key + "&t=" + movie;


switch (userRequest) {

  case "my-tweets":
    myTweets();
    break;

  case "spotify-this-song":
    spotifyThis();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    exeDefault();
    break;
}


//my-tweets function
function myTweets() {

  let twitter = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
  });

  let params = {screen_name: "katieMary"};

  twitter.get("statuses/user_timeline", params, function (err, tweets, response) {
    if (err) {
      console.log(err);
    }
    if (!err) {
      for (let i = 0; i < tweets.length && i <= 20; i++){

        console.log(" I don't tweet but when I do I tweet 20 messages in bulk...and apparently need to know when I tweeted them. Without further ado your Tweet alibi  ");
        console.log(" ");
        console.log("---------------------------------------------------");
        console.log(tweets[i].text);
        console.log("Tweet tweeted at : " + tweets[i].created_at);
        console.log(" ");
        console.log("---------------------------------------------------");
      }
    }
  })
}

//spotify-this-song function
function spotifyThis() {

  let spotify = new Spotify({
    id: keys.spotifyKeys.client_id,
    secret: keys.spotifyKeys.client_secret
  });

  spotify.search({type: "track", query: song}, function (err, data) {
    if (err) {
      return console.log("What, what, what, what, what, what, what, wait...yep here is the problem : " + err);
    }
    console.log(" ");
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);

    console.log("Title: " + data.tracks.items[0].name);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("Listen here: " + data.tracks.items[0].external_urls.spotify);
  });
}

//movie-this function
function movieThis() {

  Request(omdbURL, function (err, res, body) {
    if (err){
      return console.log("Sorry, something went wrong. A team of highly trained monkeys has been dispatched to deal with this situation. If you see them, show them this information: " + err);
    }

    console.log(JSON.parse(body));
    let rottenTomatoes = "NA";

    for (let i = 0; i < JSON.parse(body).Ratings.length; i++){
      if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes"){
        rottenTomatoes = JSON.parse(body).Ratings[i].Value;
      }
    }

    console.log("---------------------------------------------------");
    console.log("Film Title: " + JSON.parse(body).Title);
    console.log("Oh I love this movie!");
    console.log(" What year did that come out in ? ");
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log(" Oh that's right ");
    onsole.log("---------------------------------------------------");
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + rottenTomatoes);
    onsole.log("---------------------------------------------------");
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("---------------------------------------------------");

  });
}

function exeDefault() {
  fs.readFile("random.txt","utf8",function(err, data){

    if (err) {
      return console.log(err);
    }

    let dataArr = data.split(",");
    let commandArr = [];
    let queryArr = [];


    for (let i = 0; i < dataArr.length; i){
      commandArr.push(dataArr[i]);
      i += 2;
    }

    for (let i = 1; i < dataArr.length; i){
      queryArr.push(dataArr[i]);
      i += 2;
    };

    let randomNumber = Math.round(Math.random() * (commandArr.length));

    let randomCommand = commandArr[randomNumber];
    console.log(randomCommand);

    let randomQuery = queryArr[randomNumber];
    console.log(randomQuery);

    if (randomCommand === "spotify-this-song"){
      song = randomQuery;
      spotifyThis();
    }
    else if (randomCommand === "movie-this"){
      movie = randomQuery;
      omdbURL = "http://www.omdbapi.com/?apikey=" + keys.omdbKeys.omdb_key + "&t=" + movie;
      movieThis();
    }
  })
}


