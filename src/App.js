import React, { Component } from 'react';
import Header from './Components/Header';
import EventInfo from './Components/EventInfo';


class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <EventInfo />
      </div>
    );
  }
}

export default App;