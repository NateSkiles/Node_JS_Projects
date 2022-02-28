import dotenv from 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import chalk from 'chalk'


// Import env
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const RECIPIENT = process.env.RECIPIENT;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const NAME = process.env.NAME;

// Create a transporter which can be used to send emails
const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    name: NAME,
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
})

// Sends an email using the preselected transport object
function send(message) {
    return new Promise(resolve => {
        transporter.sendMail(message, function (err, info) {
            if (err) {
                console.log(chalk.red(err))
            } else {
                console.log(chalk.green(`Success! Email Sent. 📧\n`))
                resolve()
            }
        })
    })
}

export { EMAIL, RECIPIENT, send };