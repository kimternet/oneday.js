// let 재할당이 가능

let a = 1;

a= 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수

const text='hello';

// 1. 상수

const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수

const star = {
            name: 'apple',
            color: 'red',
            display:'★',
       };

// let 보다 const를 더 선호해서 작성하는게 좋다

console.log(star);

star.name ='orange';
star.display ='☆';
star.color='green';

console.log(star);

// let 재할당 o 변경 o
// const 재할당 no 변경 yes

