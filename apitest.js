import http from 'http';

const data ={
    name:"gopal",
    age:23,
    city:"gurugram"
}
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); 
    res.write(JSON.stringify(data));
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});