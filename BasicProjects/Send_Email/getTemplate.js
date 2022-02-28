
import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'
import { fileURLToPath } from 'url';

function getPath() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, './template.html');
    return filePath
}
// console.log('directory-name 👉️', __dirname, `file-name 👉 ${__filename}`);

// Read File
export default function getHtmlTemplate() {
    let filePath = getPath();
    let source = fs.readFileSync(filePath, 'utf-8').toString();
    let template = handlebars.compile(source);
    return template
}