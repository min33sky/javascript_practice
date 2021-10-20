//* Word Boundary: \b

// \b는 \w가 아닌 것은 무시하고 \w로 시작하고 \w로 끝나는 단어와 일치하는 것을 찾는다.
console.log('Hello, Java!'.match(/\bJava\b/));
console.log('Hello, Javascript!'.match(/\bJava\b/));

console.log('Hello Java!'.match(/\bHello\b/));
console.log('Hello Java!'.match(/\bJava\b/));
console.log('Hello Java!'.match(/\bHell\b/));
console.log('Hello Java!'.match(/\bJava!\b/)); // !는 \w가 아니므로

//* 문자 뿐만 아니라 숫자도 적용된다.
console.log('1 23 456 78'.match(/\b\d\d\b/g));
console.log('12,34,56'.match(/\b\d\d\b/g));

str = 'Breakfast at 09:00 in the room 123:456.';
console.log(str.match(/\b\d\d:\d\d\b/));
