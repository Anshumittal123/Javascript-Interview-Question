// Promise 
const myPromise = new Promise((res, rej)=>{
    let work = false;
    if (!work) {
        res("Yeh, suno tum aur main dono movie dekhna chale!!")
    } else {
        rej("Yaar, Aaj nahi aaj main thak gaya hu!!")
    }
})

myPromise.then((msg)=>{
    console.log(msg);
    console.log("chalo aaj bahut masti karge or person time bhi speen karge");
}).catch((msg)=>{
    console.log(msg);
    console.log("Sorry, Yaar next time hum paka jaayege.");
});


const f1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (Math.random() > 0.5) {
            resolve("Friend1 : Hey I am in for Goa.")
        } else {
            reject("Friend1 : Sorry mere pet main dard ho raha hai!");
        }
    }, 1000)
});

const f2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (Math.random() > 0.5) {
            resolve("Friend2 : Hey I am in for Goa.")
        } else {
            reject("Friend2 : Sorry mere wife nahi jane de rahi hai!");
        }
    }, 2000)
});

const f3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (Math.random() > 0.5) {
            resolve("Friend3 : Hey I am in for Goa.")
        } else {
            reject("Friend3 : Sorry mere kuch important meeting hai!");
        }
    }, 3000)
});

Promise.all([f1Promise, f2Promise, f3Promise]).then((msg)=>{
    console.log(msg);
    console.log("Yah!! we all are going to Goa.");
}).catch((msg)=>{
    console.log(msg);
    console.log("Yaar, band karo yah Goa jane ka plan banana!!");
});


const gf1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (Math.random() > 0.5) {
            resolve("gf1 : Hey I'll come for dinner.")
        } else {
            reject("gf1 : Phone is not reachable!");
        }
    }, 1000)
});
const gf2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (Math.random() > 0.5) {
            resolve("gf2 : Hey I'll come for dinner.")
        } else {
            reject("gf2 : I am on diet!");
        }
    }, 1000)
});
const gf3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (Math.random() > 0.5) {
            resolve("gf3 : Hey I'll come for dinner.")
        } else {
            reject("gf3 : my friend are coming!");
        }
    }, 1000)
});

Promise.any([gf1Promise, gf2Promise, gf3Promise]).then((msg)=>{
    console.log(msg);
    console.log("My valentine day is sorted!!");
}).catch((msg)=>{
    console.log(msg);
    console.log("Now to be the part of Bajrangdal!!");
})