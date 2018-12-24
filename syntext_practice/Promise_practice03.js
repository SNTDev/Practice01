var _promise = new Promise(function(resolve, reject) {
    
    if(+new Date()%2 ==0) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It broke"));
    }
});

_promise.then(console.log).catch(console.log);