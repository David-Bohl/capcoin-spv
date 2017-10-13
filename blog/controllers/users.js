const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:username', this.show);

    return router;
  },
  index(req, res) {
    models.User.findAll({
    }).then((allUsers) => {
      res.render('users', { allUsers });
    });
  },
  show(req, res) {
    models.User.findOne({
      where: {
        username: req.params.username,
      },
      include: [{
        model: models.Post,
      }],
    }).then((user) => {
      if(user) {
        res.render('users/single', { user: user, allPosts: user.posts });
      } else {
        res.redirect('/users');
      }
    }).catch(() => {
      res.redirect('/users');
    });
  },
};
