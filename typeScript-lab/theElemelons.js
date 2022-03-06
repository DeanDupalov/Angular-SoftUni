class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = [`Water`, `Fire`, `Earth`, `Air`];
    }
    // get elementIndex() {
    //     // return Number(this.weight) * Number(this.melonSort.toString().length)
    //     return this.weight * this.melonSort.length // Няма нужда от "Number()" и "toString()"
    // }
    morph() {
        let a = this.element.shift();
        this.element.push(a);
        return this; // Беше забравил да върнеш обектът (this) както е казано в условието
    }
    toString() {
        return `Element: ${this.element[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}
const w = new Watermelon(10, 'qwe');
const f = new Firemelon(10, 'qwew');
const e = new Earthmelon(10, 'qwewq');
const a = new Airmelon(10, 'qweqwe');
const m = new Melolemonmelon(10, 'qweqwe');
// console.log(w.toString());
// console.log(f.toString());
// console.log(e.toString());
// console.log(a.toString());
console.log(m.toString());
console.log(m.morph());
console.log(m.toString());
console.log(m.morph());
console.log(m.toString());
console.log(m.morph());
console.log(m.toString());
console.log(m.morph());
