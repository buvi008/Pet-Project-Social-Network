const router = require("express").Router();
const bcrypt = require("bcrypt");
const axios = require("axios");
const { User } = require("../db/models");
const { Octokit } = require("@octokit/core");

const salt = process.env.SALT;

router.route("/").post(async (req, res) => {
  const { username, email, password } = req.body;

  const userInDatabase = await User.findOne({ where: { email } });

  if (userInDatabase) {
    res
      .status(403)
      .json({ registration: false, message: "Этот email уже используется" });
  } else {
    try {
      const user = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, Number(salt)),
      });

      req.session.user = user;

      res.status(201).json({ registration: true, user: user.username });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});

router.route("/oauth-callback").get(({ query: { code } }, res) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };
  const opts = { headers: { accept: "application/json" } };
  axios
    .post("https://github.com/login/oauth/access_token", body, opts)
    .then((_res) => _res.data.access_token)
    .then(async (token) => {
      // eslint-disable-next-line no-console
      // console.log("My token:", token);
      const octokit = new Octokit({ auth: token });
      console.log(octokit);
      const response = await octokit.request("GET /user", {
        org: "buvi008",
        type: "private",
      });
      // console.log(response);
      res.redirect(`/?token=${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

module.exports = router;
