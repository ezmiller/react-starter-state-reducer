import React, { Component } from "react";
import { updateName } from "./updaters";
import "./App.css";

const HelloWorld = ({ name }) => <p>Hello, {name}!</p>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.initialState;
  }

  internalSetState = (updater, callback) => {
    this.setState(currentState => {
      return [updater]
        .map(u => (typeof u === "function" ? u(currentState) : u)) // updater can be a (thunk) function
        .map(u => this.props.stateReducer(currentState, u))
        .map(u => (Object.keys(u) ? u : null))[0];
    }, callback);
  };

  handleChange = event => {
    const newValue = event.target.value;
    this.internalSetState(updateName(newValue));
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>React Starter Kit with State Reducer</h1>
          <input
            type="text"
            placeholder="Enter a name"
            onChange={this.handleChange}
            value={name}
            style={{ color: "black", textAlign: "center" }}
          />
          {name ? <HelloWorld name={name} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
