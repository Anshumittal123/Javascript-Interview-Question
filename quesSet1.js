let str = "Hello ji kase ho";
const savedStrArray = str.split(" ").map((word)=>{
    return word.split("").reverse().join("");
});
console.log(savedStrArray.join(" "));


function checkArr(el){
    if (Array.isArray(el)) {
        console.log(`This is an Array.`);
    } else {
        console.log(`This is not an Array.`);
    }
}
checkArr([]);
checkArr({});


let arr = [1,2,3,4,5];
console.log(arr);
arr.length = 0
console.log(arr);

function checkInt(num){
    if(num%1 === 0){
        return `${num} is a Integer`;
    }else{
        return `${num} is not a Integer`;
    }
}
console.log(checkInt(12));
console.log(checkInt(12.5));

let arr1 = [1,2,3,4,5];
// arr1.push(...arr1);
let result = arr1.concat(arr1)
console.log(result);