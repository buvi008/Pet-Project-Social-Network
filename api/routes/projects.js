const router = require("express").Router();
const { Project, Tag } = require("./../db/models");

router.route("/find").get(async (req, res) => {
  console.log("projects==>", req.session);
  try {
    const project = await Project.findAll({
      where: { creator_id: req.session.user.id },
      raw: true,
    });
    return res.status(200).json(project);
  } catch (e) {
    return res.status(400).json(project);
  }
});

router.route("/create").post(async (req, res) => {
  console.log(req.body);
  let project;
  try {
    project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      short_description: req.body.short_description,
      creator_id: req.session.user.id,
    });
  } catch (error) {
    return res.json({
      isUpdateSuccessful: false,
      errorMessage: "Не удалось обновить запись в базе данных.",
    });
  }

  return res.json(project);
});
router.route("/tags").get(async (req, res) => {
  let tags;
  try {
    project = await Tag.findAll({ raw: true });
  } catch (error) {
    return res.json({
      isUpdateSuccessful: false,
      errorMessage: "Не удалось обновить запись в базе данных.",
    });
  }

  return res.json(tags);
});
router.put("/:title/addteam", async (req, res) => {
  let project;
  try {
    project = await Project.update({
      where: { title: req.params.title },
      returning: true,
      plain: true,
    });
  } catch (error) {
    return res.json({
      isUpdateSuccessful: false,
      errorMessage: "Не удалось обновить запись в базе данных.",
    });
  }

  return res.json({ isUpdateSuccessful: true, project: project });
});

router.delete("/:title", async (req, res) => {
  try {
    await Project.destroy({ where: { id: Number(req.params.title) } });
  } catch (error) {
    return res.json({
      isDeleteSuccessful: false,
      errorMessage: "Не удалось удалить запись из базы данных.",
    });
  }

  return res.json({ isDeleteSuccessful: true });
});

router.put("/:id/edit", async (req, res) => {
  let project;
  console.log(req.body);
  try {
    project = await Project.update(
      {
        title: req.body.title,
        description: req.body.description,
        short_description: req.body.short_description,
      },
      { where: { id: Number(req.params.id) }, returning: true, plain: true }
    );
  } catch (error) {
    return res.json({
      isUpdateSuccessful: false,
      errorMessage: "Не удалось обновить запись в базе данных.",
    });
  }

  return res.json({ isUpdateSuccessful: true, project: project });
});

router.route("/:id").get(async (req, res) => {
  const id = Number(req.params.id);

  const project = await Project.findOne({
    where: { id: id },
    returning: true,
    plain: true,
  });
  console.log(project.dataValues);
  return res.json(project.dataValues);
});

module.exports = router;
