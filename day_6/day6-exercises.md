# Day 6 Questions  

## 1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?  
Using the final parentheses tell the interpreter to call the function immediately. Without parantheses you are not actually calling the function, you are only referencing it.  
## 2.  What is the difference between function parameters and arguments?  
Parameters are like variables or placeholders for the information that a function needs to perform the code.  Arguments are the actual data used when the function is called.  
## 3.  What is the keyword `return` used for?  
It is used to return a value to the code that called the function.  
## 4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?  
With local variables, less memory is used because the browser only has to store them for as long as it takes to run whatever function they reside in. Also, variable naming conflicts are reduced.  
You may want to use a global variable to store the variable of a called function.
