const rp = require('request-promise');
const cheerio = require('cheerio');

rp('http://www.naver.com')
    .then(function (htmlString) {
        const $ = cheerio.load(htmlString);

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
                console.log(search_url_arr[i]);
                
                rp(search_url_arr[i])
                    .then(function(body) {
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
        
    }).catch(function (err) {
        console.log('bye');
        console.log(err);
    });