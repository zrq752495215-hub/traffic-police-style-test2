const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 4173;
const base = '/traffic-police-style-test/';
const distDir = path.join(__dirname, '..', 'dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function sendFile(response, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('没有找到文件，请先运行 npm run build。');
      return;
    }
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream',
    });
    response.end(content);
  });
}

http
  .createServer((request, response) => {
    const url = new URL(request.url || '/', `http://127.0.0.1:${port}`);

    if (url.pathname === '/') {
      response.writeHead(302, { Location: base });
      response.end();
      return;
    }

    if (!url.pathname.startsWith(base)) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('请打开 /traffic-police-style-test/ 路径。');
      return;
    }

    const relativePath = decodeURIComponent(url.pathname.slice(base.length)) || 'index.html';
    const requestedPath = path.normalize(path.join(distDir, relativePath));

    if (!requestedPath.startsWith(distDir)) {
      response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('访问路径不正确。');
      return;
    }

    sendFile(response, fs.existsSync(requestedPath) && fs.statSync(requestedPath).isFile() ? requestedPath : path.join(distDir, 'index.html'));
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`本地预览已启动：http://127.0.0.1:${port}${base}`);
  });
