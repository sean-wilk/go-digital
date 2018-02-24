import React, { Component } from 'react';

class TextBox extends Component {

render() {

  const boxContainer = {
    display: 'block',
    position: 'relative',
    margin: this.props.margin,
    height: this.props.height,
    width: this.props.width,
    maxWidth: this.props.maxWidth
  }

  const textDiv = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: this.props.borderColour,
    borderRadius: '4px',
    backgroundColor: this.props.fillColour,
    height: '100%',
    width: '100%',
    display: 'block',
    overflow: 'scroll'
  }

  const boxText = {
    padding: '16px',
    overflow: 'auto'
  }

  const hatchedShadow = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: this.props.shadowColour,
    borderRadius: '4px',
    background:  `repeating-linear-gradient(45deg, ${this.props.shadowColour}, ${this.props.shadowColour} 2px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0) 8px)`,
    margin: `${this.props.shadowMargin} 0 0 ${this.props.shadowMargin}`,
    height: '100%',
    width: '100%'
  }

  return (
    <div style={boxContainer}>
      <div style={textDiv}>
        <div style={boxText}>{this.props.text}</div>
      </div>
      <div style={hatchedShadow}>
      </div>
    </div>
  );
}
}

export default TextBox;