import http from 'http';

// const server = http.createServer((req, res) => {
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Welcome to the HTTP server!</h1>');
//     // res.write('Welcome to the HTTP server!\n');
//     res.end('Hello, World!\n');
// });

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('<h1>Welcome to the HTTP server!</h1>');
    // } else if (req.url === '/about') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('<h1>About Page</h1>');
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     res.write('Page not found');
    // }
        if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.write(JSON.stringify({ name: 'John', age: 30 }));
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.write(JSON.stringify({ company: 'Tech Co', location: 'New York' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page not found');
    }   

    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});