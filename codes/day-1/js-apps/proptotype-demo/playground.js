//object literal syntax
/*
function person() {
    var name = 'anil';
    var age = 20;
    return (
        <div>
            {name}
        </div>
    );
    return React.createElement('div',{className='abc'},{name});
}

*/
// var divElement = document.createElement('div');
// body.append(divElement);
// function person() {
//     var name = 'anil';
//     var age = 20;
//     return {
//         name: name,
//         age: age
//     };
// }
// var anilPerson = person();
// console.log(anilPerson.name)

//constructor function

// function person(name, age) {
//     return {
//         fname: name,
//         page: age
//     }
// }

function person(name, age) {
    //value property
    this.personName = name;
    this.personAge = age;
    //functional property
    this.print = function () {
        console.log(this)
        return this.personName + ' ' + this.personAge;
    }
}
var personProto = person.prototype;

console.log(personProto.__proto__)//object prototype
console.log(personProto) //person prototype
var anilPerson = new person('anil', 20);
console.log(anilPerson) //person object ref

var x = 10;
console.log(window.x)
// function Object() {

// }

/*
var anilPerson = new person('anil', 20);
var sunilPerson = new person('sunil', 30);
anilPerson.print();
sunilPerson.print();
// console.log(anilPerson.print());
// console.log(this.personAge)
console.log('outside')
console.log(this)
var x = 20
var y = 30
*/