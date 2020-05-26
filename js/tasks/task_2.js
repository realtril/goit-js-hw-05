class User {
  constructor({ name, age, followers }) {
    this._name = name;
    this._age = age;
    this._followers = followers;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }
  set age(val) {
    this._age = val;
  }

  get followers() {
    return this._age;
  }

  set followers(v) {
    this._followers = v;
  }

  getInfo() {
    console.log(
      `User ${this._name} is ${this._age} years old and has ${this._followers}`,
    );
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
