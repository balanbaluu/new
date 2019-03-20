const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute = require('./business.route');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://balanbaluu:'+ process.env.MONGO_ATLAS_PW +'@node-rest-shop-shard-00-00-6cwwl.mongodb.net:27017,node-rest-shop-shard-00-01-6cwwl.mongodb.net:27017,node-rest-shop-shard-00-02-6cwwl.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true',
  { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'))
app.use('/business', businessRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
