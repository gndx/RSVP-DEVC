import React, { Component } from 'react';
import Header from './Components/Header';
import EventInfo from './Components/EventInfo';
import Agenda from './Components/Agenda';
import Speakers from './Components/Speakers';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <EventInfo />
        <Agenda />
        <Speakers />
      </div>
    );
  }
}

export default App;