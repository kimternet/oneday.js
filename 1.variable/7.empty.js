// null, undefined

let variable;  // 변수를 초기화만 하고 할당하지 않은 undefined상태
console.log(variable);

variable = null; // 변수는 할당되어있지만 비어있는 상태.

console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(activeItem);

console.clear();


console.log(typeof 123);
console.log(typeof null); 
console.log(typeof undefined);
