class Country {
  name;
  idolGoups;

  constructor(name, idolGoups) {
    this.name = name;
    this.idolGoups = idolGoups;
  }
}

class IdolGroup {
  name;
  members;

  constructor(name, members) {
    this.name = name;
    this.members = members;
  }

  static fromList(name, list, gender) {
    return new IdolGroup(
      name,
      list.map((member) =>
        gender === 'male'
          ? new MaleIdol(member.name, member.year)
          : new FemaleIdol(member.name, member.year),
      ),
    );
  }
}

class Idol {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class MaleIdol extends Idol {
  sing() {
    return `${this.name}이 노래를 부릅니다.`;
  }
}

class FemaleIdol extends Idol {
  dance() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

const iveMembers = [
  {
    name: '안유진',
    year: 2003,
  },
  {
    name: '가을',
    year: 2002,
  },
  {
    name: '레이',
    year: 2004,
  },
  {
    name: '장원영',
    year: 2003,
  },
  {
    name: '리즈',
    year: 2004,
  },
  {
    name: '이서',
    year: 2007,
  },
];

const btsMembers = [
  {
    name: 'RM',
    year: 1994,
  },
  {
    name: '진',
    year: 1992,
  },
  {
    name: '슈가',
    year: 1993,
  },
  {
    name: '제이홉',
    year: 1994,
  },
  {
    name: '지민',
    year: 1995,
  },
  {
    name: '뷔',
    year: 1995,
  },
  {
    name: '정국',
    year: 1997,
  },
];

//////////////////////////////////////////////////////

const ive = IdolGroup.fromList('아이브', iveMembers, 'female');
const bts = IdolGroup.fromList('방탄소년단', btsMembers, 'male');
const kpopIdol = new Country('대한민국', [ive, bts]);

console.log(kpopIdol);
console.log(ive);
console.log(bts);
console.log(ive.members[0].dance());
console.log(bts.members[0].sing());
