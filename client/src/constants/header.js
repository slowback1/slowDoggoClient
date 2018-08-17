import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.handleHomeNav = this.handleHomeNav.bind(this);
        this.handleAboutNav = this.handleAboutNav.bind(this);
        this.handleAddDoggoNav = this.handleAddDoggoNav.bind(this);
        this.handleArchiveNav = this.handleArchiveNav.bind(this);
    }
    handleHomeNav(event) {
        event.preventDefault();
        this.props.history.push('/');
    }
    handleAboutNav(event) {
        event.preventDefault();
        this.props.history.push('/about');
    }
    handleAddDoggoNav(event) {
        event.preventDefault();
        this.props.history.push('/add-doggo');
    }
    handleArchiveNav(event) {
        event.preventDefault();
        this.props.history.push('/archive');
    }
    
    render() {
        return (
                <div className="header">
                  <div className="hLogo">
                  </div>
                  <div className="hList">
                    <ul>
                        <li onClick={this.handleHomeNav}>Home</li>
                        <li onClick={this.handleAboutNav}>About</li>
                        <li onClick={this.handleAddDoggoNav}>Add a Doggo</li>
                        <li onClick={this.handleArchiveNav}>Archive</li>
                    </ul>
                  </div>
                </div>
            )
    }
}

export default Header;