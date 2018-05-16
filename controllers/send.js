const express = require('express');
const Redirect = require('../middlewares/redirect');
const exec = require('child_process').execFile;

function sendTxn(prk, pbk, to, amt) {
  exec('./cpp/bin/send_txn.o', [prk, pbk, to, amt], function(err, data) {
       if(err) console.log(err);
       else {
         console.log(data.toString());
       }
   });
}

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
    sendTxn(req.user.dataValues.private_key, req.user.dataValues.public_key,
            req.body.address, req.body.amount);
    res.redirect('/profile');
  },
};
