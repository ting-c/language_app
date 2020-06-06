const functions = require('firebase-functions');
// const app = require('../src/server/server.js');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.api = functions.https.onRequest( 
  app.get("/", (req, res) => {
    
    //mock data
    const news = [
      {
        title: 'qwe1',
        imgUrl: ''
      },
      {
        title: 'qwe2',
        imgUrl: ''
      },
    ]
    res.send(news);
  })
);

