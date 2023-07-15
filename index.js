import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';


inquirer
  .prompt([
    {
      message: "type your url:",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("i_love_qr.png"));
    fs.writeFile('url.txt',url,(err)=>{
        if(err) throw err;
        console.log("the file has been saved!");
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
