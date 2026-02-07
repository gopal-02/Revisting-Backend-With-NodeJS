// Global objects in Node.js used in commonjs modules

console.log(__dirname);
console.log(__filename);

const path = require('path');
console.log(path.basename(__filename));

// Process object
console.log(process.platform);
console.log(process.pid);
console.log(process.cwd());
console.log(process.version);

console.log(process.env.USER);