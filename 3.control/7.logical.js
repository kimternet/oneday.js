// 논리연산자 Logical operator

// && (and)
// || (or)
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환(단항연산자 응용)

let num = 8;

if (num >= 0 && num < 9) {
    console.log('굿');
}
if(num != 8){  //num이 8이 아니면 실행해
    console.log('d');
}

console.log(true && true); // true
console.log(true && false); // 둘중에 하나라도 false 면 false

console.log(true || true) // true
console.log(true || false)// 하나라도 true니까 true!



