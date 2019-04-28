require("dotenv").config();

// Packages/modules
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");


var keys = require("./keys.js");
var song = new Spotify(keys.spotify);
var argv = process.argv;
var argv2 = argv[2];


//Multiple word search
var queryName = " ";

for (var i = 3; i < argv.length; i++) {
    if (i > 3 && i < argv.length) {
        queryName = queryName + "+" + argv[i];
    }
    else {
    queryName += argv[i];
    }
};

console.log(queryName);


// This will allow user to search from action called (spotify-this-song, movie-this, do-what-it-says)

switch (argv2) {

    case "concert-this":
        concert();
        break;
        
    case "spotify-this-song":
        songSearch();
        break;

    case "movie-this":
        movieSearch();
        break;

    case "do-what-it-says":
        doWhat();
        break;
};


// Search songs

function songSearch() {

    song.search({ type: 'track', query: queryName }, function(error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        
        var songs = data.tracks.items;
        console.log("Artist: " + songs[0].artists[0].name);
        console.log("Song Name: " + songs[0].name);
        console.log("Preview Link: " + songs[0].preview_url);
        console.log("Album: " + songs[0].album.name);
    })
};


// Search movies

function movieSearch() {

var queryUrl = "http://www.omdbapi.com/?t=" + queryName + "&apikey=8d78771";

console.log(queryUrl);

axios.get(queryUrl)
    .then(function(response) {

        console.log("Title: " + response.data.Title);
        console.log("Release Date: " + response.data.Released);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Cast: " + response.data.Actors);
        console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].Value);
    });
};


//do what it says

function doWhat() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        var array = data.split(",");
        argv = array;
        argv2 = array[0];
        queryName = array[1];

        console.log(array[0]);
        console.log(array[1]);

        if (argv2  == "spotify-this-song") {
            songSearch();
        }
        if (argv2  == "movie-this") {
            movieSearch();
        }
    });
};
