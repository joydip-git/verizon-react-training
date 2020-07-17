import React from "react";

const Person = (props) => {
  console.log("Person rendered");
  const { personData, changeName } = { ...props };
  return (
    <div>
      <input type="text" value={personData.name} onChange={changeName} />
      <br />
      <p>{personData.name}</p>
    </div>
  );
};
export default Person;
