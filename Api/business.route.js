const express = require('express');
const businessRoute = express.Router();
const multer = require('multer');
const crypto = require('crypto');
var path = require('path')



const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

const upload = multer({storage:storage})
// Require Business model in our routes module
let Business = require('./business.model');

// Defined store route
businessRoute.route('/add').post(upload.single('photo'),function (req, res) {
  let business = new Business({
    photo:req.file.path,
    pname:req.body.pname,
    price:req.body.price,
    desc:req.body.desc,
    offer:req.body.offer,
    delivery:req.body.delivery,
    inCart:req.body.inCart,
    Total:req.body.Total,
    count:req.body.count
  });
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoute.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoute.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
businessRoute.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});



module.exports = businessRoute;
