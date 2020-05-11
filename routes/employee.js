const express = require('express');
const db = require('../db')

const router = express.Router();

router.get('/employee1', (req, res, next) => {
    sql_str = "SELECT S.id, E.name,  S.date, S.start_time, S.end_time FROM Shift S, Employee E Where S.id = E.id AND S.id = 5 AND S.start_time BETWEEN '2019-06-01 8:00:00' AND '2019-06-30 23:00:00'"
    db.raw(sql_str)
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/shiftmonth/:id', (req, res, next) => {
    sql_str = "SELECT S.id, E.name,  S.date, S.start_time, S.end_time FROM Shift S, Employee E Where S.id = E.id AND S.id = ? AND S.start_time BETWEEN '2019-06-01 8:00:00' AND '2019-06-30 23:00:00'"
    db.raw(sql_str,[req.params.id])
        .then((results) => {
            // console.log(results.rows);
            res.json(results.rows);
        })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;