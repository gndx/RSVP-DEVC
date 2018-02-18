import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';

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
            <form>
              <h4>Registrate:</h4>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="¿Comó te enteraste del evento?" />
              </div>
              <button type="submit" className="btn btn-primary">Participar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Venue;