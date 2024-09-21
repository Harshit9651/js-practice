const promiseObjs = new Promise((resolve,reject)=>{
    let req =true;
    if(req){
        resolve([1,2,3,4,5,67,8,9,10])
    }else{
        reject('sorry this is error ')
    }
}).then(
    (value)=>{console.log(value)},

).catch((error)=>{console.log(error)})