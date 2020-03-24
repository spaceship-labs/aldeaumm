import React from "react"
import { ContainerMedium, Rows, Row } from "../../theme/layout.styled"
import { Section, Title, Form, ContactData } from "./index.styled"

import phone from "../../theme/images/phone.png"
import mail from "../../theme/images/mail.png"

const ContactComponent = () => (
  <Section>
    <ContainerMedium>
      <Title className='wow fadeInLeft'>Contáctanos</Title>
      <Rows align='space-between' verticalAlign='center' className='wow fadeInLeft'>
        <ContactData>
          <p><a href='/'><img src={phone} /> 998 877 6655</a></p>
          <p><a href='/'><img src={mail} /> info@aldeaumm.com</a></p>
        </ContactData>
        <Row width='100' widthSm="65%">
          <Form data-wow-delay='0.5s'>
            <input placeholder='Nombre' type='text' name='name' />
            <input placeholder='Teléfono' type='text' name='phone' />
            <input placeholder='Email' type='text' name='email' />
            <button type='submit'><span>Enviar</span></button>
          </Form>
        </Row>
      </Rows>
    </ContainerMedium>
  </Section>
)

export default ContactComponent