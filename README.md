# LIRI-Bot
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a_Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## LIRI uses the following commands:
```
spotify-this-song, movie-this, do-what-it-says
```

## Technologies used:

1. Node.js
2. Javascript

## npm packages: 

1. Spotify
2. Request
3. dotenv
4. axios

## How to Run LIRI-Bot

* Step One: node liri spotify-this-song ```song name here```.
	
	This will show the following information about the song in your terminal/bash window: 
	* Artist 
	* Song Name 
	* Preview Link (might be avaliable for certain songs)
	* Album


* Step Two: node liri.js movie-this ```movie name here```.
	
	This will output the following information to your terminal/bash window:
	* Title
	* Released Date
	* IMDB Rating
	* Country
	* Language
	* Plot
	* Cast
	* Rotten Tomatoes Score
	

* Step Three: node liri.js do-what-it-says

	This will output the command placed in random.txt file

## Problems faced:

1. Had hard time understanding the dot in front of files that we dont want to be tracked such as `.env`
2. Forgot to install certain npm packages before running the code
3. I requested API key for Bandsintown yesterday. They had asked me to provide details about why I needed the API key. They asked me to send what school I attend, teachers full name and email address inorder to get the API key. I provided that information last night but I still have not gotten anything back. I was not able to work on command `concert-this`



## Author
 **Harsh Patel** 


