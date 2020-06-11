// import React, { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   return <h1>Under construction</h1>;
// }

// export default App;
import React, { Component } from "react";
import User from "./User";

class App extends Component {
  render() {
    return <User users={this.state.users} />;
  }

  state = {
    users: [],
  };

  componentDidMount() {
    fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }
}

export default App;
