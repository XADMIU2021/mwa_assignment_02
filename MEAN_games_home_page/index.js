const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const port = '5353';
app.listen(port, () => {
    console.log('listening on port ' + port);
});