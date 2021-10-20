//* Sets and ranges

// find [t or m], and then 'op'
console.log('Mop top'.match(/[tm]op/gi));

console.log('Viola'.match(/V[oi]la/));

//* Ranges
console.log('Exception 0xAF'.match(/x[0-9A-F]{1,2}/g));

//* Excluding ranges
console.log('alice15@gamil.com'.match(/[^\w\d\s]/g));

//* Escaping in [...]
//? 대괄호 안에서는 escape할 필요가 없다.

let regexp = /[-().^+]/g;

console.log('1 + 2 - 3'.match(regexp));

//! [^script]의 의미는 주어진 단어를 제외한 어떤 단어 하나가 와야 일치한다.
console.log('Java'.match(/Java[^script]/));

//! S는 제외 조건이 아닌 단어이므로 정규표현식에 매치된다.
console.log('JavaScript'.match(/Java[^script]/));
