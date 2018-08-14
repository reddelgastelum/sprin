import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <button className='btn' style={{backgroundColor:this.props.buttonColor,color:this.props.textColor}}>{this.props.content}</button>
      </div>
    );
  }
}

export default Button;
