import React, { Component } from 'react';

class MainImgs extends Component {
    constructor(props){
    super(props);
    this.state = {
        votes: this.props.votes
    }
        this.handleVote = this.handleVote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
      handleDelete(e) {
    e.preventDefault();
    var id = e.target.id;
    console.log(id);
    fetch('https://stark-meadow-71570.herokuapp.com/doggo', {method: 'DELETE', mode: 'cors', credentials: 'omit', headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"id": id})})
    .then(res => document.getElementById(id).setAttribute("visibility", "none"));
    this.forceUpdate();
  }
      handleVote(e) {
    console.log(e);
    e.preventDefault();
    var id = e.target.id
    console.log(e.target.id);
    if(this.state.votedID === null) {

          fetch('https://stark-meadow-71570.herokuapp.com/doggoAdd', {method: "PUT", mode: "cors", credentials: 'omit', headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"id": id})})
          .then(res => this.setState({ votedID: id, votes: this.state.votes+1 }));

    } else {
        fetch('https://stark-meadow-71570.herokuapp.com/doggoSub', {method: "PUT", mode: "cors", credentials: "omit", headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"id": this.state.votedID})});
          fetch('https://stark-meadow-71570.herokuapp.com/doggoAdd', {method: "PUT", mode: "cors", credentials: 'omit', headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"id": id})
    }).then(res => this.setState({ votedID: id, votes: this.state.votes+1 }));
    }

  }
    
    render() {
        return (
                <div className="galleryImg" key={this.props.id} id={this.props.id}>
                  <img src={this.props.link} className="doggoImg" alt="img" />
                  <div className="votesSection">

                      <p className="votesCounter"> {this.props.votes} </p>
                      <img src={require("./icons/heartIcon.png")} className="voteIcon" alt="voteIcon" onClick={this.props.handleVote} id={this.props.id} />
                      <img src={require('./icons/trashIcon.png')} className="trashIcon" onClick={this.handleDelete} id={this.props.id} alt="trashicon" />

                      <p className="votesCounter"> {this.state.votes} </p>
                      <img src={require("./icons/heartIcon.png")} className="voteIcon" alt="voteIcon" onClick={this.handleVote} id={this.props.id} />
                      <img src={require("./icons/votedHeartIcon.png")} className="voteIcon" id="hidden" alt="votedIcon" />
                      <img src={require('./icons/trashIcon.png')} className="trashIcon" onClick={this.handleDelete} alt="trashIcon" id={this.props.id} />

                </div>

                </div>
            )
    }
}

export default MainImgs;