try {
    let obj = undefined;
    console.log(obj.name);
} catch (err) {
    console.log("Exception handled!!!");
} finally{
    console.log("I will always execute!!");
}