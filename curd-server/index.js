const app = require ('./app');
const http = require('http')
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;
const httpServer = http.createServer(app);
httpServer.listen(port, hostname, () => {
    console.log(`App run on ${hostname} port- ${port}`);
});