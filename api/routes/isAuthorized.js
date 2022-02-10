const router = require('express').Router();

router.post('/', async (req, res) => {
  const isAuthorized = !!req.session.user;
  if (req.session.user) {
    const { user } = req.session;
    return res.json({ isAuthorized, user: user.username });
  }
  return res.json({ isAuthorized });
});

module.exports = router;
