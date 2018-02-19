import React from 'react';
import GoogleMaps from './GoogleMaps';
import Mailchimp from './Mailchimp';

const Venue = ({ event, eventDate, time, rsvp }) => {
  return (
    <section id='venue'>
      <GoogleMaps lat={event.venue.lat} lng={event.venue.lng} />
      <div className="containesr">
        <div className="row">
          <div className="contact-form">
            <h2>{eventDate}</h2>
            <h3>{event.venue.name} - {time}</h3>
            <p>{event.venue.address}</p>
            <h4>Registrate:</h4>
            {rsvp ? <Mailchimp action={event.mailChimpEvent} /> :
              <h2 className='rsvpClose'>{event.messageRsvp}</h2>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;