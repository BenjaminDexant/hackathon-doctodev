const path = require('path');
const express = require('express');
const transporter = require('./config');
require('dotenv').config()
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  const {type, nameCountry, soins, price, descriptif, cliniqueName, url_img_pays, city, flag, intro, qualite, doctor} = req.body.data
  try{
    const mailOptions = { 
      from: process.env.email,
      to: req.body.email,
      subject: "Voici les informations sur votre destination santé",
      html: `
      <div style="margin:auto; width:70% background-color:#f8f8ff">
        <h1 style="font-size:2rem">${nameCountry + flag}</h1>
        <img style="height:200px; margin: auto" src=${url_img_pays}></img>
        <h2 style="font-size:1.08rem">${type}</h2>
        <ul style="font-size:1.02rem">
          <li>Prestation : ${soins}</li>
          <li>Prix (brut*) : ${price}</li>
          <li>Ville : ${city}</li>
          <li>Nom de la clinique : ${cliniqueName}</li>
          <li>Docteur/Chirurgien : ${doctor}</li>
          <li>Notation : ${qualite}/100</li>
        </ul>
        <hr>
        <p style="font-size:1.05rem">${intro}</p>
        <p style="font-size:1.02rem">${descriptif}</p>
      </div>
      `,
      //template: "index"
    }
    transporter.sendMail(mailOptions, function(err, info){
      if (err){
        res.status(500).send({
          success:false,
          err: err
        })
      }else{
        res.send({
          success:true
        })
      }
    })
  } catch(error){
    res.status(500).send({
      success: false,
      err: error
    });
  }
});
app.listen(3000, () => {
  console.log('server start on port 3000');
});