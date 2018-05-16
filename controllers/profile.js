const express = require('express');
const Redirect = require('../middlewares/redirect');
const exec = require('child_process').execFile;
const models = require('../models');

function checkBalance(req, res) {
  console.log("REQUESTING BALANCE for: " + req.user.public_key);
  // console.log("address: " + req.body.address);
  // console.log("amount: " + req.body.amount);

  // A function that will create a process to run the balance.o executable to retrieve the balance from the server
  var getBalance = function() {
    console.log("Get Balance called for " + req.user.public_key);

    //The first parameter is the executable (the path starts from project root)
    //The second parameter is what gets passed to the executable
    exec('./cpp/bin/balance.o',[req.user.public_key],function(err,data) {
      //Update profile database model with balance
      //data.toString() contains the balance
      console.log(data.toString());
      models.User.update({balance: data.toString()},{where:{private_key:req.user.private_key}})
        .then(result => {
            //console.log(err);
            console.log(result);
            //redirect user to profile
            // res.redirect('/profile');
            res.render('profile', { user: req.user, success: req.flash('success') });
          }
        );
    });
  }
  getBalance();
}

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);
    router.post('/', checkBalance);

    return router;
  },
  index(req, res) {
    // res.render('profile', { user: req.user, success: req.flash('success') });
    checkBalance(req, res);
  },
};
