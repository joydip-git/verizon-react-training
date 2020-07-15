import React, { Component } from "react";
import Employees from "../../components/Employees/Employees";

export default class App extends Component {
  constructor() {
    super();
    //do it in the constructor in case you did not use arrow operator
    //this.changeNameHandler = this.changeNameHandler.bind(this);
    this.state = {
      counter: 0,
      people: [
        {
          id: 1,
          name: "anil",
          address: "bangalore",
        },
        {
          id: 2,
          name: "sunil",
          address: "mumbai",
        },
        {
          id: 3,
          name: "mahjhesh",
          address: "chennai",
        },
      ],
    };
  }

  //changeNameHandler(id, newName)
  changeNameHandler = (id, e) => {
    const newName = e.target.value;
    this.setState(
      (prevState) => {
        const newState = { ...prevState };
        const found = newState.people.find((p) => p.id === id);
        const index = newState.people.findIndex((p) => p.id === id);

        found.name = newName;
        newState.people[index] = found;

        return {
          people: newState.people,
        };
      },
      () => console.log(this.state.people)
    );
  };

  render() {
    return (
      <div>
        <Employees
          people={this.state.people}
          changeName={this.changeNameHandler}
        />
      </div>
    );
  }
}
