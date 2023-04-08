import React, { Component } from 'react';

class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: '#fff', borderColor: '#fff' };
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeBorderColor = this.changeBorderColor.bind(this);
  }

  changeBackgroundColor() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#fff'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ bgColor: newColor });
  }

  changeBorderColor() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#fff'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ borderColor: newColor });
  }

  render() {
    return (
      <div className= "color-container" style={{ backgroundColor: this.state.bgColor, borderColor: this.state.borderColor}}>
        <button onClick={this.changeBackgroundColor}>Ändra färg</button>
        <button onClick={this.changeBorderColor}>Ändra färg på linje</button>
      </div>
    );
  }
}

export default ColorChanger;
