// array - foreach, map, filter

let a = [1,2,'3',4, true];

a.forEach(el => console.log(`Hello ${el}`));

a.forEach(el=>{
    if(el < 3){
        console.log(`${el} is less than three.`);
    }
});

let sum = 0;
a.forEach(el => {
    sum += el;
});
console.log(`sum of the all of the element is: ${sum}`);

a.forEach(el => {
    if(typeof el === "number"){
        sum += el;
    }
})
console.log(`sum of the all of the element is: ${sum}`);

let arr = [];

for(var i = 0; i < 10; i++){
    arr.push(function(){
        setTimeout(function(){
            console.log(i);
        }, 1000)
    })
}

for (let i = 0; i < 10; i++) {
    arr[i]();
}