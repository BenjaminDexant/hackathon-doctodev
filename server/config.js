const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.email, // your email address to send email from
    pass: process.env.mailPass // your gmail account password
  }
});

module.exports = transporter;