var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oresteeduardo81@gmail.com',
    pass: 'dtdemceqzrcydrqt'
  }
});

var mailOptions = {
  from: 'oresteeduardo81@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Oreste, Turma 2B password dtdemceqzrcydrqt'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 