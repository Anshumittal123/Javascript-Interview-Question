/* 1) write a javascript funcion to check whether an 'input' is an array or not 
Test Data: 
console.log(is_array('This is an Array'));
console.log(is_array([1,2,4,0])); */

function checkArray(value){
    if (Array.isArray(value)) {
        return `[${value}] is an array`;
    }else{
        return `${value} is not an array`;
    }
}

console.log(checkArray("Anshu"));
console.log(checkArray(["Halk", "Superman", "Spiderman"]));
console.log(checkArray([1,2,4,6]));


function isArray(value){
    if(value instanceof Array)
        return `[${value}] is an array`;
    return `${value} is not an array`;
}

console.log(isArray(4));
console.log(isArray("Hello"));
console.log(isArray({
    name: "Anshu",
    email: "example2004@gmail.com"
}));
console.log(isArray([1,2,4,5]));



/*
* 2) write a javascript function to clone an array.
* Test Data: 
* console.log(array_clone([1,2,4,0]))
* console.log(array_clone([1,2,[4,0]]))
*/

function cloneArray(inpt){
    let cloneArray = [...inpt];
    return cloneArray
}

console.log(cloneArray([1,2,3,5]));
console.log(cloneArray([1,2,[3,[5]]]));


 
/*
* 3) write a javascript function to get the first element of an array. passing a parameter n will return the first n elements of the array. 
* console.log(first([7,9,0,-2])) // [7]
* console.log(first([7,9,0,-2], 3)) // [7,9,0]
* console.log(first([7,9,0,-2], 6)) // [7,9,0,-2] 
*/

function elementArray(value, get=1){
    let el = [];
    for (let i = 0; i < get; i++) {
        el.push(value[i]);
    }
    return el;
}

console.log(elementArray([7,9,0,-2]))
console.log(elementArray([7,9,0,-2], 3))
console.log(elementArray([7,9,0,-2], 6))


/*
* 4) Write a simple javascript program to join all element of the following array into a string. 
* myColor = ["Red", "Green", "White", "Black"];
*/

function joinElementOfArr(value, separator = ','){
    return value.join(separator);
}

console.log(joinElementOfArr(["Red", "Green", "White", "Black"]));
console.log(joinElementOfArr(["Red", "Green", "White", "Black"], "+"));
console.log(joinElementOfArr(["Red", "Green", "White", "Black"], "-"));


// way of creating a objects.

let obj1 = {
    name: "Anshu",
    email: "anshu@gmail.com"
} // object literal

let obj2 = new Object({
    name: "Mayank",
    email: "mayank@gmail.com"
}) // by using object create method

function create(){
    this.name = "Rohit",
    this.email = "rohit@gmail.com"
}

let obj3 = new create();

class Abcd{
    constructor(){}

    a = 23;
}

let obj4 = new Abcd();

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);


// higher order function
function abcd(value){
    return function (value2){
        return value + value2;
    }
}

console.log(abcd(10)(20));


function operation(operationFn, a, b){
    return operationFn(a, b);
}

function sum(a, b){
    return a+b;
}
let result = operation(sum, 5, 6);
console.log("Result of a HOF:-",result);



// This
// global => window
console.log(this);

// function => window
function check(){
    console.log(this);
}
check();

// method = object
let obj5 ={
    name: "Anshu",
    age: 35,
    sayName: function(){
        console.log(this);
    }
}

obj5.sayName();

//  funct es5 inside method = window
//  es6 funct inside method = object


// Call 
let object ={
    name: "Anshu"
}

function callFun(a,b,c,d){
    console.log(this, a, b, c, d);
}
callFun.call(object, 1,2,3,4);
callFun.apply(object, [1,2,3,4])

function bindFunc(){
    console.log(this);
}
let newFunc = bindFunc.bind(object);
newFunc();


// Map
let mapValue = [1,2,3,4,5];
let res = mapValue.map(el=>{
    return el*2;
})
console.log("new value of each elements: ", res);

let content = ["hello", "a", "apple", "guava", "harsh", "nishi", "anushka"];
let elements = content.map(val=>{
    if(val.length === 5) return `<p>${val}</p>`
    else return `<span>${val}</span>`
})
console.log(elements);


// filter
let scores = [34, 67, 89, 90, 96, 85, 62];

let newScores = scores.filter(el=>{
    return el>90
});
console.log("new score: ", newScores);

let checkChar = content.filter(val=>{
    return !val.includes("a");
})
console.log(checkChar);

let newWords = content.filter(el=>{
    return el.split("a").length <= 2;
})
console.log(newWords);


// sort
let myArr = [15,40,1,13,2];
myArr.sort((a,b) => a-b); // a-b = (+)ve A greater than other if (-)ve A less then
console.log(myArr);



// IIFE = Immediately invoked function expression. it immediately called as it is created. why will use it => to create a private variables.
(function(){
    console.log("Hello from iife function.");
    var a = 12;
})()

// console.log(a); // directly not accessable a private variable. 

let ans = (function(){
    var a = 12;
    return {
        getter: function(){
            console.log(a);
        },
        setter: function(updatedValue){
            a = updatedValue
        }
    }
})()

ans.getter();
ans.setter(45);
ans.getter();


// asynchronous & synchronous
console.log("Hello1"); // syn
console.log("Hello2"); // syn
setTimeout(()=>{
    console.log("Hello3"); // Asy
},1000)
console.log("Hello4"); // syn
console.log("Hello5"); // syn

// slice and splice
let myArr2 = [1,2,3,4,5,6,7,8];

// console.log(myArr2.slice(2, 6));
// console.log(myArr2.slice(-6, -1));

console.log(myArr2.splice(2, 4));
console.log(myArr2);


// closures
function outerFn(){
    let outerVar = "I am from outer function";
    function innerFn(){
        console.log(outerVar);
    }
    return innerFn
}

let fu = outerFn(); // After excute a function it distory all of the local variable.
fu(); // but with a help of closures we still able to hold the local variable of the outer function. 