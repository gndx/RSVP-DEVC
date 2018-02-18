import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';
import Mailchimp from './Mailchimp';


const formProps = {
  action: '//chewiekie.us17.list-manage.com/subscribe/post?u=fa8810bc4fd257bf6b7efd4fe&amp;id=060a547966',
}


class Venue extends Component {
  render() {
    return(
      <section id='venue'>
      <GoogleMaps />
      <div className="containesr">
        <div className="row">
          <div className="contact-form">
            <h2>28 de Febrero del 2018</h2>
            <h3>Centraal Guadalajara - 7:00 P.M.</h3>
            <p>Av. Ignacio Luis Vallarta 3300, 44690 Guadalajara, Jal.</p>
            <h4>Registrate:</h4>
            <Mailchimp {...formProps} />
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Venue;