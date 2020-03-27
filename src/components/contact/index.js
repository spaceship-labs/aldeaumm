import React from "react"
import { ContainerMedium, Rows, Row } from "../../theme/layout.styled"
import { Section, Title, Form, ContactData } from "./index.styled"

import phone from "../../theme/images/phone.png"
import mail from "../../theme/images/mail.png"
import SmallFormComponent from "../contactmodal/form"

const ContactComponent = ({ sendMail }) => (
  <Section id='contacto'>
    <ContainerMedium>
      <Title className='wow fadeInUpSpace'>Contáctanos</Title>
      <Rows align='space-between' verticalAlign='center' className='wow fadeInUpSpace'>
        <ContactData>
          <p><a href='/'><img src={phone} /> 998 877 6655</a></p>
          <p><a href='/'><img src={mail} /> info@aldeaumm.com</a></p>
        </ContactData>
        <Row width='100' widthSm="65%">
          <Form data-wow-delay='0.5s'>
            <SmallFormComponent sendMail={sendMail} />
          </Form>
        </Row>
      </Rows>
    </ContainerMedium>
  </Section>
)

export default ContactComponent