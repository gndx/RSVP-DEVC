import React, { Component } from 'react';

class Agenda extends Component {
  render() {
    return(
      <section id="agenda">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <h2>Agenda</h2>
              <div className="row box">
                <div className="col-sm-1">
                  <img src="http://s3.amazonaws.com/chewiekie/img/devcircle-icon.png" alt="Developer Circles Logo" />
                </div>
                <div className="col-sm-3">
                  <h3>7:00PM - 7:30PM</h3>
                </div>
                <div className="col-sm-5">
                  <p>Bienvenida FB Developer Circle</p>
                </div>
                <div className="col-sm-3">
                  <span>FB Developer Leads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Agenda;