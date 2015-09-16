# led-controller
Raspberry Pi LED Web Controller

## Json

```json
{
	"strip": 0,
	"red": 128,
	"green": "cos(x)",
	"blue": "sin(x)"
}
```

_NB: Each color parameters can be either a `Number` between 0 and 255, or a `String` formatted to be read by [MathJS](http://mathjs.org/) (that should also return a value between 0 and 255)._
