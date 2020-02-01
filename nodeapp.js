var express = require('express')
var app = express()
var port = process.env.PORT || 5000

app.get('/', function(req,res){
    res.send('Hello world ! My App is ready to deployy, first Heroku deployemnt')
})

app.listen(port)



