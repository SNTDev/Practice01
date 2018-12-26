const request = require('request');
const cheerio = require('cheerio');

//html소스 받아올 주소
const url = "http://www.naver.com";

//request 요청
request.get(
    {url : url},
    function(err, response, body)   {
        const $ = cheerio.load(body);

        //네이버 실시간검색어를 포함하는 태그
        const search_word = $('.ah_k', '.ah_item', $('.ah_l'));
        const search_word_arr = [];

        //search_word를 이용하여 실시간검색어를 배열에 저장
        search_word.each(function(i, elem) {
            search_word_arr[i] = $(this).text();
        });
        
        //각 실시간검색어에 해당하는 a태그 추출
        const search_url = $('.ah_a', '.ah_item');
        const search_url_arr = [];

        //추출한 a태그에서 href속성값 추출
        search_url.each(function(i, elem) {
            search_url_arr[i] = $(this).attr('href');
        });

        //각 실시간 검색어의 링크로 이동하여 연관검색어 추출
        for (let i = 0; i < 10; i++) {
            //해당하는 링크가  search_url의 20번째부터 있으므로 앞쪽으로 땡겨서 저장
            search_url_arr[i] = search_url_arr[20+i];

            //각 검색어의 url주소를 다시 요청하여 html값 추출
            request.get(
                {url: search_url_arr[i]},
                function(err, responce, body) {
                    const $ = cheerio.load(body);

                    //연관검색어가 있는 태그 추출
                    const related_search = $('a', '._related_keyword_ul');

                    //해당 실시간검색어 먼저 출력
                    console.log('####### ' + (i+1) + '위 ' + search_word_arr[i] + '#######');
                    
                    
                    //연관검색어가 존재할 경우 출력
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
