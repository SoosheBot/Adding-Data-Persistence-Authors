const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const Authors = require('./routers/authorRouter');
// const Books = require('./routers/bookRouter');
// const Stores = require('./routers/storeRouter');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/authors', Authors);
// server.use('/api/books', Books);
// server.use('/api/stores', Stores);

module.exports = server;

