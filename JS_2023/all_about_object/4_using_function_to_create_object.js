function IdolMember(name, year) {
  //? new.target: new 연산자를 사용했는지 확인
  if (!new.target) {
    return new IdolMember(name, year);
  }

  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name} is dancing`;
  };
}

const yujin = new IdolMember('Yujin', 2003);
console.log(yujin);
console.log(yujin.dance());

const yena = IdolMember('Yena', 2003);
console.log(yena); //? undefined (new.target 처리 코드가 없을 때)
