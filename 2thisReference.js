/*
 * There are 4 different ways in which we can call a function in JS. We've
 * seen two ways one way is calling a regular function and other is calling a
 * constructor.
 * */

function foo()
{
    console.log("Hello");
}

foo(); // Method # 1

var obj = {};

obj.foo = function(){
    console.log("Hello two");
}

obj.foo(); // Method # 2

new foo(); // Method # 3

/*
 * you might be thinking the method 1 and method 2 are almost the same, in
 * method 2 we are referring to the function object as the property of another
 * object but eventually it is executing function object.
 * */
