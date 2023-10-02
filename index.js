/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer'
import qrImage from 'qr-image'
import fs from 'fs'
inquirer
    .prompt({
        type: 'input',
        name: 'url',
        message: 'enter a url to convert to QR code: '
    })
  .then((answers) => {
      // Use user feedback for... whatever!!
      const qrCode = qrImage.image(answers.url, { type: 'png' });
      qrCode.pipe(fs.createWriteStream('qrcode.png')); // Save the QR code as an image
      console.log('QR code generated successfully.');
      
      fs.writeFile("URL.txt", answers.url, function (err) {
    if (err) throw err;
    console.log("message delivered successfully");
});
  })
  .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error("enter a url to convert to QR code")
        
    } else {
        // Something else went wrong
       console.error("invalid input")
    }
  });


// const fs = require("fs")
  
// const urlFile=fs.readFile("./URL.txt", "UTF8", (err, data) => {
//     if (err) throw err;
//     return data;
// });
