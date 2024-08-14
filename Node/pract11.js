const util = require('util');

// It is useful for the developers to debug & create more readable & maintainable code 
// It includes functions like formatting the string, Inspecting Object & Inheriting prototye methods.

const fs = require('fs');

const readFile = util.promisify(fs.readFile);
// To use with asyncronious and await

async function run(){
    try{

        const data = await readFile("log.txt","utf-8");
        //Formate a message usign util.message
        const message = util.format('filecontent %s',data);
        console.log(message);

        const inspectdata = util.inspect({filecontent:data},{colors:true,depth:null});
        //It is an object witch returns a string in readable formate for debugging
        console.log(inspectdata);
    }catch(error){
        console.error("Error:",error);
    }
    
}

run();