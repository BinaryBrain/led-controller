"use strict";

var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var blaster = require('pi-blaster.js')

var app = express()
var server = http.createServer(app)

var port = 8700

var strips = [
	{ red: 27, green: 17, blue: 22 }
]

console.log("Starting Node Server on port " + port)

server.listen(port)

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/update', function (req, res) {
	var data = req.body

	if (data.strip > strips.length - 1) {
		res.status(400).send("Strip #" + data.strip + " does not exist.")
		return
	}

	blaster.setPwm(strips[data.strip].red, data.red / 255)
	blaster.setPwm(strips[data.strip].green, data.green / 255)
	blaster.setPwm(strips[data.strip].blue, data.blue / 255)

	res.send('ok')
})
