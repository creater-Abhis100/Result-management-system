const express = require('express');
const bodyParser=require('body-parser')
const cors=require('cors')

const app = express();
const port = 3000;

const data = require('./db.json')

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`My Demo App listening on ${port} port`)
});
  app.get('/stud', function (req, res) {
    res.json(data.stud);
  })
  app.post('/stud', function (req, res) {
    user=req.body;
    data.stud.push(user)
    res.json(data.stud);
  })
  app.delete('/stud/:id', function (req, res) {
    const id = req.params.id
    user=req.body;
    data.stud.pop(user)
    res.json(data.stud);
  })
  app.get('/Dashboard', function (req, res) {
    res.json(data.Dashboard);
  });

  app.get('/Dashboard/:id', function (req, res) {
    const id = req.params.id
    res.json(data.Dashboard[id]);
  });

  app.put('/Dashboard/:id', function (req, res) {
    const id = req.params.id
    user=req.body;
    data.Dashboard[id]['Name']=user.Name
    data.Dashboard[id]['DOB']=user.DOB
    data.Dashboard[id]['Score']=user.Score
    res.json(data.Dashboard);
  })
  app.post('/Dashboard', function (req, res) {
    user=req.body;
    data.Dashboard.push(user)
    res.json(data.Dashboard);
  })
  app.delete('/Dashboard/:id', function (req, res) {
    const id = req.params.id
    user=req.body;
    data.Dashboard.pop(user.id)
    res.json(data.Dashboard);
    res.end;
  })

  app.get('/signupUser', function (req, res) {
    res.json(data.signupUser);
  })
  app.put('/signupUser', function (req, res) {

      console.log(req.body);
  })
  app.post('/signupUser', function (req, res) {
    user=req.body;
    data.signupUser.push(user)
    res.json(data.signupUser);
  })
  app.delete('/signupUser', function (req, res) {
    res.json(data.signupUser);
  })

  app.get('/loggedin', function (req, res) {
    res.json(data.loggedin);
  })
  app.put('/loggedin', function (req, res) {
    res.json(data.loggedin);
  })
  app.post('/loggedin', function (req, res) {
    user=req.body;
    data.loggedin.push(user)
    res.json(data.loggedin);
  })
  app.delete('/loggedin/:id', function (req, res) {
    const id = req.params.id
    user=req.body;
    data.loggedin.pop(user)
    res.json(data.loggedin);
  })