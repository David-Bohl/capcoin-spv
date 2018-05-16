const express = require('express');
const models = require('../models');
const exec = require('child_process').execFile;

function genUser(req, res) {
  exec('./cpp/bin/gen_keys.o', function(err, data) {
       if(err) console.log(err);
       let x = data.toString().slice(0, -1).split("\n");
       console.log(x);
       createUser(req, res, x[0], x[1]);
   });
}

function createUser(req, res, prk, pbk) {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    private_key: prk,
    public_key: pbk,
    balance: 0,
  }).then((user) => {
    req.login(user, () =>
      res.redirect('/profile')
    );
  }).catch(() => {
    res.render('sign-up');
  });
}

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
    genUser(req, res);
  },
};
