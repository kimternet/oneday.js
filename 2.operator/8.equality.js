// 동등 비교 관계 연산자 (Equality operators)

// == 값이 같은지 확인

// != 부정연산자와 함께 쓰면 값이 다름을 확인

// === 값과 타입이 둘다 같아야함

// !== 값과 타입이 다름


console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); //타입은 다르지만 담고있는 값, 2가 같기때문에 true로 나온다.
console.log(2 === '2'); // 
console.log(true == 1);
console.log(true === 1);

console.log(false == 0);

console.clear

const obj1 ={
    name : 'js',
};

const obj2 ={
    name: 'js',
};

console.log(obj1 == obj2);

console.log(obj1.name == obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);
