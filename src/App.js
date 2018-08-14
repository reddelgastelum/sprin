import React, { Component } from 'react';
import Button from './Button.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.callApi()
      .then((data) => {
        let zones = data.map((zone, index) => {
          let activeColor = zone.isActive ? 'green' : 'grey';
          let color = zone.isOn ? 'blue' : activeColor;
          return (
            <div key={index}>
              <Button content={`Zone ${zone.number}`} buttonColor={color} textColor={'white'} />
            </div>
          );
        });
        
        this.setState({data: zones});
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/settings');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
