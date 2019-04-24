require("dotenv").config();

//variables
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
//var Spotify = require('spotify-web-api-node');
var Spotify = require('node-spotify-api');

//argv[2] chooses users actions; argv[3] is input parameter, ie; movie title
var userCommand = process.argv[2];
var secondCommand = process.argv[3];

//concatenate multiple words in 2nd user argument
for (var i = 4; i < process.argv.length; i++) {
    secondCommand += '+' + process.argv[i];
}

// Getting Spotify Keys
var spotify = new Spotify(keys.spotify);
// Function for running a Spotify search
var getSpotify = function () {
    if (!secondCommand) {
        secondCommand = "I Want it That Way";
    }
    console.log("getting info" + secondCommand);

    spotify.search(
        {
            type: "track",
            query: secondCommand
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists[0].name);
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

//Switch command
function mySwitch(userCommand) {
    //choose which statement (userCommand) to switch to and execute
    switch (userCommand) {
        case "spotify-this-song":
        getSpotify();
        break;

        case "do-what-it-says":
        doWhat();
        break;

        case "movie-this":
        getMovie();
        break;
    }

    //OMDB Movie: movie-this
    function getMovie() {
        // OMDB Movie - this MOVIE base code is from class files, I have modified for more data and assigned parse.body to a Var
        var movieName = secondCommand;
        // Then run a request to the OMDB API with the movie specified
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=8d78771";
        console.log(queryUrl)

        request(queryUrl, function (error, response, body) {

            // If the request is successful = 200
            if (!error && response.statusCode === 200) {
                var body = JSON.parse(body);
                console.log('================ Movie Info ================');
                console.log("Title: " + body.Title);
                console.log("Release Year: " + body.Year);
                console.log("IMdB Rating: " + body.imdbRating);
                console.log("Country: " + body.Country);
                console.log("Language: " + body.Language);
                console.log("Plot: " + body.Plot);
                console.log("Actors: " + body.Actors);
                console.log("Rotten Tomatoes Rating: " + body.Ratings[2].Value);
                console.log("Rotten Tomatoes URL: " + body.tomatoURL);
                console.log('==================THE END=================');
            } else {
                //else - throw error
                console.log("Error occurred.")
            }
            //Response if user does not type in a movie title
            if (movieName === "Mr. Nobody") {
                console.log("-----------------------");
                console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
                console.log("It's on Netflix!");
            }
        });
    }

    //Function for command do-what-it-says
    function doWhat() {
        //Read random.txt file
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (!error);
            console.log(data.toString());

            //split text with comma 
            var split = data.toString().split(',');
        });
    }
}
//Call mySwitch function
mySwitch(userCommand);