import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav>
                  <ul className="nav nav-pills float-right">
                    <li><a className="nav-link" href="#about">Acerca</a></li>
                    <li><a className="nav-link" href="#portfolio">Comunidad</a></li>
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
                <img src="http://s3.amazonaws.com/chewiekie/img/logo-guadalajara.png" alt=""/>
                <h2> Febrero 28, 2018 </h2>
                <p>Centraal Guadalajara - 7:00 P.M.</p>
                <button className="btn-rsvp">¡Participar!</button>
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
    )
  }
};

export default Header;