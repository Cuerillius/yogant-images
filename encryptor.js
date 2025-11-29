import fs from 'fs';
import CryptoJS from 'crypto-js';

const YOUR_SECRET_KEY = "secret_key_goes_here";
const INPUT_IMAGE = "input.jpg";
const OUTPUT_FILE = "output.txt";

const imageBitmap = fs.readFileSync(INPUT_IMAGE);
const imageBase64 = imageBitmap.toString('base64');
const dataUrl = `data:image/jpeg;base64,${imageBase64}`;

const encrypted = CryptoJS.AES.encrypt(dataUrl, YOUR_SECRET_KEY).toString();

fs.writeFileSync(OUTPUT_FILE, encrypted);

console.log(`Success! Upload ${OUTPUT_FILE} to your hosting provider.`);