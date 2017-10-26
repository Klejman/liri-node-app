# liri-node-app
LIRI Command Line Node.js App

 The data powering this app are Twitter, Spotify and OMDB APIs.

Following node liri.js add one of the following commands...

    * `my-tweets`
    //This will show my last 20 tweets and when they were created in your terminal/bash window.

    * `spotify-this-song`
    // This will generate the following details regarding the song you entered into the terminal...
           1. Artist(s)

           2. The song's name

           3. A preview link of the song from Spotify

           4. The album that the song is from

         * Note: If you do not enter in a song this program will default to "The Sign" by Ace of Base. Which in my opinion is a pretty awesome song so if you haven't heard this song before you might want to intentionally default to this and check it out!

    * `movieInfoOnDemand`
    // This will generate the following information regarding the movie you entered ...
             1. Title of the movie.
             2. Year the movie came out.
             3. IMDB Rating of the movie.
             4. Rotten Tomatoes Rating of the movie.
             5. Country where the movie was produced.
             6. Language of the movie.
             7. Plot of the movie.
             8. Actors in the movie.
             * Note: If you do not enter in a movie title the default movie is Mr. Nobody which eek brought in $3,500 domestically. Yes you read that right! Learn more by intentionally defaulting or enter in Mr. Nobody.

    * `do-what-it-says`
    // Using the `fs` Node package, my LIRI app will take the text inside of random.txt and then use it to call one of LIRI's commands. Spoiler alert it will run `spotify-this-song` for "I Want it That Way,"

  Thanks for taking the time to read the documentation and enjoy this notQuiteSiri app.



