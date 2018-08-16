import React, { Component } from 'react';
import fetch from 'node-fetch';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      votedID: null
    }
    this.handleNav = this.handleNav.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }
  handleNav(event) {
    event.preventDefault();
    this.props.history.push('/add-doggo');
  }
  handleVote(event) {
    console.log(event);
    //event.preventDefault();
    if(this.state.votedID === null) {
      //put request to api
      
      //this.setState({votedID: event.target.id})
    }
  /*  fetch('https://stark-meadow-71570.herokuapp.com/doggo', {method: "PUT", mode: "cors", credentials: 'omit', headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"_id": id})
    })*/
    
  }
  componentWillMount() {
  fetch('https://stark-meadow-71570.herokuapp.com/doggo', {mode: "cors"})
    .then(res => res.json())
    .then(json => this.setState({data: json}));    
  }
  
  render() {
    if(!this.state.data) {
      return (<div className="app">
        <div className="galleryHead">
          <h2> Today's Doggos </h2>
        </div>
        <div className="loadingScreen">
          <div className="loadingSpinner" />
        </div>
      </div>)
    }
    
    return (
        <div className="app">
          <div className="galleryHead">
            <h2> Today's Doggos </h2>
          </div>
          <div className="galleryBody">
            {this.state.data.map(function(doggo) {
              return (
                <div className="galleryImg" key={doggo._id}>
                  <img src={doggo.link} alt="img" />
                  <p> Votes: {doggo.meta.votes} </p>
                  <p> {doggo.date.slice(0, 10)} </p>
                  <button onClick={() => this.handleVote()} id={doggo._id}>vote</button>
                </div>
              )
            }, this)}
          </div>
        </div>
      )
  }
}

export default App;