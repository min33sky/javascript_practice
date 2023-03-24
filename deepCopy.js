/**
 * * Deep Copy (깊은 복사)
 * - Object.assign()은 1 level deep copy
 * - spread operator는 1 level deep copy
 * - JSON.parse(JSON.stringify())는 deep copy
 * - lodash.cloneDeep()은 deep copy
 * - 참고: https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
 */

const ddaak = {
  name: 'ddaak',
  age: 31,
  married: false,
  gender: 'Male',
  hobby: ['coding', 'reading', 'music'],
  data: new Date().toISOString(),
};

// const ddaak2 = { ...ddaak }; //! 1 level deep copy

const ddaak2 = JSON.parse(JSON.stringify(ddaak)); //? deep copy
const ddaak3 = Object.assign({}, ddaak2); //! deep copy (Object.assign()은 1 level deep copy)

console.log(ddaak);
ddaak2.hobby.push('sleeping'); //? 깊은 복사 영향으로 ddaak에 배열에는 영향을 주지 않음

console.log(ddaak); // sleep 추가 안됨
console.log(ddaak2); // sleep 추가됨
console.log(ddaak3); // sleep 추가됨
