const axios = require("axios");
const _ = require("lodash");

// Fetch # commits per user
//
async function fetchGithubData(githubHandle) {
  return await axios
    .get(`https://api.github.com/users/${githubHandle}/events/public`)
    .then(res => {
      const data = res.data;

      return _.chain(data)
        .filter(obj => obj.type === "PushEvent")
        .map(e => e.payload.commits)
        .flatMap()
        .map(item => item.message)
        .value();
    });
}

