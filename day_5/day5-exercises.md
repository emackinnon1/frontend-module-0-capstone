# Day 5 answers  

## 1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?  
You must use one of the variable keywords (var, let, const) and follow it with the name of the variable. The assignment operator can be used to assign a value to the variable.  
## 2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.  
Numbers handle all numbers including whole numbers, negative numbers and decimals. Strings consist of letters and other characters, but can also contain numbers. However, a string of just numbers will behave like a string and not a numeric data type. Boolean data types either have a value of true or false and can be used like on-off switches.  
## 3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?  
The name must begin with a letter, dollar sign, or an underscore and not a number.  
The name can contain letters, numbers, dollar sign, or an underscore. It must not use a dash or a period.  
You cannot use keywords or reserved words.  
All variables are case sensitive and it is bad practice to name two variables that have the same name using different cases.  
It is best practice to use a name that describes the information the variable stores.  
Use camel case.  
## 4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?  
Arrays are useful when you do not know how many items will be on a list. You can access a specific value of an array by using the name of the array and the index. Example:  
let numbers = [1, 2, 3];
numbers[2] would return 3. If you wanted to change the value of number[2] you would do this:
numbers[2] = 13;
numbers would then return:
[1, 2, 13]  
## 5.  What is the difference between an expression and a statement?  
A statement is an individual instruction or step that the computer should follow. An expression results in a single value. It can either be a variable that just assigned a single value or a variable that uses two or more other values to assign its own value.  
## 6.  What are three types of operators and how are they used?  
Logical operators return expressions and result in true or false. Comparison values also return true or false when comparing two values. String operators combine two strings.
