const request = require('request');
const cheerio = require('cheerio');


// request.get(
//     {url: 'http://www.naver.com'},
//     function(err, response, body){
//         var $ = cheerio.load(body);

//         var arr = $('.apple');
        
//         console.log(arr.text());
//     })
const fs = require('fs');

const read_html = fs.readFile('./hello2.html','utf8',(err,data) =>{
    err? console.log(err) : 
    console.log('okay cheerio !');
    
    const $ = cheerio.load(data);
    const class_a = $('li' , 'ul' , $('.a'));
    const class_b = $('li' , $('.b'));    
    const class_c = $('ul li' , $('.c'));        
    class_a.each(function(){
        console.log($(this).text());
    })
    class_b.each(function(){
        console.log($(this).text() + ' @@@@ B');
    })
    class_c.each(function(){
        console.log($(this).text() + ' @@@ C') ;
    })
});