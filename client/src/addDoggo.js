import React, { Component } from 'react';
import isImg from './imgChecker';
import Modal from 'react-responsive-modal';

class AddDoggo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            open: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onOpenModal = () => {
        this.setState({open: true});
    }
    onCloseModal = () => {
        this.setState({open: false});
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({link: value});
    }
    handleSubmit(event) {
        event.preventDefault();
        let link = this.state.link;
        if(isImg(link)) {
        fetch('https://stark-meadow-71570.herokuapp.com/doggo', {method: "POST", mode: "cors", credentials: "omit", headers: {"Content-Type": "application/json; charset=utf-8"}, body: JSON.stringify({"link": link})})
        .then(e => this.props.history.push('/'));
    } else {
        this.setState({open: true});
    }}
    render() {
        const { open } = this.state;
        return (
            <div>
                <form>
                    <div className="formLabel">
                        Add a Doggo
                    </div>
                    <input onChange={this.handleChange} type="text" placeholder="link" />
                    <button onClick={this.handleSubmit}> Submit </button>
                </form>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <p className="modalText"> This is not an image. </p>
                </Modal>
            </div>
            )
    }
}

export default AddDoggo;