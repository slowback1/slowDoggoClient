import React, { Component } from 'react';
import fetch from 'node-fetch';

  const GalleryBody = fetch('https://stark-meadow-71570.herokuapp.com/doggo')
    .then(res => res.json())
    .then(json => console.log(json));
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
          <div className="galleryHead">
            <h2> Today's Doggos </h2>
          </div>
          <div className="GalleryBody">
            {GalleryBody.map((doggo) => {
              return (
                <div className="galleryImg" key={doggo._id}>
                  <img src={doggo.link} alt="img" />
                  <p> Votes: {doggo.meta.votes} </p>
                  <p> {doggo.date.slice(0, 9)} </p>
                </div>
              )
            })}
          </div>
        </div>
      )
  }
}

export default App;