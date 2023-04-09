// 문자열 타입

let string = '하이';

console.log(string);

string = '"안녕"!';  // 따옴표 출력

console.log(string);

// ----------------------------------------


// 특수문자

string="'안녕!'";

console.log(string);

string='안녕!\n 형운이야\t 성은 김 \\' ;   // \n 은 줄바꿈 \t 띄어쓰기  \\는 두번!
 
console.log(string);


// 템플릿 리터럴 (Template Literal)

let id = '엘리';

let greetings = "'안녕!," + id + "\n＃";

console.log(greetings);

// 위에 + + 해서 연결하는건 불편하다

greetings= `'안녕 , ${id}＠
즐거운 하루 보내세요'`;  // " 꺽쇠 ` "   아이디값 자동으로 계산해서 그냥 편하게 쓰게 해줌.

console.log(greetings);



