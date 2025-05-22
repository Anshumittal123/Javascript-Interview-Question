// Remove property from an object 
let obj = {
    name: "Anshu",
    Age: 21,
    email: "anshu2004@gmail.com",
    "Full Name": "Anshu Mittal",
    Address: {
        city: "New Delhi",
        state: "Delhi",
    }
}

console.log(obj.Age);
console.log(obj["Full Name"]);
delete obj.Age;
console.log(obj);

const {name, email, Address:{city, state}} = obj;

console.log(city, state, name);

Object.freeze(obj);
obj.name = "Manyak";
delete obj.name;
console.log(obj);


// !! operator => something to resembled boolean 
// falsy Value: 0, null, undefined, NaN, "", false
// truey value: remaining is true value.
console.log(![1,2,3,4]); // false (!true)
console.log(!![1,2,3,4]); // true


// remove duplicate value inside an array 
let duplicateElement = [1,2,4,4,5,6,8,3,5,6,63,3,2,1]

console.log(new Set(duplicateElement));

let uniqeEl = [...new Set(duplicateElement)];
console.log(uniqeEl);

