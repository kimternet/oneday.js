// 산술 연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수 (거듭제곱)

console.log(5 + 2);

console.log(5 / 2);

console.log(5 % 2);

console.log(5 ** 2); //es7에 추가된것. 거듭제곱
console.log(Math.pow(5,2)); // 원래 거듭제곱은 이렇게 사용했다.


// + 연산자 주의점!

let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1;  // *숫자와 문자열을 더하면 문자열로 변환된다!!

console.log(text);

