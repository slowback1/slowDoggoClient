import React, { Component } from 'react';


class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            archiveData: null
        }
    }
    componentWillMount() {
        fetch('https://stark-meadow-71570.herokuapp.com/archive', {mode: "cors"})
            .then(res => res.json())
            .then(json => this.setState({archiveData: json}));
    }
  render() {
    if(!this.state.archiveData) {
      return (<div className="app">
        <div className="galleryHead">
          <h2> Previous Winning Doggos </h2>
        </div>
        <div className="loadingScreen">
          <div className="loadingSpinner" />
        </div>
      </div>)
    }
    
    return (
        <div className="app">
          <div className="galleryHead">
            <h2> Previous Winning Doggos </h2>
          </div>
          <div className="galleryBody">
            {this.state.archiveData.map((doggo) => {
              return (
                <div className="galleryImg" key={doggo._id}>
                  <img src={doggo.link} alt="img" />
                  <p> {doggo.date.slice(0, 10)} </p>
                </div>
              )
            })}
          </div>
        </div>
      )
  }
}

export default Archive;