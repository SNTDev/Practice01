var friends = ["Mike", "Stacy", "Andy", "Rick"];

function each_func(a, b, c) {
    console.log(b + 1 + "." + a);
    console.log(c + '\n');
}

const what = friends.forEach(each_func);

console.log(what);