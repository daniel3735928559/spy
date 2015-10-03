## Synopsis

Spy is a Javascript-based Python interpreter/debugger that supports a limited
subset of Python and includes multiple modules

## Demo

A live demo can be found at 
[http://daniel3735928559.github.io/spy/demo.html](http://daniel3735928559.github.io/spy/demo.html)

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

An instance of the simulator is created with the `<sim-py>` tag.  This
tag accepts several attributes:

* `simid`: (Required) An ID for the simulator.  Must be unique among all
  instances of spy on the page.
  
* `program`: (Optional) This a javscript object to which the program in the
  simulator's text area will be bound.  

* `text`: (Optional) This is a string that will be set as the default program
  (for when the "reset" button is pressed).  This will override
  `program` for providing a default program for the instance if it is
  present.

* `control`: (Optional) A Javascript object that, if provided, will be populated
  with methods for controlling this instance of the simulator.
  Specifically: 

** `get_program()`: Returns the current program.

** `set_program(prog)`: Sets the current program to `prog`.  

* `size`: (Optional) A CSS string describing the height of the text area of the
  simulator, or `"auto"` if you want it to be set to a sensible height
  for the default program.  Default value is `"70%"`

* `reset`: (Optional) Will hide the "reset" button if set to `"no"`,

* `functions`: (Optional) Will hide the function list and function call stack if set to `"no"`.

* `lightboard`: (Optional) Will disable lightboard functionality if set to `"no"`.

* `debug`: (Optional) Will enable console debug output if set to `"yes"`.  

## License

Spy is licensed under the [MIT License](http://opensource.org/licenses/MIT).
