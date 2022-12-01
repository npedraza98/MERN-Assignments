const express = require('express');
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const allMyJokeRoutes = require('./server/routes/jokes.route');
allMyJokeRoutes(app);

app.listen(8000, () => console.log("Server running on port 8000"));