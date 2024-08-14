
const fs = require("fs");

//fs.writeFileSync("./readme.txt","hello");
//Asyncronised
//fs.writeFile("./readme.txt","   ",(err)=>{});

//console.log(fs.readFileSync("./readme.txt","utf8"));

//console.log(res);


fs.readFile("./readme.txt", "utf8", (err, res) => {
    if (err) {
        console.log("Error is", err);
    }
    else {
        console.log(res);
    }
});