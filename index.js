const genres = require('./routes/genres');
const home = require('./routes/home');

const express = require('express');
const app = express();

app.use('/api/genres', genres);
app.use('/', home); // ディレクトリが'/'なら、home routerを使え。

// create server and listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));