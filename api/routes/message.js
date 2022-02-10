const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send('Леман Расс ЖОПОШНИК. Магнус Красный')
});

module.exports = router;
