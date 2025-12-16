const http = require('http');
const app = require('./server');
require('./init/createAdmin')();

const port = process.env.PORT || 3333;
const host = process.env.HOST || 'localhost';

app.set('port', port);
app.use('/api/auth', require('./routes/authRoutes'));

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});
