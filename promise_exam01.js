const request = require('request');
const cheerio = require('cheerio');



function getData() {
    return new Promise(function (resolve, reject) {
      request.get('http://www.naver.com', function (response) {
        if (response) {
          resolve(response);
        }
        reject(new Error("Request is failed"));
      });
    });
  }
  
  // Fulfilled 또는 Rejected의 결과 값 출력
  getData().then(function (data) {
    console.log(data); // response 값 출력
  }).catch(function (err) {
    console.error(err); // Error 출력
  });