const request = require('request');
const cheerio = require('cheerio');

const _promise = (url) => {
    return new Promise((resolve, reject) => {
        resolve(url);
    })
}

const url = "http://www.naver.com";

_promise(url).then((url) => {
    request.get(
        {url : url},
        function(err, response, body)   {
            const $ = cheerio.load(body);
    
            const search_word = $('.ah_k', '.ah_item', $('.ah_l'));
            const search_word_arr = [];
    
            
            search_word.each(function(i, elem) {
                search_word_arr[i] = $(this).text();
            });
            
            const search_url = $('.ah_a', '.ah_item');
            const search_url_arr = [];
    
            
            search_url.each(function(i, elem) {
    
                search_url_arr[i] = $(this).attr('href');
            });
    
            for (let i = 0; i < 10; i++) {
                search_url_arr[i] = search_url_arr[20+i];
    
                request.get(
                    {url: search_url_arr[i]},
                    function(err, responce, body) {
                        const $ = cheerio.load(body);
    
                        const related_search = $('a', '._related_keyword_ul');
    
                        console.log('####### ' + (i+1) + '위 ' + search_word_arr[i] + '#######');
                        
                        if(related_search.length != 0) {
                            related_search.each(function(i, elem) {
                                console.log($(this).text());
                            });
                        } else {
                            console.log('No Related Word');
                        }
                        console.log();
                    }
                    );
             
                }
          
        }
    );    
})


