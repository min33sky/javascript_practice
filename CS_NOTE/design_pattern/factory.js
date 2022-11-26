/**
 * CoffeeFactory라는 상위 클래스가 중요한 뼈대를 결정하고 하위 클래스인 LatteFactory, AmericanoFactory가
 * 구체적인 내용을 결정한다. 참고로 이는 의존성 주입이라고도 볼 수 있다.
 * CoffeeFactory에서 LatteFactory의 인스턴스를 생성하는 것이 아니라 LatteFactory 에서 생성한 인스턴스를
 * CoffeeFactory에 주입하는 것이다.
 *
 * 또한, CoffeeFactory를 보면 static으로 createCoffee() 정적 메서드를 정의하고 있다. 정적 메서드를 사용하면 클래스의
 * 인스턴스 없이 호출이 가능해 메모리를 절약할 수 있고 개별 인스턴스에 묶이지 않으며 클래스 내의 함수를 정의할 수 있는 장점이 있다.
 */

class Latte {
  constructor() {
    this.name = 'Latte';
  }
}

class Americano {
  constructor() {
    this.name = 'Americano';
  }
}

class LatteFactory {
  static createCoffee() {
    return new Latte();
  }
}

class AmericanoFactory {
  static createCoffee() {
    return new Americano();
  }
}

class CoffeeFactory {
  static createCoffee(type) {
    if (type === 'Latte') {
      return LatteFactory.createCoffee();
    } else if (type === 'Americano') {
      return AmericanoFactory.createCoffee();
    } else {
      console.log("We don't have that type of coffee.");
    }
  }
}

console.log(CoffeeFactory.createCoffee('Latte'));
console.log(CoffeeFactory.createCoffee('Americano'));
console.log(CoffeeFactory.createCoffee('Cafuccino'));
