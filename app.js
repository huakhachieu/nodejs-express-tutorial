const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is my home page");
  } else if (req.url === "/about") {
    res.end("this is my about page");
  } else {
    res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find page you are looking for</p>
        <a href="/">back home</a>  
        `);
  }
});
server.listen(5000);
