var express = require('express');
var router = express.Router();

// add post
router.post('/api/addTodo', function(req, res, next) {

  var db = req.con;
  var result = {};

  var sql = {
      id: req.body.id,
      task: req.body.task,
      status: req.body.status
  };
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);

  var qur = db.query('INSERT INTO todo SET ?', sql, function(err, rows) {
      if (err) {
          console.log(err);
      }
      result.status = 'success';
      result.data = rows;
      res.json(sql);
  });

});
//get todos
router.get('/api/getAllTodos', function (req, res, next) {


  var db = req.con;
  var result = {};
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

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
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
  var qur = db.query('SELECT * FROM todo WHERE id = ?', id, function (err, rows) {
    if (err) {
      console.log(err);
    }
    result.status = 'success';
    result.data = rows;
    res.json(result);
  });
});


router.post('/api/Edit', function (req, res, next) {

  var db = req.con;
  var id = req.body.id;
  var result = {};

  var sql = {
    id: req.body.id,
    task: req.body.task
  };
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
  var qur = db.query('UPDATE todo SET ? WHERE id = ?', [sql, id], function (err, rows) {
    if (err) {
      console.log(err);
    }
  });
  result.status = 'success';
  res.json(sql);
});

//delete todo

router.post('/api/Delete', function (req, res, next) {

  var id = req.body.id;
  var db = req.con;
  var result = {};
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
  var qur = db.query('DELETE FROM todo WHERE id = ?', id, function (err, rows) {
    if (err) {
      console.log(err);
    }
  });
  result.status = 'success';
  res.json(result);

});

module.exports = router;
