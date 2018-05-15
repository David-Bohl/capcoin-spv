const express = require('express');
const Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/',  this.index);
    router.post('/', this.send);

    return router;
  },
  index(req, res) {
    res.render('send', { user: req.user, success: req.flash('success') });
  },
  send(req, res) {
    console.log("PAYMENT SENT !!!");
    console.log("address: " + req.body.address);
    console.log("amount: " + req.body.amount);
    res.redirect('/profile');
  },
};
