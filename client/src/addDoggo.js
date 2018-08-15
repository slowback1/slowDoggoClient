import React, { Component } from 'react';

class AddDoggo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({link: value});
    }
    handleSubmit(event) {
        event.preventDefault();
        let link = this.state.link;
        fetch('https://stark-meadow-71570.herokuapp.com/doggo', {method: "POST", mode: "cors", credentials: "omit", headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"link": link})});
    }
    render() {
        return (
            <div>
                <form>
                    <div className="formLabel">
                        Add a Doggo
                    </div>
                    <input onChange={this.handleChange} type="text" placeholder="link" />
                    <button onClick={this.handleSubmit}> Submit </button>
                </form>
            </div>
            )
    }
}

export default AddDoggo;