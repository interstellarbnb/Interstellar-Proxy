const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use('/:id', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log(`server running at: http://localhost:3000`);
});