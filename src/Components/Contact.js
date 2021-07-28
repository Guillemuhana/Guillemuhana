import React, { Component } from 'react';

import emailjs from 'emailjs-com';


class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }
       
    function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('gmailMensaje', 'template_2oktz4n', e.target, 'user_bCryJhIApRCOkvs9pCwLR')

      .then((result) => {
          alert("Mensaje enviado con exito! pronto estare respondiendo saludos! 👍");
         
      }, (error) => {
          alert(error.message)
          
      });
      e.target.reset()


  }
  return(
      
      <div>
          
          <div className="container"> <section id="contact"></section>
          <h2>Formulario de contacto</h2>
          <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                      
                      <div className="col-lg-8 col-sm-12 form-group mx-auto">
                          <label>Nombre</label>
                          <input type="text" autoFocus className="form-control" required placeholder="su Nombre o empresa" name="name"/>
                      </div>
                      <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                      <label>Email</label>
                          <input type="email" className="form-control" required placeholder="Su E-mail" name="email"/>
                      </div>

                      <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                      <label>Mensaje</label>
                          <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Escriba su consulta o mensaje" name="message"></textarea>
                      </div>
                      <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                          <input type="submit" className="btn btn-info" value="Enviar mensaje"></input>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  )
}}

export default Contact;
