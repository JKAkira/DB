const express = require('express');
const path = require('path');
const body = require('body-parser');
//const app = express();
const mysql = require('mysql');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('server.key', 'utf8');
var certificate = fs.readFileSync('server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
const app = express();

var httpsServer = https.createServer(credentials, app);

app.use(body());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const db = mysql.createConnection({
    host: '192.168.1.6',
    user: 'ppap',
    password: '1234',
    database: 'expoint'
});
// show data
app.get('/data', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123;';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show cm
app.get('/cm', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="เชียงใหม่";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show cr
app.get('/cr', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="เชียงราย";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show nan
app.get('/nan', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="น่าน";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show payao
app.get('/py', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="พะเยา";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show เเพร่
app.get('/prae', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="เเพร่";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show เเม่ฮ่องสอน
app.get('/ms', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="เเม่ฮ่องสอน";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show ลำปาง
app.get('/lp', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="ลำปาง";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show ลำพูน
app.get('/lpo', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="ลำพูน";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
// show อุตรดิตถ์
app.get('/ut', function(req,res){
    console.log("Hello in /data ");
    let sql = 'SELECT * FROM test123 WHERE lastname_P="อุตรดิตถ์";';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    console.log("after query");
});
//delete
app.put('/delete', function(req, res) {
    var sql = 'DELETE FROM test123 WHERE id_P = ?';
    db.query(sql,[req.body.idkey],function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

//edit
app.put('/data', function(req, res) {
    var sql = 'UPDATE test123 SET firstname_P= ? , lastname_P = ? WHERE id_P = ?';
    db.query(sql,[req.body.firstname,req.body.lastname,req.body.idkey],function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

//insert
app.post('/data', function(req, res){
    console.log(req.body);
    let data = {
        id_P:req.body.idkey,
        firstname_P:req.body.firstname,
        lastname_P:req.body.lastname,
        auto_P:req.body.auto
    };
    let sql = 'INSERT INTO test123 SET ?';
    db.query(sql, data, (err, result)=>{
        if(err){
            console.log(err);
            console.log("ID is Primarykey!!!!!");
            console.log("Enter the id again..");
        }else{
            console.log(result);
        }
    });
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});




//module.exports = app;
module.exports = httpsServer;
