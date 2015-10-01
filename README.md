## Synopsis

Spy is a Javascript-based Python interpreter/debugger that supports a limited
subset of Python and includes multiple modules

## Demo

A live demo can be found at 
[http://daniel3735928559.github.io/spy/demo/demo.html](http://daniel3735928559.github.io/spy/demo/demo.html)

## Code Example

Suppose we are in an angular app with the following controller:

```
app.controller("DemoController", ['$scope',function($scope){
    $scope.prog = "x = 27";
    $scope.pycontrol = {};
}]);
```

Then we can embed an instance of the simulator with a line such as: 

```
<sim-py program="prog" control="pycontrol" size="" lightboard="yes" reset="yes" simid="1" template="/spy/simpy.html"></sim-py>
```

## Python support

Spy supports a small subset of Python, limited to:

* Variables with numeric, string, and array values
* Arithmetic expressions
* `if` and `if/else` blocks
* `while` loops
* Functions
* Certain modules (see below)

## Built-in modules

Spy provides several modules that can be imported:

* `math`: Some simple mathematics functions

* `string`: Some basic string functions

* `input`: Functions for prompting the user for input (numeric or string)

* `file`: Functions for accessing, modifying, and creating files in a filesystem

* `lb`: Functions for interacting with a simple screen-like "lightboard"

* `googlemaps`: Provides access to the Google Maps directions API

## Frontend Usage

Write your program in the text area.  Press "run" or Ctrl-Enter to run
the program.  Press "step" or Enter to step through the program one
line at a time.  The state of all variables currently in scope, as
well as all functions that have been defined, outstanding function
calls, and outputs will be displayed and updated as you do so.

## API Reference

When you create an instance of the simulator, you must pass it an
object in its "control" parameter.  This object will be populated with
functions for interacting programmatically with the simulator.
Specifically:

* `get_program()`: Returns the current program.

* `set_program(prog)`: Sets the current program to `prog`.  

## License

Spy is licensed under the [MIT License](http://opensource.org/licenses/MIT).
