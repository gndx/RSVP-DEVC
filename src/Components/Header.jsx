import React from 'react';

const Header = ({ landing, event, eventDate, time, rsvp }) => {
  return (
    <header styles={`backgroundImage: ${landing.background}`}>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav>
                <ul className="nav nav-pills float-right">
                  <li><a className="nav-link" href="https://developers.facebook.com/developercircles" rel="noopener noreferrer" target="_blank">Acerca</a></li>
                  <li><a className="nav-link" href={landing.groupUrl}>Comunidad</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <img src={landing.logo} alt={landing.circleName} />
              <h2>{eventDate}</h2>
              <p>{event.venue.name} - {time}</p>
              {rsvp ? <a href='#venue' className="btn-rsvp">{event.buttonText}</a> :
                <button href='#' className="btn-rsvp">RSVP Close</button>
              }
            </div>
          </div>
        </div>
      </div>
      <svg className="arrows xopacity hidden-xs hidden-sm">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </header>
  );
};
export default Header;