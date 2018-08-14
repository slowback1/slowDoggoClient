import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
                <div className="about">
                    <div className="aboutHeader">
                        About SlowDoggo
                    </div>
                    <div className="aboutBody">
                        SlowDoggo is a daily contest in which users submit a link to a picture of their favorite doggo to the website, where other users will then vote on which doggo is their favorite.  The winner of each day is then shown off in the archive page, where they will forever stay in the halls of SlowDoggo glory.
                    
                        <p>It is built and maintained by Andrew Wobeck.</p>
                    </div>
                </div>
            )
    }   
}

export default About;