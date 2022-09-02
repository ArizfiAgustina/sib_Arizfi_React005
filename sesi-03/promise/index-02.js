import fetch from "node-fetch";

const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
const tweet = await response.json();
console.log(tweet);

const fetchTweets = async () => {
  const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
  const tweet = await response.json();
  console.log(tweet);
};

fetchTweets();

async () => {
  const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
  const tweet = await response.json();
  console.log(tweet);
};
