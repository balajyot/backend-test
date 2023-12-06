//const url = require('url');
 const URL = require('url').URL; // if this gives you errors, use the above line


//create an object
// You might have to work with urls in your project

const myUrl = new URL('http://ibibek.com:6543/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href); // this is simply getting it via href
console.log(myUrl.toString()); // use to string method

// Host (root domain)
console.log(myUrl.host); // mywebsite.com ibibek.com

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search); // ?id=100&status=active // 

// Params object
console.log(myUrl.searchParams); // now create an object with the search param

// Add param // you can also add the parameters in the searhParams
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params, (similar to dict you can loop through)
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));