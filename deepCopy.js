const ddaak = {
  name: 'ddaak',
  age: 31,
  married: false,
  gender: 'Male',
  hobby: ['coding', 'reading', 'music'],
  data: new Date().toISOString(),
};

// const ddaak2 = { ...ddaak }; //! 1 level deep copy

const ddaak2 = JSON.parse(JSON.stringify(ddaak)); // deep copy

console.log(ddaak);
ddaak2.hobby.push('sleeping');

console.log(ddaak);
