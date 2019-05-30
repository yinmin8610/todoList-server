var express = require('express');
var router = express.Router();


//get todos
router.get('/api/getAllTodos', function (req, res, next) {


  var db = req.con;
  var result = {};

  db.query('SELECT * FROM todo', function (err, rows) {
    if (err) {
      console.log(err);
    }
    result.status = 'success';
    result.data = rows;
    res.json(result);
  });
});

//get todo
router.get('/api/getTodobyId', function (req, res, next) {


  var db = req.con;
  var id = req.body.id;
  var result = {};
  var qur = db.query('SELECT * FROM todo WHERE id = ?', id, function (err, rows) {
    if (err) {
      console.log(err);
    }
    result.status = 'success';
    // result.data = rows;
    res.json(result);
  });
});

// add todo
router.post('/api/addTodo', function (req, res, next) {

  var db = req.con;
  var result = {};

  var sql = {
    id: req.body.id,
    text: req.body.text,
    isChecked: req.body.isChecked,
    isEdited: req.body.isEdited
  };

  var qur = db.query('INSERT INTO todo SET ?', sql, function (err, rows) {
    if (err) {
      console.log(err);
    }
    result.status = 'success';
    // result.sql = rows;
    res.json(sql);
  });

});

//editTodo
router.post('/api/Edit', function (req, res, next) {

  var db = req.con;
  var id = req.body.id;
  var result = {};

  var sql = {
    id: req.body.id,
    text: req.body.text,
    isEdited: req.body.isEdited
  };
  var qur = db.query('UPDATE todo SET ? WHERE id = ?', [sql, id], function (err, rows) {
    if (err) {
      console.log(err);
    }
  });
  result.status = 'success';
  // result.data = rows;
  res.json(sql);
});

//delete todo

router.post('/api/Delete', function (req, res, next) {

  var id = req.body.id;
  var db = req.con;
  var result = {};
  
  var qur = db.query('DELETE FROM todo WHERE id = ?', id, function (err, rows) {
    if (err) {
      console.log(err);
    }
  });
  result.status = 'success';
  // result.data = rows;
  res.json(result);

});

module.exports = router;
