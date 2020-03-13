import React from "react"
import { ContainerMedium, Rows, Row } from "../../theme/layout.styled"
import { Section, Title, Form, ContactData } from "./index.styled"

import phone from "../../theme/images/phone.png"
import mail from "../../theme/images/mail.png"

const ContactComponent = () => (
  <Section>
    <ContainerMedium>
      <Title>Contáctanos</Title>
      <Rows align='space-between' verticalAlign='center'>
        <ContactData>
          <p><a href='/'><img src={phone} /> 998 877 6655</a></p>
          <p><a href='/'><img src={mail} /> info@aldeaumm.com</a></p>
        </ContactData>
        <Row width='100' widthSm="65%">
          <Form>
            <input placeholder='Nombre' type='text' name='name' />
            <input placeholder='Teléfono' type='text' name='phone' />
            <input placeholder='Email' type='text' name='email' />
            <button type='submit'>Enviar</button>
          </Form>
        </Row>
      </Rows>
    </ContainerMedium>
  </Section>
)

export default ContactComponent