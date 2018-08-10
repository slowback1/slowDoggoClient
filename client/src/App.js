import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(event) {
    event.preventDefault();
    this.props.history.push('/add-doggo');
  }
  render() {
    return (
        <div className="app">
          <button onClick={this.handleNav}>go to add doggo page</button>
        </div>
      )
  }
}

export default App;