import React, { Component } from 'react';

class MainImgs extends Component {
    constructor(props){
    super(props);
    this.state = {
        placeholder: null
    }
    }
    
    render() {
        return (
                <div className="galleryImg" key={this.props.id}>
                  <img src={this.props.link} alt="img" />
                  <p> Votes: {this.props.votes} </p>
                  <button onClick={this.props.handleVote} id={this.props.id}>vote</button>
                </div>
            )
    }
}

export default MainImgs;