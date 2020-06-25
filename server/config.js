const nodemailer = require('nodemailer');
require('dotenv').config();
//const hbs = require('nodemailer-express-handlebars');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.email, // your email address to send email from
    pass: process.env.mailPass // your gmail account password
  }
});

// transporter.use('compile', hbs({
//   viewEngine: 'express-handlebars',
//   viewPath: './views/'
// }));

module.exports = transporter;