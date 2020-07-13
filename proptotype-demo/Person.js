//ES6 class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        return this.name + '' + this.age;
    }
}

class Trainer extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    print() {
        var info = super.print();
        return info + ' ' + this.subject;
    };
}

const anil = new Person('anil', 20);
const joydip = new Trainer('joy', 40, 'React')
console.log(joydip.print())