import React, { Component } from 'react';

class MainImgs extends Component {
    constructor(props){
    super(props);
    this.state = {
        votes: null
    }
    }
    
    render() {
        return (
                <div className="galleryImg" key={this.props.id}>
                  <img src={this.props.link} className="doggoImg" alt="img" />
                  <div className="votesSection">
                      <p className="votesCounter"> {this.props.votes} </p>
                      <img src={require("./icons/heartIcon.png")} className="voteIcon" alt="voteIcon" onClick={this.props.handleVote} id={this.props.id} />
                      <img src={require('./icons/trashIcon.png')} className="trashIcon" onClick={this.props.handleDelete} id={this.props.id} alt="trashicon" />
                </div>

                </div>
            )
    }
}

export default MainImgs;