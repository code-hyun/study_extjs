const express = require('express');
const http = require('http');
const webapp = express();
const port = 3000;
const db = require('./service/postgreSQL')
const router = require('./handler/httpHandler')
const cors = require('cors');
webapp.use(cors());
webapp.use('/', router)

const server = http.createServer(webapp);
server.listen(port, () => {
    console.log('server open')
})
