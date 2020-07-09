import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAge: props.age
        };
    }

    increaseAge = (e) => {
        this.setState({currentAge: this.state.currentAge + 1});
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <div className="container">
                    <div className="card mt-4 mx-auto w-50">
                        <div className="card-header bg-dark text-white">
                            <h1>{lastName}, {firstName}</h1>
                        </div>
                        <div className="card-body bg-success">
                            <p>Age: {this.state.currentAge}</p>
                            <p>Hair Color: {hairColor}</p>
                            <button 
                                onClick={this.increaseAge}
                                className="btn btn-outline-dark text-white"
                                >
                                Increase {firstName}'s Age
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonCard;