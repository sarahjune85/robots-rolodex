import React, { Component } from "react";
// import parent component:
import { CardList } from "./components/card-list/card-list.component";
//import reusable searchbox component:
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

// class Component:
class App extends Component {
  constructor() {
    super();

    // state trickles down as props - state can go wherever we want, not just here.
    // state notifies render function to render again
    this.state = {
      robots: [],
      searchField: "",
    };
    // sets context of this to this keyword defined by constructor, if not using an arrow:
    // this.handleChange = this.handleChange.bind(this);
  }

  // using componentDidMount lifecycle method - accessed through Component.
  componentDidMount() {
    // fetch users placeholder as a JSON
    // take the users that we got back from it, and set robots to that array of users.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  // function - this has to explicitly be bound in constructor:
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // OR use arrow function's lexical scoping for class methods -
  // automatically binds, no need for constructor bind line:
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  /* Anytime you use the map() function inside of render, or you have a 
  list of the same jsx elements one after another, use a key attribute. */
  /* onChange = fires whenever any change in field is detected, so for a dynamic search field */
  render() {
    //pull properties off objects and set them here:
    const { robots, searchField } = this.state;
    // triggers setState whenever user types something in - filters robot names, re-renders
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 class="title">Robot Directory</h1>
        <SearchBox placeholder="search robots" handleChange={this.handleChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
