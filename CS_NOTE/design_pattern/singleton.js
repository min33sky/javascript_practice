/**
 * Singleton
 * - Ensure a class has only one instance, and provide a global point of access to it.
 * - The Singleton pattern can be implemented in JavaScript by creating an object with a method that instantiates the object if it hasn't been instantiated yet, and otherwise returns a reference to the object.
 * - The Singleton pattern is useful when exactly one object is needed to coordinate others across a system.
 * - The Singleton pattern is used in JavaScript for creating objects that act as a single point of access for resources that are shared across an application.
 */

//? Javascript function으로 싱글톤 구현
const SingletonFunc = (() => {
  let instance;

  createInstance = () => {
    const object = new Object({ name: 'Singleton' });
    return object;
  };

  return {
    getInstance() {
      if (!instance) {
        console.log('~~~~ Create instance ~~~~');
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = SingletonFunc.getInstance();
const instanceB = SingletonFunc.getInstance();

console.log(instanceA === instanceB); // true
console.log(instanceA.name); // Singleton
console.log(instanceB.name); // Singleton

console.log('============================================================');

//? Javascript Class로 싱글톤 구현
class Singleton {
  constructor() {
    if (Singleton.instance) {
      console.log('#### Singleton instance already exists ####');
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const instanceAClass = new Singleton();
const instanceBClass = new Singleton();

console.log(instanceAClass === instanceBClass); // true
