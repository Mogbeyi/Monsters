import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    this.setState({ monsters: users });
  }

  render() {
    return (
      <div className="App">
        <input
          style={{ marginBottom: "20px" }}
          type="search"
          placeholder="Search Monsters"
        ></input>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
