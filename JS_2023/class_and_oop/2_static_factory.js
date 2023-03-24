//? static keyword는 factory method를 만들 때 주로 사용된다.

class IDolMember {
  #name;
  #groupName;
  #age;

  constructor(name, groupName, age) {
    this.#name = name;
    this.#groupName = groupName;
    this.#age = age;
  }

  static fromObject(obj) {
    return new IDolMember(obj.name, obj.groupName, obj.age);
  }

  static fromList(list) {
    return new IDolMember(list[0], list[1], list[2]);
  }

  get pringInfo() {
    return `${this.#name} is a member of ${this.#groupName} and ${
      this.#age
    } years old.`;
  }
}

const jimin = new IDolMember('jimin', 'BTS', 25);
console.log(jimin);

const yujin = IDolMember.fromObject({
  name: 'Yujin',
  groupName: 'IZ*ONE',
  age: 20,
});
console.log(yujin.pringInfo);

const wonYoung = IDolMember.fromList(['WonYoung', 'IZ*ONE', 20]);
console.log(wonYoung.pringInfo);
