import React from "react";
import "./App.css";
import Person from "./Person";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pdata: {
        name: "",
      },
      shouldShow: true,
    };
    console.log("App created");
  }
  shouldShowHandler = () => {
    this.setState((prevstate) => {
      return {
        shouldShow: !prevstate.shouldShow,
      };
    });
  };

  changeNameHandler = (e) => {
    const newName = e.target.value;

    this.setState((prevState) => {
      const newPDtata = Object.assign({}, prevState.pdata);
      console.log(newPDtata);
      newPDtata.name = newName;
      return {
        pdata: newPDtata,
      };
    });
    // this.setState({
    //   name: newName,
    // });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App getDerivedStateFormProps");
    return null;
  }
  render() {
    console.log("App rendered");
    return (
      <div className="App">
        <Header
          shouldShow={this.state.shouldShow}
          remove={this.shouldShowHandler}
        />
        <Person
          personData={this.state.pdata}
          changeName={this.changeNameHandler}
        />
      </div>
    );
  }

  componentDidMount() {
    console.log("App Mounted");
  }
}

export default App;
