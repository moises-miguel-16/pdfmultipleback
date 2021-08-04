const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
app.use( cors() );

app.use(express.json());

app.use( express.static('public') );



app.use( '/api/entrada', require('./routes/usuarios') );


app.listen(port,() => {
  return console.log(`server is listening on ${port}`);
});