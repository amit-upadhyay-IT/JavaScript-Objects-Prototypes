// this is function
function createBicycle(cadence, speed, gear)
{
    var obj = {};
    obj.cadence = cadence;
    obj.speed = speed;
    obj.gear = gear;
    return obj;
}

// this is constructor
function Bicycle(cadence, speed, gear)
{
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
}

var b1 = createBicycle(50,20,5);
var b2 = new Bicycle(100, 40, 10);
console.log(b1);
console.log(b2);

/*
 * NOTE : calling the function using new keyword doesn't make any difference
 * because adding 'var this = {};' in the beginning and adding 'return this;'
 * in the end of the function doesn't make any difference as we are returning
 * the object created in the second last line of the function so after that
 * nothing gets executed.
 *
 * But calling a constructor without new keyword returns in a undefined object
 * reason : inside the function we haven't created any this object so the this
 * object written over there is the global this object and also we are not
 * returning anything in the end of the function so this results in undefined
 * return value of constructor.
 *
 * Also to write a constructor use a capital letter for writing first letter
 * */
