const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authorRouter = require('./routers/authorRouter');
const bookRouter = require('./routers/bookRouter');
const storeRouter = require('./routers/storeRouter');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/authors', authorRouter);
server.use('/api/books', bookRouter);
server.use('/api/stores', storeRouter);

module.exports = server;

