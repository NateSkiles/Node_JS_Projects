import getHTMLFile from './body.js'
import { send } from './send.js'
import { RECIPIENT } from './send.js';
import { EMAIL } from './send.js'


// Message to be sent via transporter
const body = getHTMLFile();
const message = {
    from: EMAIL,
    to: RECIPIENT,
    subject: 'Sending this email via Node 👋🏻 V',
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

console.log(message)

send(message)
