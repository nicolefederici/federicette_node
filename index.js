const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./routes/recipes.js')(app);
app.get('/', function(request, response) {
  response.json('slash route works');
});

app.listen(3001, function() {
  console.log('federicette_node listening on port 3001');
});
