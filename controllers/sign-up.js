const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/',  this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
    res.render('sign-up');
  },
  submit(req, res) {
    models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      private_key: '3dd1b57b93142c70f867a82944632e49919b070ce5cd1a65b8b5c0a7e5545ca9',
      public_key: '02edead06502a1f4507523b2edc2320b6732ae1cd2cde77930343d20691e194ff3',
    }).then((user) => {
      req.login(user, () =>
        res.redirect('/profile')
      );
    }).catch(() => {
      res.render('sign-up');
    });
  },
};
