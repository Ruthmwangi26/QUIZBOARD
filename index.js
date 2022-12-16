const express = require ("express");

const app = express();
const port = process.env.port ||3000;

app.get('/', function(req, res){
res.send('<P>I am there<P/>')

});

app.listen(3000, ()=>{
   console.log('My server is up') 
});