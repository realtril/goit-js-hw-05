class Storage {
  constructor(items) {
    this._items = items;
  }
  getItems() {
    return this._items;
  }
  addItem(item) {
    this._items.push(item);
    return this._items;
  }
  removeItem(item) {
    this._items.splice(this._items.indexOf(item), 1);
    return this._items;
  }
  //или просто return this._items.filter(value => value != item);
}

let storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

let items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(items);

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
