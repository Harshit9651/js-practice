const promiseObjs = new Promise((resolve,reject)=>{
    let req =false;
    if(req){
        resolve('hello i am harshit ')
    }else{
        reject('sorry this is error ')
    }
})
promiseObjs.then(
    (value)=>{console.log(value)},
(error)=>{console.log(error)}
)