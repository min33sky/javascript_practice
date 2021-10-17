//* 유니코드 'u' 플래그와 프로퍼티 \p{}

// 자바스크립트는 문자열에 유니코드 인코딩을 사용한다.
// 대부분의 문자는 2바이트로 인코딩 되었지만 이모티콘이나 특수문자는 4바이트로 인코딩됨
//! 4바인트 문자를 2바이트 문자 2개로 처리하므로 적절히 처리할 수 있는 정규표현식을 사용해야 함
console.log('😊'.length);
console.log('𝒳'.length);
console.log('a'.length);

/**
 * ? 유니코드의 모든 문자는 다양한 프로퍼티를 가진다. Letter 프로퍼티가 있으면
 * ? 어떠한 언어의 글자, Number 프로퍼티가 있으면 숫자라는 뜻
 * ? \p{...} 를 사용하면 프로퍼티를 통해 문자를 찾을 수 있고 u플래그를 반드시 사용해야함
 */
let str = 'A ბ ㄱ';

console.log(str.match(/\p{L}/gu));
console.log(str.match(/p{L}/g));

//* 16진수 찾기
regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;

console.log('number: xAF'.match(regexp));
console.log('number: xAZ'.match(regexp));

//* 한자
regexp = /\p{sc=Han}/gu;

str = `Hello Привет 你好 123_456`;

console.log(str.match(regexp));

//* 통화

regexp = /\p{Sc}\d/gu;

str = `Prices: $2, €1, ¥9`;

console.log(str.match(regexp));
