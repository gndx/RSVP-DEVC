import React from 'react';

const Speakers = ({ speakers }) => {
  return (
    <section id="speakers">
      <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <h2>Speakers</h2>

              <div className="row">
              
              {speakers.map(speaker =>
                <div className="col-sm-6" key={Math.random()}>
                  <div className="card">
                    <img src={speaker.photo} width="100%" alt="" />
                    <div className="content">
                      <div className="head">
                        <div className="htitle">
                          <h3>{speaker.conferenceTitle}</h3>
                          <h4>{speaker.name}</h4>
                          <span>{speaker.jobTitle}</span>
                        </div>
                        <p>{speaker.description}</p>
                      </div>
                    </div>
                    <div className="more">
                      <ul>
                        {speaker.social.map(socialNetwork =>
                          <li key={socialNetwork.name}>
                            <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer">
                              <i className={'fa fa-' + socialNetwork.name + '-square'}></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default Speakers;