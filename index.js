require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Parse data
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Allow cross-origins
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/contact', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h1>Contact Information</h1>
        <h2>Details</h2>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li
        </ul>
        <h2>Message</h2>
        <p> ${req.body.message}</p>
        `
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            //TODO: find out why user & accesstoken don't work from .env file
            auth: {
                type: 'OAuth2',
                user: 'crystalyungwirth@gmail.com',
                clientId: process.env.EMAIL_CLIENT_ID,
                clientSecret: process.env.EMAIL_CLIENT_SECRET,
                refreshToken: process.env.EMAIL_REFRESH_TOKEN,
                accessToken: 'ya29.Glt3B1sR_v7zu8WweaqlPFfdbaN84E6PKKXj_6CWhUrFP9S-vhN6oFnlKxiJ9m7paBL0s7KzKR9AOgiJdfx9IQ5W7b2W34JtV76t1VjaSeUCOE3jeiTG_NCrog1A'
            }
        });

        let mailOptions = {
            from: req.body.name,
            to: 'crystalyungwirth@gmail.com',
            replyTo: req.body.email,
            subject: 'new message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) return console.log(err);
            console.log('success');
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))