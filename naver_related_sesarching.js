const request = require('request');
const cheerio = require('cheerio');


request.get(
    {url: 'https://search.naver.com/search.naver?where=nexearch&query=%EC%A7%80%EC%A7%84&sm=top_lve&ie=utf8'},
    function(err, responce, body) {
        const $ = cheerio.load(body);

        const related_search = $('a', '._related_keyword_ul');

        related_search.each(function(i, elem) {
            console.log($(this).text());
        });
    }
    );

