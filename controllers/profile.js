const express = require('express');
const Redirect = require('../middlewares/redirect');
const exec = require('child_process').execFile;

function getBalance(req, res) {
  exec('./cpp/bin/balance.o', [req.user.dataValues.public_key], function(err, data) {
       if(err) console.log(err);
       req.user.dataValues.balance = parseFloat(data.toString());
       res.render('profile', { user: req.user, success: req.flash('success') });
   });
}

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);
    router.post('/', this.checkBalance);

    return router;
  },
  index(req, res) {
    // res.render('profile', { user: req.user, success: req.flash('success') });
    getBalance(req, res);
  },
  checkBalance(req, res) {
    // console.log("address: " + req.body.address);
    // console.log("amount: " + req.body.amount);
    res.redirect('/profile');

  },
};
