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

router.post('/api/contacts/', (req, res) => {

    const { name, number_phone, photo, email, facebook, twitter, instagram} = req.body;

    const query = `INSERT INTO contacts(name, number_phone, photo, email, facebook, twitter, instagram) 
                   VALUES("${name}", ${number_phone}, "${photo}", "${email}", "${facebook}", "${twitter}", "${instagram}")`;

    mysqlConnection.query(query, (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Contact saved'});
        }else{
            console.log(err);
        }
    });
});

router.put('/api/contacts/:id', (req, res) => {
    const { name, number_phone, photo, email, facebook, twitter, instagram} = req.body;
    const { id } = req.params;

    const query = `UPDATE contacts SET name = "${name}", number_phone = ${number_phone}, photo = "${photo}", email = "${email}",
                facebook = "${facebook}", twitter = "${twitter}", instagram = "${instagram}" WHERE id = ?`;

    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.delete('/api/contacts/:id', (req, res) =>{
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM contacts WHERE id = ${id}`, (err, row, fields) => {
        if(!err){
            res.json({Status: "Conctact deleted"});
        }else{
            console.log(err)
        }
    })
});

module.exports = router;