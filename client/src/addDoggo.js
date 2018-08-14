import React, { Component } from 'react';

class AddDoggo extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="formLabel">
                        Add a Doggo
                    </div>
                    <input type="text" placeholder="link" />
                    <button type="submit"> Submit </button>
                </form>
            </div>
            )
    }
}

export default AddDoggo;