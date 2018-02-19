import React from 'react';

const Agenda = ({ agenda }) => {
  return (
    <section id="agenda">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <h2>Agenda</h2>
            {agenda.map(item =>
              <div className="row box" key={Math.random()}>
                <div className="col-sm-1">
                  <img src="http://s3.amazonaws.com/chewiekie/img/devcircle-icon.png" alt="Developer Circles Logo" />
                </div>
                <div className="col-sm-2">
                  <h3>{item.time}</h3>
                </div>
                <div className="col-sm-6">
                  <p>{item.activity}</p>
                </div>
                <div className="col-sm-3">
                  <span>{item.attend}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;