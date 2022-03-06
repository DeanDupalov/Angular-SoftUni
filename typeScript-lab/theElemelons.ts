abstract class Melon {
    constructor(public weight: number, public melonSort: string) { }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.constructor.name.slice(0,-5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

class Watermelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort)
    }
}

class Firemelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort)
    }
}
class Earthmelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort)
    }
}
class Airmelon extends Melon {
    constructor(public weight: number, public melonSort: string) {
        super(weight, melonSort)
    }
}

class Melolemonmelon extends Watermelon { 
    public element: string[];
    constructor(public weight: number, public melonSort: string) {      
        super(weight, melonSort)
        this.element = [`Water`, `Fire`, `Earth`, `Air`]
    }
    // get elementIndex() {
    //     // return Number(this.weight) * Number(this.melonSort.toString().length)
    //     return this.weight * this.melonSort.length // Няма нужда от "Number()" и "toString()"
    // }
    morph() {
        let a = this.element.shift();
        this.element.push(a)
        return this; // Беше забравил да върнеш обектът (this) както е казано в условието
    }
    toString() {
        return `Element: ${this.element[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}



const w: Watermelon = new Watermelon(10, 'qwe');
const f: Firemelon = new Firemelon(10, 'qwew');
const e: Earthmelon = new Earthmelon(10, 'qwewq');
const a: Airmelon = new Airmelon(10, 'qweqwe');
const m: Melolemonmelon = new Melolemonmelon(10, 'qweqwe');


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

