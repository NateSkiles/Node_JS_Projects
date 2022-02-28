import getHtmlTemplate from './getTemplate.js'
import { send, RECIPIENT, EMAIL } from './send.js';

// Get HTML Message from template.html
const body = getHtmlTemplate();
// Message to be sent via transporter
const message = {
    from: EMAIL,
    to: RECIPIENT,
    subject: 'Sending this email via Node 👋🏻 FINAL',
    html: body(),
    attachments: [{
        fileName: 'linkedin2x.png',
        path: './images/linkedin2x.png',
        cid: 'linkedin@nateskiles.io'
    },
    {
        fileName: 'website2x.png',
        path: './images/website2x.png',
        cid: 'website@nateskiles.io'
    },
    {
        fileName: 'cloud.png',
        path: './images/cloud.png',
        cid: 'cloud1@nateskiles.io'
    }]
}

send(message).then(
    console.log(
        `To: ${message.to} \nFrom: ${message.from}\nSubject: ${message.subject}`
    )
)
