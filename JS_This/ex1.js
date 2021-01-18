function hello() {
  console.log(this.name);
}

var obj = {
  name: 'chris',
};

let name = 'global context!';

hello.call(obj);
