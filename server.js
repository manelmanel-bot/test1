const express = require('express')
const app = express()
const  path=require('path')


// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

app.use( express.static(__dirname + '/public'));



app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname + '/index.html'));
});




app.listen(3000, function () {
    console.log('Example app listening on port 3000!')


})