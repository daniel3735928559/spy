## Synopsis

Spy is a Javascript-based Python interpreter/debugger that supports a limited
subset of Python and includes multiple modules

## Demo

A live demo can be found at 
[http://daniel3735928559.github.io/spy/](http://daniel3735928559.github.io/spy/)

## Code Example

A stripped-down version of the demo page would look like:

```
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/sim/py/sim.css" />
    <link rel="stylesheet" href="/sim/cm/codemirror.css" />
    <link rel="stylesheet" href="/sim/cm/theme/paraiso-light.css" />
    <script type="text/javascript" src="https://code.angularjs.org/1.4.0-rc.2/angular.min.js"></script>
    <script type="text/javascript" src="https://code.angularjs.org/1.4.0-rc.2/angular-cookies.js"></script>
    <script type="text/javascript" src="/sim/cm/codemirror.js"></script>
    <script type="text/javascript" src="/sim/py/expr_ng.js"></script>
    <script type="text/javascript" src="/sim/py/sim.js"></script>
    <script type="text/javascript" src="index.js"></script>
  </head>
  <body ng-app="app">
    Hello
    <div ng-controller="BlahController">
      <a href="#" ng-click="pycontrol.set_program('hello')">blah</a>
      <a href="#" ng-click="show()">log</a>
      {{thingy}}
      <sim-py program="thingy" control="pycontrol" size="" lightboard="yes" reset="yes" simid="1"></sim-py>
    </div>
  </body>
</html>
```

## Installation and use

* Download the `lib` and `spy` folders.

## Frontend Usage

The use of the editor frontend itself is documented in index.html (or 
see the demo).

## API Reference

## License

Spy is licensed under the [MIT License](http://opensource.org/licenses/MIT).
