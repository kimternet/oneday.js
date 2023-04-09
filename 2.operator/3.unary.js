// 단항연산자 Unary operators

// + (양)
// - (음)
// !(부정)

let a = 5;
a = -a; // -1 * 5 를 의미

console.log(a);

a = -a;

console.log(a);

a = +a;
console.log(a);

a = -a; // -5
a = +a; // +(-5)
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);  // ! 는 부정!
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있다.

console.clear();

console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text');  // NAN 이건 숫자가아닌데..? 하면서 NAN이 나온다 낫어넘버
console.log(+undefined); // NAN

console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환함!





