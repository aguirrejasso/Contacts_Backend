const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../database');

router.get('/api/contacts/:name?', (req, res) =>{
    
    let { name } = req.params;

    if(name == undefined)
    {
        mysqlConnection.query('SELECT * FROM contacts', (err, rows, fields) =>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });

    }else{
        name = name.replace("-"," ");

        mysqlConnection.query('SELECT * FROM contacts WHERE name = ?', [name], (err, rows, fields) =>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
});

module.exports = router;