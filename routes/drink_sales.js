const express = require('express');
const db = require('../db')

const router = express.Router();


router.get('/getAllDrink_Sales', (req, res, next) => {

    let sql_str = "SELECT * FROM Drink_Sales S;"

    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});


module.exports = router;
