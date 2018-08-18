import React, { Component } from 'react';
import './App.css';
import audio1 from './sounds/boom.wav'

import Drumpad from './components/drumpad'

class App extends Component {
  constructor(props){
    super();
    this.state = { 
      currentSoundId: ''
    };
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.Boom =  this.Boom.bind(this);
  }

  handleClickPlay() {
    console.log("Handle Click Play Triggered");
  }

  handleKeyPress() {
    console.log("Handle Key Press Triggered");
  }

  playSound() {
    console.log("Play soundtriggered")
  }

  Boom() {
    console.log("Testing")
  }

  render() {
    return (
      <div className="App">
          <div className="keys">
            <Drumpad inputKey="A" dataInputKey="65" sound="Clap"/>
            <Drumpad inputKey="S" dataInputKey="83" sound="hihat"/>
            <Drumpad inputKey="D" dataInputKey="68" sound="kick"/>
            <Drumpad inputKey="F" dataInputKey="70" sound="openhat"/>
            <Drumpad inputKey="G" dataInputKey="71" sound="boom" />
            <Drumpad inputKey="H" dataInputKey="72" sound="ride" />
            <Drumpad inputKey="J" dataInputKey="74" sound="snare" />
            <Drumpad inputKey="K" dataInputKey="75" sound="tom" />
            <Drumpad inputKey="L" dataInputKey="76" sound="tink" />
          </div>

          <audio data-key="65" src="sounds/clap.wav"></audio>
          <audio data-key="83" src="sounds/hihat.wav"></audio>
          <audio data-key="68" src="sounds/kick.wav"></audio>
          <audio data-key="70" src="sounds/openhat.wav"></audio>
          <audio data-key="71" src="sounds/boom.wav"></audio>
          <audio data-key="72" src="sounds/ride.wav"></audio>
          <audio data-key="74" src="sounds/snare.wav"></audio>
          <audio data-key="75" src="sounds/tom.wav"></audio>
          <audio data-key="76" src="sounds/tink.wav"></audio>
      </div>
    );
  }
}

export default App;
