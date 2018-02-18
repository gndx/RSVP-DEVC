import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4>Facebook Developer Circles Guadalajara</h4>
          </div>
          <div className="col-sm-6 right">
            <h4><a href="mailto:devcgdl@gmail.com">Contactar con el organizador</a></h4>
          </div>
        </div>
      </div>
    </footer>
    )
  }
};

export default Footer;