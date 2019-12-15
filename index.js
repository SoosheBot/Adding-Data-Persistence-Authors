require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`I'm listening. Visit http://localhost:${PORT}`);
});
