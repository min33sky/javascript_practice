//? 제너레이터 함수를 이용한 UUID 생성기

function* uuidGenerator() {
  let r = 0;

  while (true) {
    console.log('new Date().getTime():', new Date().getTime());

    yield 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
}

const uuid = uuidGenerator();
console.log(uuid.next().value);
