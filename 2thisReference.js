/*
 * There are 4 different ways in which we can call a function in JS. We've
 * seen two ways one way is calling a regular function and other is calling a
 * constructor.
 * */

function foo()
{
    console.log("Hello");
    console.log(this);
}

foo(); // Method # 1
/*
 * here we are executing a function as simple function object, when a function
 * is executed like this then the value of 'this' keyword is the global object
 * the global object itself depends on the runtime environment you are using
 * if you are running JS in a browser then the global object is a window
 * object which represents the window or the tab that is actually running the
 * JS code, if you are running it in a node.js then there is process.
 * */

var obj = {};

obj.foo = function(){
    console.log("Hello two");
    console.log(this);
}

obj.foo(); // Method # 2

/*
 * question is what is the value of 'this' reference here?
 * it turns out when you are calling a function in the context of an object
 * then this reference is actually referring to that object itself.
 * */

new foo(); // Method # 3

/*
 * There are two default arguments to every function call : argument and this
 * you might be thinking the method 1 and method 2 are almost the same, in
 * method 2 we are referring to the function object as the property of another
 * object but eventually it is executing function object.
 *
 * The 'this' variable always points to something, what that thing is really
 * depends on which one of these 4 method you are actually using.
 *
 * However once the function calls has been identified the value of this is
 * very pridectable infact the specification outlines what the value of
 * 'this' should be for various different approaches of function calls.
 * */
