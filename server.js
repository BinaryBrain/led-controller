var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')

var app = express()
var server = http.createServer(app)

var port = 8700

console.log("Starting Node Server on port " + port)

server.listen(port)

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/update', function (req, res) {
	console.log(req.body)
	res.send('ok')
})
