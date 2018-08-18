import React, { Component } from 'react';

export default class Drumpad extends Component {
    render() {
        return(
            <div data-key={this.props.dataInputKey} className="key" onClick={this.Boom}>
                <kbd>{this.props.inputKey}</kbd>
                <span className="sound">{this.props.sound}</span>
            </div>
        )
    }
}