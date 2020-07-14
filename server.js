const express = require('express');
const app = express();
const path = require('path');
const urllib = require('urllib');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/recipes/:ingredient', function (request, response) {
  const dat = request.params.ingredient;
  urllib.request(
    `https://recipes-goodness.herokuapp.com/recipes/${dat}`,
    function (err, res) {
      let info = JSON.parse(res.toString()).results;

      response.send(info);
    }
  );
});

const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
