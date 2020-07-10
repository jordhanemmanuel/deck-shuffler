const express = require('express')

const app = express();

require('./src/routes/deckRoutes.js')(app);

app.listen(8080);
