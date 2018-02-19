import React, { Component } from 'react';
import Header from './Components/Header';
import EventInfo from './Components/EventInfo';
import Agenda from './Components/Agenda';
import Speakers from './Components/Speakers';
import Venue from './Components/Venue';
import Footer from './Components/Footer';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      now: moment().format('YYYY-MM-DD hh:mm:ss a'),
      end: moment(this.props.event.endRsvp, 'YYYY-MM-DD hh:mm:ss a'),
      eventDate: moment(this.props.event.date, 'YYYY-MM-DD hh:mm:ss a').format('LL'),
      time: moment(this.props.event.date, 'YYYY-MM-DD hh:mm:ss a').format('LT'),
      rsvp: null
    }
  }

  componentWillMount(){
    if(this.state.now > this.state.end._i) {
      this.setState({ rsvp: false})
    } else {
      this.setState({ rsvp: true})
    }
  }

  render() {
    const { landing, event, agenda, speakers } = this.props;
    return (
      <div className='main'>
        <Header landing={landing} 
          eventDate={this.state.eventDate}
          time={this.state.time}
          rsvp={this.state.rsvp}
          event={event}
        />
        <EventInfo event={event} />
        <Agenda agenda={agenda} />
        <Speakers speakers={speakers} />
        <Venue event={event} 
          eventDate={this.state.eventDate}
          time={this.state.time}
          rsvp={this.state.rsvp}
        />
        <Footer email={landing.email} name={landing.circleName} />
      </div>
    );
  }
};

App.defaultProps = {
  landing: {
    circleName: 'Facebook Developer Circles Guadalajara',
    logo: 'https://s3.amazonaws.com/chewiekie/img/logo-guadalajara.png',
    background: 'https://s3.amazonaws.com/chewiekie/img/devc-bg.png',
    groupUrl: 'https://www.facebook.com/groups/DevCGuadalajara/',
    email: 'devcgdl@gmail.com'
  },
  event: {
    title: 'Reunión Febrero: GraphQL / Messenger Platform',
    description: 'Acompáñanos este 28 de Febrero en Centraal Guadalajara a partir de las 7:00 P.M. para nuestra reunión mensual donde hablaremos de los principales productos y tecnologías de código libre de Facebook.',
    whatIs: 'Developer Circles de Facebook es un programa diseñado para crear comunidades de desarrolladores organizadas localmente. El fin de estas comunidades es informar y proporcionar un foro para conversar y compartir conocimientos sobre los temas de mayor prioridad para los desarrolladores en un mercado concreto.',
    venue: {
      name: 'Centraal Guadalajara',
      address: 'Av. Ignacio Luis Vallarta 3300, 44690 Guadalajara, Jal.',
      lat: 20.6751803,
      lng: -103.3927516
    },
    date: '2018-02-28 07:00:00 pm',
    endRsvp: '2018-02-28 04:00:00 pm',
    buttonText: '¡Participar!',
    messageRsvp: 'Por el momento no es posible registrar más lugares para el evento, nuestro cupo máximo ha sido alcanzado.',
    mailChimpEvent: '//facebook.us16.list-manage.com/subscribe/post?u=b7544c7f63148ada4e7f5893b&amp;id=7037202809'
  },
  agenda: [
    {time: '7:00PM ', activity: 'Registro', attend: 'DEVC GDL'},
    {time: '7:30PM', activity: 'Bienvenida', attend: 'DEVC GDL'},
    {time: '7:40PM', activity: '¿Quién es ese GraphQL del que todos mis amigos están hablando?', attend: 'Fer Perales'},
    {time: '8:20PM', activity: 'Messenger Platform', attend: 'Zura Guerra'},
    {time: '9:00PM', activity: 'Networking', attend: 'Comunidad'},
  ],
  speakers: [
    {
      name: 'Fer Perales', 
      photo: 'http://s3.amazonaws.com/chewiekie/img/fer-perales-devc-gdl.jpg', 
      bio: 'Actualmente trabajo como Senior Software Engineer en michelada.io. He estado dedicándome de tiempo completo al desarrollo web de manera profesional desde hace 5 años.',
      jobTitle: 'Ingenierio de software',
      conferenceTitle: '¿Quién es ese GraphQL del que todos mis amigos están hablando?',
      description: 'Ingenierio de software. Promotor del FLOSS (Free, Libre and Open Source Software). Anfitrión de RubyGDL y RailsBridge Mexican Chapter. Actualmente trabajo como Senior Software Engineer en michelada.io. He estado dedicándome de tiempo completo al desarrollo web de manera profesional desde hace 5 años. Ingenierio de software. Promotor del FLOSS (Free, Libre and Open Source Software). Anfitrión de RubyGDL y RailsBridge Mexican Chapter.',
      social: [
        {name: 'twitter', url: 'https://twitter.com/ferperalesm'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/ferperales/'}
      ],
    },
    {
      name: 'Zura Guerra', 
      photo: 'http://s3.amazonaws.com/chewiekie/img/zura-guerra-devc-gdl.jpg', 
      bio: '',
      jobTitle: 'Por confirmar',
      conferenceTitle: '',
      description: 'Por confirmar',
      social: [
        {name: 'twitter', url: 'https://github.com/grafofilia'}
      ],
    }
  ]
};

export default App;