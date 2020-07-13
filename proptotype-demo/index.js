
// function B(props) {
//     return (
//         <p>{props.value}</p>
//     );
// }

function person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
        return this.name + ' ' + this.age;
    }
}
// class A extends React.Component {
//     constructor(props) {
//         super(props);
//     }

// }
// this.handler.bind(this);

function trainer(name, age, subject) {
    //super(name,age)
    person.call(this, name, age);
    this.subject = subject;
    this.print = function () {

        return this.subject;
    };
}

var joydip = new trainer('joydip', 20, 'React');
console.log(joydip)
console.log(joydip.print())