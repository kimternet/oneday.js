// 삼향 조건 연산자 Ternary Operator

// 1. 변수명 === 조건식 ? 참인경우 : 거짓인경우 
// 2. 변수선언 = 변수명 === 조건식 ? 참인경우 : 거짓인경우

let fruit ='apple'  // 변수 선언

if (fruit==='apple'){   // 일반적인 if문
    console.log('＠');
}else{
    console.log('※');
}

// 1. ↓ 삼항 조건 연산자로 한줄로 코딩이 깔끔하게 가능하다. ↓

fruit === 'apple' ? console.log('!') : console.log('!!')

// 2. ↓ 변수 선언하고 그안에 값으로 넣어줄 수 도있다. ↓

let emoji = fruit ==='apple' ? console.log('!!') : console.log('!!!')

console.log(emoji);