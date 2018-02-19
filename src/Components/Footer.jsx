import React from 'react';

const Footer = ({ email, name }) => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4>{name}</h4>
          </div>
          <div className="col-sm-6 right">
            <h4><a href={`mailto:${email}`}>Contactar con el organizador</a></h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;