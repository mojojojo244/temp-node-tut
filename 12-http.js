const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to the page');
  } else if (req.url === '/about') {
    res.end('about page here');
  } else {
    res.end(`
  <h1>oops!</h1>
  <p>we can't seem to find the page youre looking for</p>
  <a href='/'>back home</a>`);
  }
});

server.listen(5000);
