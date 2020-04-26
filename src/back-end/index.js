const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const cors = require('cors')
const creds = require('./config')

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
})


router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.mail
  const subject = req.body.subject
  const message = req.body.message

  const content = `De: ${name} \nE-mail: ${email} \n${message} `

  const mail = {
    from: name,
    to: 'borsonnicolas@gmail.com',
    subject: subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3001)