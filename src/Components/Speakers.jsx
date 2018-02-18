import React, { Component } from 'react';

class Speakers extends Component {
  render() {
    return (
      <section id="speakers">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <h2>Speakers</h2>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img src="" width="100%" alt="" />
                <div className="content">
                  <div className="head">
                    <div className="htitle">
                      <h3>Titulo</h3>
                      <h4>Oscar Barajas</h4>
                      <span>Fullstack en Chewiekie.com</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni, sed sequi, non aut maiores obcaecati deserunt est nobis earum recusandae necessitatibus nisi!</p>
                  </div>
                </div>
                <div className="more">
                  <ul>
                    <li >
                      <a href='/' target='_blank' rel="noopener noreferrer">
                        <i className={'fa fa-' + 'facebook' + '-square'}></i>
                      </a>
                    </li>
                    <li >
                      <a href='/' target='_blank' rel="noopener noreferrer">
                        <i className={'fa fa-' + 'facebook' + '-square'}></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Speakers;