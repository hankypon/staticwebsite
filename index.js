


const http = require('http');
 
const server = http.createServer(function (req, res) {
 switch(true)
 {
    case req.url === '/' && req.method === 'GET':
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.writeHead(200);
    res.end('Címlap <a href="/bejelentkezes">Bejelentkezés</a>');
    break;
    case req.url === '/bejelentkezes' && req.method === 'GET':
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.writeHead(200);
        res.end('Bejelentkezés <a href="/">Vissza a főoldalra</a>');
        break;
    default:
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.writeHead(400);
    res.end('Oldal nem található  <a href="/">Vissza a főoldalra</a>');
 }
    console.log(req.url);
    console.log(req.method);
    
  });
server.listen(3000);
// server.listen(8080);
