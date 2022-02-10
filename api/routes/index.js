const router = require("express").Router();
const { project } = require('./../db/models');


router.route("/").get((req, res) => {
  const project = await project.findAll({});
  return res.json(project);
});

module.exports = router;
