const express = require('express')
const app = express()
const mysql = require('mysql')
const port = 5000

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.options('*', function (req, res) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Max-Age', '86400')
  res.send(200)
})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'password',
})

connection.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

app.get('/api', (req, res) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
  })
  const sql = 'select * from test.users'
  connection.query(sql, function (err, result, fields) {
    if (err) throw err
    res.send(result)
  })
})

app.post('/api', (req, res) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
  })
  const sql =
    'insert into test.users (name) values (' + JSON.stringify(req.body.fa) + ')'
  connection.query(sql, function (err, result, fields) {
    if (err) throw err
    res.send(result)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
