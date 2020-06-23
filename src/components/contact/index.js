import React from "react"
import { Container, Rows, Row } from "../../theme/layout.styled"
import { Section, Title, Form, ContactData } from "./index.styled"

import phone from "../../theme/images/phone.png"
import mail from "../../theme/images/mail.png"
import SmallFormComponent from "../contactmodal/form"

const ContactComponent = ({ lang, sendMail }) => (
  <Section id='contacto'>
    <Container>
      <Title className='wow fadeInUpSpace'>
        {
          lang === 'es'
            ? 'Contáctanos'
            : 'Contact us'
        }
      </Title>
      <Rows align='space-between' verticalAlign='center' className='wow fadeInUpSpace'>
        <ContactData>
          <p><a href='tel:+5219982089352'><img src={phone} /> +52 1 (998) 208 93 52</a></p>
          <p><a href='https://wa.me/529981470854'><img src={phone} /> +52 1 (998) 147 08 54</a></p>
          <p><a href='tel:+5219988022151'><img src={phone} /> +52 1 (998) 802 21 51</a></p>
          <p><a href='tel:+5219982677878'><img src={phone} /> +52 1 (998) 267 78 78</a></p>
          <p><a href='mailto:seguimiento@itmdesarrolladores.com'><img src={mail} /> seguimiento@itmdesarrolladores.com</a></p>
        </ContactData>
        <Row width='100' widthSm="65%">
          <Form data-wow-delay='0.5s'>
            <SmallFormComponent lang={lang} sendMail={sendMail} />
          </Form>
        </Row>
      </Rows>
    </Container>
  </Section>
)

export default ContactComponent