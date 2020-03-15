import React, { Component } from 'react';

import './FirstExo.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class FirstExo extends Component {
  state = {
    name: 'Jiiieeef'
  };

  onNameChange(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div className="FirstExo">
        <UserInput onNameChange={this.onNameChange.bind(this)} name={this.state.name} />

        <UserOutput name={this.state.name} />
        <UserOutput name="Mikasa" />
      </div>
    );
  }
}

export default FirstExo;
