const axios = require("axios");
const _ = require("lodash");
const router = require("express").Router();

// Fetch # commits per user
//
async function fetchGithubData(githubHandle) {
  let authStr = `Bearer ${OAUTH_TOKEN}`;

  return await axios
    .get(`https://api.github.com/users/cgoez/events/public`, {
      Authorization: authStr
    })
    .then(res => {
      const data = res.data;

      return _.chain(data)
        .filter(obj => obj.type === "PushEvent")
        .map(e => e.payload.commits)
        .flatMap()
        .map(item => item.message)
        .value();
    })
    .catch(err => console.log(err));
}

// Int storage var
let storage;

// Fetch Github data every 10s
setInterval(async () => {
  console.log("Fetching github data");
  storage = await fetchGithubData();
  console.log("Finished");
}, 10000);

//
router.get("/", async (req, res) => {
  res.send(storage);
});

module.exports = router;
