const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(bodyparser.json());

//route all file (js/css/images)
app.use('/static', express.static(path.join(__dirname, 'static')));

 //get db file
function getdb(){
const db = fs.readFileSync(path.join(__dirname, 'db.json'));
return JSON.parse(db);
}

//api
app.post('/api/signup', function(req, res){
    res.send(getdb()).status(200);
})

//rerouting
app.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname, 'signUp.html'));
})
app.get('/signin', function(req, res){
    res.sendFile(path.join(__dirname, 'signIn.html'));
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/accessories', function(req, res){
    res.sendFile(path.join(__dirname, 'page10.html'));
})
app.get('/checkout', function(req, res){
    res.sendFile(path.join(__dirname, 'page11.html'));
})

//server port
app.listen('2020', function(){
    console.log('app is running');
})

