// var globalValue = "I'm global";
// function func() {
//     var globalValue = "I'm global. too";
// }
// console.log(globalValue);
// func();
// console.log(globalValue);

/* function callYOU() {
    var myname = "james";
    callAdam();
}

function callAdam() {
    return myname;
}

callYOU(); */


//hoisting
/* function hoistingTest() {
    console.log('greeting : ' + hi);

    var hi = 'hello';

    console.log('greeting : ' + hi);
}

hoistingTest(); */


//var키워드를 쓰지 않아도 변수선언이 가능하다.
/* hello = 'hello';
console.log(hello); */

//var은 같은이름의 변수를 중복선언할 수 있다.
/* var foo = 'bar1';
console.log(foo);
var foo = 'bar2';
console.log(foo); */

//let과 const는 중복선언 불가능
//SyntaxError: Identifier 'foo' has already been declared
/* let foo = 'bar1';
let foo = 'bar1'; */
/* const foo = 'bar1';
const foo = 'bar2';
 */

 //변수를 호출을 먼저하고 이후에 선언하는것 가능 -> Hoisting
 /* console.log(foo);
 var foo = 'hello'; */

//let과 const는 변수선언전에 호출을 먼저 하는것이 불가능
//TDZ(Temporal Dead Zone)일시적 사각지대 개념
//ReferenceError: foo is not defined
//ReferenceError: foo1 is not defined
/* console.log(foo);
console.log(foo1);
let foo = 'bar1';
const foo1 = 'bar2'; */

//var은 function-scope
//같은 이름의 var변수는 함수 내에서는 모두 동일한 변수로 취급
/* var foo = 'bar1';
console.log(foo);

if(true) {
    var foo = 'bar2';
    console.log(foo);
}

console.log(foo); */

//let/const는 Block-scope
//유효범위가 {}로 감싸진 범위
/* 어떤 변수가 호출되었을 때 블록 안에 같은 이름의 변수가 없으면 
상위 블록에서 선언된 같은 이름의 변수를 호출합니다. 하지만 블록 
안에서 let이나 const로 변수 선언이 있었다면 그 이름의 변수는 변수가 
선언되기 이전까지 그 블록안에서는 정의되지 않은 변수로 간주 */
/* let foo = 'let value';
const foo1 = 'const value';

console.log(foo);
console.log(foo1);

if(true) {
    console.log(foo);
    console.log(foo1);
    foo = 'inner let value';
    foo1 = 'inner const value';
}

console.log(foo);
console.log(foo1); */

//const와 let의 차이

//1. const
//const로 선언된 변수에 재할당 할경우 에러 발생
//TypeError: Assignment to constant variable.

/* const foo = 10;
foo = 50; */

//const로 선언된 참조형 변수 멤버값 변경 가능
//따라서 참조형변수를 사용할 경우에는 참조값 변경이 불가능한
//const로 선언하는게 좋음.

/* const foo = [0, 1];
const bar = foo;

console.log(foo);
console.log(bar);

foo.push(2);

console.log(foo);
console.log(bar);

bar[0] = 10;

console.log(foo, bar);

//const참조값을 바꾸면 에러 발생 
//bar = [10, 100];     */


//참조형 변수의 값복사
//array는 ...arg 사용
//object는 assign()함수 사용

/* const arg = [0, 1];
const obj = {foo: 'bar'};

const newArg = [...arg];
const newObj = Object.assign({}, obj);

console.log(arg, obj);
console.log(newArg, newObj);

newArg[0] = 50;
newObj.foo = 'strike';

console.log();
console.log(arg, obj);
console.log(newArg, newObj); */
