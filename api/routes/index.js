const router = require('express').Router();
const { Project } = require('./../db/models');

router.route('/').get(async (req, res) => {
  const project = await Project.findAll({ raw: true });
  console.log('index ==>', req.session);
  return res.json(project);
});

module.exports = router;
