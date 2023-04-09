// 조건문 Conditional Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건) {} else if (조건) {} else {}

let fruit = 'apple';
if (fruit ==='apple'){
console.log('this is apple');
} else if(fruit ==='orange') {
    console.log('this is orange');
} else {
    console.log('!!');
}

if (0,false,'',null,undefined){ // if안에 false가 들어가면 당근 출력이 안된다
    console.log('출력되면 안됨!');
}
