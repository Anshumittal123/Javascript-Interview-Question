async function getMessage(name){
    return `Hello ${name}`
}

// getMessage("Anshu Mittal").then(result => console.log(result));


async function printHelloAfterWait(name){
    console.log('First Line');
    let data = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(`Hello ${name}`);
        }, 3000);
    })
    let result = await data;
    console.log(result);

    console.log('Last Line');
} 

printHelloAfterWait('Anshu Mittal');