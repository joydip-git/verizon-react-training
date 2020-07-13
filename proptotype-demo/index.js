function person(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.print = function (message) {
    console.log(message)
    return this.name + ' ' + this.age;
}
// this.handler.bind(this);

function trainer(name, age, subject) {
    person.call(this, name, age);
    this.subject = subject;
    this.print = function () {
        var info = person.prototype.print.apply(this, ['Hi']);
        return info + ' ' + this.subject;
    };
}

function trainee(name, age, company) {
    person.call(this, name, age);
    this.org = company;
    this.print = function () {
        var info = person.prototype.print.apply(this, ['Hi']);
        return info + ' ' + this.org;
    };
}

var joydip = new trainer('joydip', 20, 'React');
console.log(joydip.print());
joydip.location = 'bangalore';
console.log(joydip.location)

var anjali = new trainee('anjali', 20, 'v');
console.log(anjali.print());

// joydip.__proto__
// trainer.prototype

// console.log(joydip.hasOwnProperty('name'));
// console.log(joydip.print());
// console.log(joydip.__proto__ === trainer.prototype)