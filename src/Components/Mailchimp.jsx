import React from "react"
import jsonp from "jsonp"

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class Mailchimp extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null,
      shareUrl: null
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const name = this.inputName.value;
    const email = this.inputEmail.value;
    const type = this.inputType.value;
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(email)}&FNAME=${encodeURIComponent(name)}&TYPE=${encodeURIComponent(type)}`;

    if (!email || email.length < 5 || email.indexOf("@") === -1) {
      this.setState({ status: "empty" })
      return
    }

    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        console.log(err, data)
        if (data.msg.includes("already subscribed")) {
          this.setState({
            status: 'duplicate',
            msg: err
          })
        } else if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
          this.refs.rsvp.reset();
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
          this.refs.rsvp.reset();
        }
      })
    )
  };

  render() {
    const { action, messages } = this.props;
    const { status, msg } = this.state;
    return (
      <form action={action} method="post" ref='rsvp' noValidate>
        <div className="form-group">
          <input
            ref={name => this.inputName = name}
            type="text"
            defaultValue=""
            name="FNAME"
            required={true}
            className="form-control"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <input
            ref={email => (this.inputEmail = email)}
            type="email"
            defaultValue=""
            name="EMAIL"
            required={true}
            className="form-control"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="form-group">
          <input
            ref={type => (this.inputType = type)}
            type="text"
            defaultValue=""
            name="TYPE"
            required={true}
            className="form-control"
            placeholder="¿Comó te enteraste del evento?"
          />
        </div>
        <button
          disabled={this.state.status === "sending" || this.state.status === "success"}
          onClick={this.onSubmit}
          className="btn btn-primary"
          type="submit"
        >
          ¡Registrar Participacion!
            </button>
        <div>
          {status === "sending" && <p className='sendingMsg'>{messages.sending}</p>}
          {status === "success" && <p className='successMsg'>{messages.success}</p>}
          {status === "duplicate" && <p className='duplicateMsg'>{messages.duplicate}</p>}
          {status === "empty" && <p className='errorMsg'>{messages.empty}</p>}
          {status === "error" && <p className='errorMsg'>{messages.error}</p>}
        </div>
      </form>
    )
  }
};

Mailchimp.defaultProps = {
  messages: {
    sending: "Enviando...",
    success: "Gracias por registrar tu participación, ",
    error: "¡Ha ocurrido un error, Por favor vuelve a intentar!",
    empty: "Debes escribir un correo electrónico.",
    duplicate: "Ya existe un registro con tu correo electrónico, Ya estas registrado... ¡Nos vemos en el evento!"
  }
};

export default Mailchimp;