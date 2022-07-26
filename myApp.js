const express = require('express');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();



app.get('/quotes/:id',(req,res) => {
    let quotes = []
    let id = req.params.id;
    for(var i = 0; i < id; i++){
        request.open("GET","https://api.quotable.io/random", false);
        request.send();
        json = JSON.parse(request.responseText);
        var quote = json.content;
        quotes.push(quote)
        
    }
    res.send(quotes);
    
    
})

app.use((req,res) => {
    res.send("/quotes/:numberOfQuotes")
})







app.listen('3000' , () => console.log("escutando na porta 3000"));