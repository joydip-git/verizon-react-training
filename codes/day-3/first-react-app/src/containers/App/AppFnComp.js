import React from "react";
import Employee from "../../components/Employee/Employee";

const App = () => {
  const people = [
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
  ];
  const changeName = (id, newName) => {
    console.log(people);
    const found = people.find((p) => p.id === id);
    found.name = newName;
    console.log(people);
  };
  return (
    <div>
      <Employee
        name={people[0].name}
        address={people[0].address}
        nameChangeHandler={changeName}
        id={people[0].id}
      />
      <Employee
        name={people[1].name}
        address={people[1].address}
        id={people[1].id}
        nameChangeHandler={changeName}
      />
      <Employee
        name={people[2].name}
        address={people[2].address}
        id={people[2].id}
        nameChangeHandler={changeName}
      />
    </div>
  );
};
export default App;
