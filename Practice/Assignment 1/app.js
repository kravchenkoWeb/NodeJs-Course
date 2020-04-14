const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello world!</h1><p>This is example of my node website.</p><form action="add-user" method="POST"><input name="user" type="text"><button type="Submit">Add User</button></form>');
        res.write("<b>Hello!</b>");
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if(url === '/add-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<body>');
            res.write(`<h1>The user is ${message}</h1>`);
            res.write('</body>');
            res.write('</html>');
            res.end();
        });
    } else if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write("<ul>");
        for(let i = 1; i < 5; i++) {
            res.write(`<li>User ${i}</li>`);
        }
        res.write("</ul>");
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }
});

server.listen(3000);