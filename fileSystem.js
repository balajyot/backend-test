const fs= require('fs');
const path= require('path');

/*

Try to uncomment and check the code output

*/

// create a folder
/*
fs.mkdir(path.join(__dirname, '/newFolderName'),{}, function(err) {
    if(err) throw err;
    console.log('Folder created')
})


fs.mkdir(path.join(__dirname, '/newFolderName'),{}, (err) => {
    if(err) throw err;
    console.log('Folder created')
})*/
// open a file, create and write to file 
//also async
fs.writeFile(path.join(__dirname, '/newFolderName', 'newFileName.txt'),
"Just wrote it here in the new file", (err) => {
    if(err) throw err;
    console.log('file is written to')
})



// if you write again, the previous will be erased, hence use appendfile

fs.writeFile(path.join(__dirname, '/newFolderName', 'newFileName.txt'),"Just wrote it here in the new file", (err) => {
    if(err) throw err;
    console.log('file is written to');

    // append the file as a callback
    fs.appendFile(path.join(__dirname, '/newFolderName', 'newFileName.txt')," I love node js", (err) => {
    
        console.log("also appended")
    })
})

// read file

// if you dont put the utf-8, you will get some buffer code
// //// filepath, character encoding and he  callback()
fs.readFile(path.join(__dirname,'/newFolderName', 'newFileName.txt'), 'utf-8', (err,data)=> {
    if (err) throw err;
    console.log("Read data:")
    console.log(data)
}
);