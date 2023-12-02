const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World, this is aws CI-CD testing!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
