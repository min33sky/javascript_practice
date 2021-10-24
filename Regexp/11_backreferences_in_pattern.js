//* Backreferences in pattern: \N and \k<name>

//* Backreferce by number: \N

let str = `He said: "She's the one!".`;

let regexp = /['"](.*?)['"]/g;

console.log(str.match(regexp));

regexp = /(['"])(.*?)\1/g;

console.log(str.match(regexp));

regexp = /(?<quote>['"])(.*?)\k<quote>/g;

console.log(str.match(regexp));
