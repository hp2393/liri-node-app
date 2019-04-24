# LIRI-Bot
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a_Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## LIRI uses the following commands:
```
my-tweets, spotify-this-song, movie-this, do-what-it-says
```

## Technologies used:

1. Node.js
2. Javascript

## npm packages: 

1. [spotify](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify REST API.
2. [request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
3. [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

## How to Run LIRI-Bot

* Step One: node liri spotify-this-song ```<song name here>```.
	
	This will show the following information about the song in your terminal/bash window: 
	* Artist(s) 
	* The song's name 
	* A preview link of the song from Spotify 
	* The album that the song is from

	If no song is provided then the program will default to
	"My Heart Will Go On" by Celine Dion
* Step Two: node liri.js movie-this ```<movie name here>```.
	
	This will output the following information to your terminal/bash window:
	* Title of the movie.
	* Year the movie was released.
	* IMDB Rating of the movie.
	* Country where the movie was produced.
	* Language of the movie.
	* Plot of the movie.
	* Actors in the movie.
	* Rotten Tomatoes Rating.
	* Rotten Tomatoes URL.
	
	If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'

* Step Three: node liri.js do-what-it-says

	This will output the command placed in random.txt file

## Problems faced:

1. Had hard time understanding the dot in front of files that we dont want to be tracked such as `.env`
2. Forgot to install certain npm packages before running the code
3. I requested API key for Bandsintown yesterday. They had asked me to provide details about why I needed the API key. They asked me to send what school I attend, teachers full name and email address inorder to get the API key. I provided that information last night but I still have not gotten anything back. I was not able to work on command `concert-this`



## Author
 **Harsh Patel** 


