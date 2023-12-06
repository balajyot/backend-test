const os = require('os');
// tell us about our environment and platform

// Platform , windows or mac
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// get Free memory
console.log("Free memory", os.freemem());

// Total memory
console.log("Total memory" , os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime, amount of time your system has been up
console.log(os.uptime());// number of seconds