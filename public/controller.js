"use strict";

var address = "localhost";

function send(red, green, blue, stripId) {
	if (typeof stripId === 'undefined') {
		stripId = 0
	}

	console.log("Strip " + stripId + ": (" + red + ", " + green + ", " + blue + ")")

	fetch('/update', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			red: red,
			green: green,
			blue: blue,
			strip: stripId
		})
	})
}

var redBtn = document.querySelector('#red')
var greenBtn = document.querySelector('#green')
var blueBtn = document.querySelector('#blue')

redBtn.addEventListener('click', function () {
	send(255, 0, 0)
})

greenBtn.addEventListener('click', function () {
	send(0, 255, 0)
})

blueBtn.addEventListener('click', function () {
	send(0, 0, 255)
})

$(function () {
	$('#colorpicker').ColorPicker({
		flat: true,
		onChange: function (hsb, hex, rgb) {
			send(rgb.r, rgb.g, rgb.b)
		}
	})
})