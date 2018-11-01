const got = require('got');
const mime = require('mime');
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  const { fileUrl, extension } = req.query;
  got.stream(fileUrl, { contentType: mime.getType(extension) }).pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
