// const  promiseObjs = new Promise((resolve,reject)=>{
//     let req =true;
//     if(req){
//         resolve([1,2,3,4,5,67,8,9,10])
//     }else{
//         reject('sorry this is error ')
//     }
// }).then(
//     (value)=>{console.log(value)},

// ).catch((error)=>{console.log(error)})


// const methodchaning = new Promise((resolve,reject)=>{
//    let num = 20;
//    resolve(num) 
// }).then((result)=>{console.log(result)
//     return result+30;
// })
// .then((result)=>{
// console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const arr = [2, 4, 6,8];

const printFunction = new Promise((resolve, reject) => {
    let totalDelay = 0;

    arr.forEach((ele, index) => {
        totalDelay += ele; 

        setTimeout(() => {
            printCurrentElement(ele); 
            totalDelay=0;
            if (index === arr.length - 1) {
               
            resolve();
            }
        }, totalDelay * 1000); 
    });
})
.then(() => {
    console.log('Elements printed successfully');
})
.catch((error) => {
    console.log('Error occurred:', error);
});

function printCurrentElement(curr) {
    console.log(curr);
}
