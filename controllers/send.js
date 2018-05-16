const express = require('express');
const Redirect = require('../middlewares/redirect');
const exec = require('child_process').execFile;

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/',  this.index);
    router.post('/', this.send);

    return router;
  },
  index(req, res) {
    if(req.user)
      res.render('send', { user: req.user, success: req.flash('success') });
    else {
      res.redirect('/login');
    }
  },
  send(req, res) {
    console.log("PAYMENT SENT !!!");
    console.log("address: " + req.body.address);
    console.log("amount: " + req.body.amount);

    var postTransaction = function() {
      console.log("Sending a transaction for " + req.body.address);
      //The first parameter is the executable (the path starts from project root)
      //The second parameter is what gets passed to the executable
      //@param 1: user private key
      //@param 2: user public key
      //@param 3: senders address
      //@param 4: amount sent
      exec('./cpp/bin/send_txn.o',[req.user.private_key,req.user.public_key,req.body.address,req.body.amount],function(err,data) {
        console.log(err);
        console.log(data);
        //redirect user to profile page upon completion
        res.redirect("/profile");
      });
    }
   postTransaction();
  },
};
