import App from './config/config.js'

const port = process.env.APP_PORT || 8081; //default port listen


App.http.listen(port, () =>console.log(`API IS RUNNING. PORT: ${port}`));











/*

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
//const morgan=require('morgan');

app.use(cors());
app.use(bodyparser.json());




//database conexion

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'axel',
    port:3306
});

//check database

db.connect(err=>{
    if (err) {console.log(err,'dberr');}
    console.log('database connected...');

})


//get all data

app.get('/user',(req,res)=>{

    let qr = `select * from user`;
    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }
    });
});



//get one ID este es el bueno

app.get('/user/:id',(req,res)=>{

    let gID = req.params.id;
    let qr = `select * from user where id = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err) {
            console.log(err);
        }

        if (result.length>0) {
            res.send({
                message:'get just one ID',
                data:result
            });
        }
        else 
        {
            res.send({
                message:'data not found'
            });
        }
    });
});




//create data o create nuevo user

app.post('/user',(req,res)=>{
    console.log(req.body,'createdata');
    let id = req.body.id
    let fullname = req.body.fullname;
    let email = req.body.email;
    let mb = req.body.mb;

    let qr= `insert into user(id,fullname,email,mb)
                values('${id}','${fullname}', '${email}','${mb}')`;

    console.log(qr,'qr')            
    db.query(qr,(err,result)=>{

        if(err){console.log(err);}

        console.log(result,'result')
        res.send({
            message:'data inserted'
        })
    });
});




//editar tablas

app.put('/user/:id',(req,res)=>{

    console.log(req.body,'updatedata');

    let id = req.params.id; 
    let fullname = req.body.fullname;
    let email = req.body.email;
    let mb = req.body.mb;

    let qr = `update user set fullname = '${fullname}', email = '${email}', mb = '${mb}'
                where id = ${id}`;

    db.query(qr,(err, result)=>{
        if(err){
            console.log(err);
        }

        res.send({
            message:'data updated'
        });


    });
});


//delete data

app.delete('/user/:id',(req, res)=>{
    let gID = req.params.id; 

    let qr = `delete from user where id = '${gID}'`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(
            {
                message:'data deleted'
            })
    });
    
});



app.listen(3000,()=>{
    console.log('server running')
})
*/