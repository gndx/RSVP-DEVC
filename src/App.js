import React, { Component } from 'react';
import Header from './Components/Header';
import EventInfo from './Components/EventInfo';
import Agenda from './Components/Agenda';
import Speakers from './Components/Speakers';
import Venue from './Components/Venue';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <EventInfo />
        <Agenda />
        <Speakers />
        <Venue />
        <Footer />
      </div>
    );
  }
}

export default App;