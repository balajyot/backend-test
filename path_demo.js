const path= require('path');

console.log(" This is filename: ")

console.log(__filename)

console.log("This is current directory")
console.log(__dirname)


// base file name
console.log(path.basename(__filename)); // jsut give the filename

//dir file name
console.log(path.dirname(__filename)); // just the directory name

console.log(path.extname(__filename)); // get the extension of filename

// all in one
console.log(path.parse(__filename));  

// we can use any of the property from the parse
console.log(path.parse(__filename).name);

// we can concatenate  paths as well
// why do we need to use this?
// because there exists a problem with the delimiter in windows \ vs in Linux /, 
// which can be solved using concatenation
// ../foldername/filename.html
console.log(path.join(__dirname, 'folderName', 'filename.html'));

