import React, { Component } from 'react';
import './App.css';

import audio1 from './sounds/boom.wav'
import clapAudio from './sounds/clap.wav'
import hihhatAudio from './sounds/hihat.wav'
import kickAudio from './sounds/kick.wav'
import openhatAudio from './sounds/openhat.wav'
import rideAudio from './sounds/ride.wav'
import snareAudio from './sounds/snare.wav'
import tomAudio from './sounds/tom.wav'
import tinkAudio from './sounds/tink.wav'

import Drumpad from './components/drumpad'

class App extends Component {
  constructor(props){
    super();
    this.state = { 
      currentSoundId: ''
    };
    this.clapSelected = this.clapSelected.bind(this);
    this.boomSelected = this.boomSelected.bind(this);
    this.hiHatSelected = this.hiHatSelected.bind(this);
    this.kickSelected = this.kickSelected.bind(this);
    this.openHatSelected = this.openHatSelected.bind(this);
    this.rideSelected = this.rideSelected.bind(this);
    this.snareSelected = this.snareSelected.bind(this);
    this.tomSelected = this.tomSelected.bind(this);
    this.tinkSelected = this.tinkSelected.bind(this);

    this.myfunction = this.myfunction.bind(this)
  }

  /*KeyDown Functionalities */
  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }      

  onKeyPressed(e) {
    if(e.keyCode === 65) {
      this.clapSelected()
    }
    if(e.keyCode === 83) {
      this.hiHatSelected()
    }
    if(e.keyCode === 68) {
      this.kickSelected()
    }
    if(e.keyCode === 70) {
      this.openHatSelected()
    }
    if(e.keyCode === 71) {
      this.boomSelected()
    }
    if(e.keyCode === 72) {
      this.rideSelected()
    }
    if(e.keyCode === 74) {
      this.snareSelected()
    }
    if(e.keyCode === 75) {
      this.tomSelected()
    }
    if(e.keyCode === 76) {
      this.tinkSelected()
    }
  }

  /*Audio Trigger Functions */
  clapSelected() {
    let audio = new Audio(`${clapAudio}`)
    audio.play()
  }

  hiHatSelected() {
    let audio = new Audio(`${hihhatAudio}`)
    audio.play()
  }

  kickSelected() {
    let audio = new Audio(`${kickAudio}`)
    audio.play()
  }

  openHatSelected() {
    let audio = new Audio(`${openhatAudio}`)
    audio.play()
  }

  boomSelected() {
    let audio = new Audio(`${audio1}`)
    audio.play()
  }

  rideSelected() {
    let audio = new Audio(`${rideAudio}`)
    audio.play()
  }

  snareSelected() {
    let audio = new Audio(`${snareAudio}`)
    audio.play()
  }

  tomSelected() {
    let audio = new Audio(`${tomAudio}`)
    audio.play()
  }

  tinkSelected() {
    let audio = new Audio(`${tinkAudio}`)
    audio.play()
  }

  render() {
    return (

      <div className="App">
          <div className="keys">
            <Drumpad inputKey="A" dataInputKey="65" sound="Clap" onClick={this.clapSelected}/>
            <Drumpad inputKey="S" dataInputKey="83" sound="hihat" onClick={this.hiHatSelected}/>
            <Drumpad inputKey="D" dataInputKey="68" sound="kick" onClick={this.kickSelected}/>
            <Drumpad inputKey="F" dataInputKey="70" sound="openhat" onClick={this.openHatSelected}/>
            <Drumpad inputKey="G" dataInputKey="71" sound="boom" onClick={this.boomSelected}/>
            <Drumpad inputKey="H" dataInputKey="72" sound="ride" onClick={this.rideSelected}/>
            <Drumpad inputKey="J" dataInputKey="74" sound="snare" onClick={this.snareSelected}/>
            <Drumpad inputKey="K" dataInputKey="75" sound="tom" onClick={this.tomSelected} />
            <Drumpad inputKey="L" dataInputKey="76" sound="tink" onClick={this.tinkSelected} />
          </div>
      </div>
    );
  }
}

export default App;
