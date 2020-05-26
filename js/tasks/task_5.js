class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs({ maxSpeed, price, isOn, speed, distance }) {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`,
    );
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */

  constructor({ maxSpeed, price, isOn = false, speed = 0, distance = 0 }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get _price() {
    return this.price;
  }
  set _price(price) {
    this.price = price;
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
    return this.isOn;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
    return this.isOn, this.speed;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    let speedAcc = this.speed + value;
    if (speedAcc < this.maxSpeed) {
      this.speed = speedAcc;
    }
    return this.speed;
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    let speedDec = this.speed - value;
    if (speedDec > 0) {
      this.speed = speedDec;
    }
    return this.speed;
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn === true) {
      this.distance = hours * this.speed;
    }
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(60);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(30);

Car.getSpecs(mustang);

mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
Car.getSpecs(mustang);
