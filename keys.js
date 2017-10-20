


const twitterKeys = {
  consumer_key: '<TLZUpnrYOh4zUWfRyshNFelX1>',
  consumer_secret: '<5AlzyRxPtqCerP9qYuvLlgUZRc8CT7LHjA9Z2L6fn5GHuJLNHM>',
  access_token_key: '<918502052338323456-LNdTZXD3mUcadhJYtcPAM4wJnUxjK6l>',
  access_token_secret: '<41ta0QyA3I36gdtcxNelyfFnxkvf2x8aELAYPD0DYLdKK>',
}

setTimeout(function(str1) {
  console.log(str1 + " " );
}, 2000, "Twitter API has successfully loaded.");

const spotifyKeys = {
  client_id: "7d9bb11c7f664241b5f7ba918d92ea24",
  client_secret: "8b81b3790d4b4facae481b9b0c9324cf",
}

setTimeout(function(str2) {
  console.log(str2 + " ");
}, 2000, "Spotify API has successfully loaded");

const omdbKeys = {
  omdb_key: '40e9cece'
}

setTimeout(function(str3) {
  console.log(str3 + " " );
}, 2000, "OMDB API has successfully loaded");

module.exports = {
  twitterKeys,
  spotifyKeys,
  omdbKeys
};
