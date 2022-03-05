function solution() {
    abstract class Employee {

        public salary: number;
        public tasks: string[];

        constructor(public name: string, public age: number) {
            this.salary = 0;
            this.tasks = []
        }

        public work() {
            const task = this.tasks.shift();

            console.log(task);
            this.tasks.push(task);
        }
        public collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
        public getSalary() {
            return this.salary;
        }

    }

    class Junior extends Employee {
        constructor(name: string, age: number) {
            super(name, age);
            this.tasks = [`${this.name} is working on simple task.`]
        }
    }

    class Senior extends Employee {
        constructor(name: string, age: number) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on complicated task.`,
                `${this.name} is taking time off work`,
                `${this.name} is supervising junior workers.`,
            ]
        }

    }
    class Manager extends Employee {
        public dividend: number;

        constructor(name: string, age: number) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ]
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }


    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }
}


const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
