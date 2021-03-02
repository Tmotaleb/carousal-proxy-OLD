const server = require('./server.js');

const PORT = 3000 || process.env.PORT;
const HOST = 'localhost';

server.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}!`);
});