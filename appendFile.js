const fs= require('fs');
const path= require('path');

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
fs.writeFile(path.join(__dirname, '/newFolderName', 'newFileName.txt'),"Just wrote it here in the new file", (err) => {
    if(err) throw err;
    console.log('file is written to');

    // append the file as a callback
    fs.appendFile(path.join(__dirname, '/newFolderName', 'newFileName.txt')," I love node js", (err) => {
    
        console.log("also appended")
    })
})


// if you write again, the previous will be erased, hence use appendfile