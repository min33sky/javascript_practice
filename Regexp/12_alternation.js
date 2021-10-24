//* Alternation (OR) |

let regexp = /html|php|css|java(script)?/gi;

let str = 'First HTML appeared, then CSS, then JavaScript';

console.log(str.match(regexp));

//? regexp for ttime
regexp = /([01]\d|2[0-3]):[0-5]\d/g;

console.log('00:00 10:10 23:59 25:99 1:2'.match(regexp));

//? find programming languages

regexp = /Java(Script)?|PHP|C(\+\+)?/g;
console.log('Java JavaScript PHP C C++'.match(regexp));

//? Find bbtag pairs
regexp = /\[(b|url|quote)\].*?\[\/\1\]/gs;
str = '..[url][b]http://google.com[/b][/url]..';
console.log(str.match(regexp));

//? find quoted strings
regexp = /"(\\.|[^"\\])*"/g;
str = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';

//? find the full tag
regexp = /<style(>|\s.*?>)/g;
console.log('<style> <styler> <style test="...>'.match(regexp));
