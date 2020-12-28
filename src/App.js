import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          style={{ marginBottom: "20px" }}
          type="search"
          placeholder="Search Monsters"
          value={this.state.searchField}
          onChange={(e) => this.setState({ searchField: e.target.value })}
        ></input>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
