import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";

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
      <div>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
