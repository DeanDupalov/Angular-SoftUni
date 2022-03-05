class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} says Hi!`
    }
}

const user = new User('Dean');
console.log(user.sayHello());
