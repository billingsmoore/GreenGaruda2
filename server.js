const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 7860;
const BUILD_DIR = path.join(__dirname, 'build');

const server = http.createServer((req, res) => {
  let filePath = path.join(BUILD_DIR, req.url === '/' ? 'index.html' : req.url);

  // Ensure the file is within BUILD_DIR (security)
  if (!filePath.startsWith(BUILD_DIR)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If file not found and not index.html, try index.html (for React Router)
      if (err.code === 'ENOENT' && !filePath.endsWith('index.html')) {
        filePath = path.join(BUILD_DIR, 'index.html');
        fs.readFile(filePath, (err, content) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
          }
          const contentType = getContentType(filePath);
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    } else {
      const contentType = getContentType(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
  };
  return types[ext] || 'application/octet-stream';
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving files from: ${BUILD_DIR}`);
});
