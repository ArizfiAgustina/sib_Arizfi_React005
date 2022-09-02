import fetch from "node-fetch";

fetch("https://fake-tweets-api.herokuapp.com/posts")
  .then((response) => response.json())
  .then((myJson) => console.log(myJson))
  .catch((err) => console.error(err));
