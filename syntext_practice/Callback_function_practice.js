//callback function OR higher-order function : 인자로 함수를 전달하는 함수
//전달받은 함수를 함수 내부에서 실행

const friends = ['Jackson', "Martin", "Carson", "Kain"];
friends.forEach((eachName, index) => {
    console.log(index + 1 + '. ' + eachName);
});

