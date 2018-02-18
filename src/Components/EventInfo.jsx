import React, { Component } from 'react';

class EventInfo extends Component {
  render() {
    return (
      <section id="eventInfo">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Reunión Febrero: GraphQL / Messenger Platform</h2>
              <p> Acompáñanos este 28 de Enero en Centraal Guadalajara a partir de las 7:00 P.M. para nuestra reunión mensual donde hablaremos de los principales productos y tecnologías de código libre de Facebook.</p>
              <p>Developer Circles de Facebook es un programa diseñado para crear comunidades de desarrolladores organizadas localmente. El fin de estas comunidades es informar y proporcionar un foro para conversar y compartir conocimientos sobre los temas de mayor prioridad para los desarrolladores en un mercado concreto.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default EventInfo;