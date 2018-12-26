/* const async1 = function(param, callback) {
    callback(param * 2);
}
const async2 = function(param, callback) {
    callback(param * 3);
}
const async3 = function(param, callback) {
    callback(param * 4);
}

const start = 1;

async1(start, result => {
    async2(result, result => {
        async3(result, result => {
            console.log(result);
        })
//     })
});

 */

/*  function async1 (param) {
     return new Promise(function(resolve, reject) {
        resolve(param*2);
     });
 }

 function async2 (param) {
    return new Promise(function(resolve, reject) {
       resolve(param*3);
    });
}

function async3 (param) {
    return new Promise(function(resolve, reject) {
       resolve(param*4);
    });
} */

function async1 (param) {
    return Promise.resolve(param*2);
}
function async2 (param) {
    return Promise.resolve(param*3);
}
function async3 (param) {
    return Promise.resolve(param*4);
}

const start = 1;

async1(start)
    .then(async2)
    .then(async3)
    .then(result => {
        console.log(result);
    });