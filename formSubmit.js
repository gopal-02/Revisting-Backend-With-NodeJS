import http from "http";

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <form action="/submit" method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="email" name="email" placeholder="Email" required>
        <button type="submit">Submit</button>
        </form>
        `);
    res.end();
  })
  .listen(3000);
