const express = require ("express");

const app = express();

app.get('/', function(req, res){
res.send('<P>I am there<P/>')

});

app.listen(3000, ()=>{
   console.log('My server is up') 
});