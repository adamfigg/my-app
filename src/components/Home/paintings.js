import React, { Component } from 'react';

class Paintings extends Component {
    render() {
        return (
            <div>
                {this.props.image}
                {this.props.title}
            </div>
        );
    }
}

export default Paintings;