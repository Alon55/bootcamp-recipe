const express = require('express');
const app = express();
const path = require('path');
const urllib = require('urllib');
const { info } = require('console');


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


let recipes = []

app.get('/recipes/:ingredient', function (req, res) {
    const dat = req.params.ingredient;
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${dat}`, function (
      err,
      res
    ) {
      let info = JSON.parse(res.toString());
      info = info.results
      recipes = []
      for (const i of info) {
          recipes.push({
              title: i.title,
              thumbnail: i.thumbnail,
              href: i.href,
              ingredients: i.ingredients
          })
          
      }
      
    });  
    
    setTimeout(function(){ res.send(recipes);; }, 4000);
  });

  



const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
