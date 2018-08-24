import React, { Component } from 'react';
import fetch from 'node-fetch';
import MainImgs from './components/mainImgs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      votedID: null,
    }
    this.handleNav = this.handleNav.bind(this);

  }
  handleNav(event) {
    event.preventDefault();
    this.props.history.push('/add-doggo');
  }

  handleVote(e) {
    console.log(e);
    e.preventDefault();
    var id = e.target.id
    console.log(e.target.id);
    if(this.state.votedID === null) {
      //put request to api
          fetch('https://stark-meadow-71570.herokuapp.com/doggoAdd', {method: "PUT", mode: "cors", credentials: 'omit', headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"id": id})
    }).then(res => window.location.reload());

    } else {
        fetch('https://stark-meadow-71570.herokuapp.com/doggoSub', {method: "PUT", mode: "cors", credentials: "omit", headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"id": this.state.votedID})});
          fetch('https://stark-meadow-71570.herokuapp.com/doggoAdd', {method: "PUT", mode: "cors", credentials: 'omit', headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"id": id})
    }).then(res => this.setState({ votedID: id }));
    }

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
            {this.state.data.map((doggo) => {
              return (
                <MainImgs id={doggo._id} link={doggo.link} votes={doggo.meta.votes} date={doggo.date.slice(0,10)}  key={doggo._id}   />
              )
            })}
          </div>
        </div>
      )
  }
}

export default App;