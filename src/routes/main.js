const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../database');

router.get('/contacts', (req, res) =>{
    mysqlConnection.query('SELECT * FROM contacts', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

module.exports = router;