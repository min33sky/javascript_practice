let ape = {
  hasThumbs: true,
  hasTail: false,
  swing: function () {
    return '메달리기';
  },
};

// Object.create : 특정 프로토타입이 연결된 객체를 생성한다.
let chimp = Object.create(ape);
let bonobo = Object.create(ape);

bonobo.habitat = '중앙 아프리카';
console.log(bonobo.habitat);
console.log(bonobo.hasTail);
console.log(chimp.swing());
