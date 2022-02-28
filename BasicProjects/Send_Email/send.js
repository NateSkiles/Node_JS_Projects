import dotenv from 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'


// Import env
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const RECIPIENT = process.env.RECIPIENT;
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// Create a transporter which can be used to send emails
const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    name: "nateskiles.io",
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
})

// Sends an email using the preselected transport object
function send(message) {
    transporter.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(`Email Sent: ${info.response}
            Transporter: ${transporter}`)
        }
    })
}

export { EMAIL, RECIPIENT, send };