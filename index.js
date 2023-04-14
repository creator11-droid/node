// code to display hello world//
// const Show ='hello world'

// console.log(Show)

//code to create a server //

// const http = require('node:http') ;

// const server = http.createServer((req, res)=>{
// res.writeHead(200, {'content-type': 'text/plain'})
// res.end('Hello Node')
// })

// server.listen(3000, () =>{
//     console.log('server running on local host 3000')
// })

// task 3//

// const fs = require('node:fs/promises') 
// fs.readFile('welcome.txt', 'utf-8')
// .then( data=> console.log(data))
// .catch( error => console.log(error))

//task 4//

// const generator = require('generate-password') 
// const password = generator.generate({
//     length:10,
//     number:true
// })
// console.log(password)

// task5

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
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
