var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oresteeduardo81@gmail.com',
    pass: 'drcbisuuldkerhft'
  }
});

var mailOptions = {
  from: 'oresteeduardo81@gmail.com',
  to: 'joaopiresmachadonunes@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 