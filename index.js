const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    // header that needs to be set in order to prevent JS execution in document
    res.setHeader('Content-Security-Policy', 'script-src \'none\'');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))