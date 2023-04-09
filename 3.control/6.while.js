// while(조건) {}

// 조건이 false가 될때까지 {} 코드를 반복 실행

let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while(isActive){   // while은 조건이 맞아야 실행된다.
    console.log('아직 살아있다!');
    if(i === 1000){
        break;
    }
    i++;
}

// do while {} do while은 일단 실행하고 조건을 확인한다.
do {
    console.log('do');
} while(isActive);

// do while문은 어디에 쓰일까?

// 일단 혼자 생각한바로는 문제 퀴즈같은거?
// 문제를 일단은 출제하고 조건이 맞으면 합격 안맞으면 불합격을 주는 ?




