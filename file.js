
const fs = require('fs');

fs.writeFile("firstWriteFile.pdf", "this is pdf file", (err) => {
    if (err) {
        console.log("Error Occured: ", err)
    } else {
        console.log("File Created Successfully");
    }
})