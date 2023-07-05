// Execution Context

// Execution context refers to the environment in which JavaScript code is executed. It includes all the variables, functions, and objects that are accessible at a particular moment during the execution of code.

// JavaScript code is executed in three types of execution contexts:

// Global Execution Context: It is the default execution context that is created when the script starts running. The global execution context represents the global scope and includes all global variables, functions, and objects. Variables and functions declared outside any function or block scope are considered part of the global scope.

// Function Execution Context: Whenever a function is called, a new execution context is created for that function. It contains the function's arguments, local variables, and inner functions. Each function invocation creates a new execution context, and when the function completes, its execution context is removed from the execution stack.

// Eval Execution Context: The eval() function in JavaScript can be used to execute code dynamically. When code is evaluated using eval(), an eval execution context is created. It evaluates the code in the context where the eval() function is called, introducing new variables and functions within that scope.

// Each execution context has a variable environment that holds all declared variables and their corresponding values. It also has a reference to the outer environment, which allows access to variables and functions from the parent scope.
