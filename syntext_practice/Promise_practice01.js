var _promise = function (param) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {

            //resolve나 reject가 실행되기 전 여기까지가 pending상태

            if(param) {
                resolve("해결완료");
            }
            else {
                reject(Error("실패!!"));
            }

        }, 3000);
    });
};

//then함수의 첫번째 인자는 비동기작업이 성공했을때, 두번재 인자는 실패했을때
//호출할 함수를 선언
_promise(false).then(function(text) {
    console.log(text);
}, function (error) {
    console.log(error);
});