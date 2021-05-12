let str1 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log(str1.match(/^\d/g));

let str2 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log(str2.match(/\d$/gm));

console.log(str2.match(/\d\n/gm));
