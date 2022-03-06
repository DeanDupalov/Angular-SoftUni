class Box {
    constructor() {
        this._boxes = [];
    }
    add(value) {
        this._boxes.unshift(value);
    }
    remove() {
        this._boxes.shift();
    }
    get count() {
        return this._boxes.length;
    }
}
// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);
let box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
