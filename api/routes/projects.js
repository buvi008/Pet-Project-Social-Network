const router = require('express').Router();
const { Project } = require('./../db/models');

router.route('/find').get(async (req, res) => {
  try {
    const project = await Project.findAll({ raw: true });
    return res.json(project);
  } catch (e) {
    console.log(e);
  }

 
});

router.route('/create').post(async (req, res) => {
  let project;
  try {
    project = await project.create({
      title: req.body.title,
      description:  req.body.description,
      short_description:  req.body.short_description,
      creator_id: req.body.creator_id,
    });
  } catch (error) {
    return res.json({
      isUpdateSuccessful: false,
      errorMessage: 'Не удалось обновить запись в базе данных.',
    });
  }

  return res.json(project);
});

router.put('/:title/addteam', async (req, res) => {
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
      errorMessage: 'Не удалось обновить запись в базе данных.',
    });
  }

  return res.json({ isUpdateSuccessful: true, project: project });
});

router.delete('/:title', async (req, res) => {
  try {
    await Entry.destroy({ where: { title: req.params.title } });
  } catch (error) {
    return res.json({
      isDeleteSuccessful: false,
      errorMessage: 'Не удалось удалить запись из базы данных.',
    });
  }

  return res.json({ isDeleteSuccessful: true });
});

router.put('/:title/edit', async (req, res) => {
  let project;
  try {
    project = await project.update(
      {
        description: XXXX,
        short_description: XXXXX,
        creator_id: XXXX,
      },
      { where: { title: req.params.title }, returning: true, plain: true }
    );
  } catch (error) {
    return res.json({
      isUpdateSuccessful: false,
      errorMessage: 'Не удалось обновить запись в базе данных.',
    });
  }

  return res.json({ isUpdateSuccessful: true, project: project });
});

router.route('/:title').get(async (req, res) => {
  const title = req.params.title;

  const project = await Project.findOne({ where: { title: title } });
  return res.json(project);
});

module.exports = router;
