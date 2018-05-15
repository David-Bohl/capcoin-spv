const express = require('express');
const Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);
    router.post('/', this.checkBalance);

    return router;
  },
  index(req, res) {
    res.render('profile', { user: req.user, success: req.flash('success') });
  },
  checkBalance(req, res) {
    console.log("REQUESTING BALANCE for: " + "02edead06502a1f4507523b2edc2320b6732ae1cd2cde77930343d20691e194ff3");
    // console.log("address: " + req.body.address);
    // console.log("amount: " + req.body.amount);
    res.redirect('/profile');
    
  },
};
