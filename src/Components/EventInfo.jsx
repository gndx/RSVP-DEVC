import React from 'react';

const EventInfo = ({event}) => {
  return (
    <section id="eventInfo">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.whatIs}</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default EventInfo;