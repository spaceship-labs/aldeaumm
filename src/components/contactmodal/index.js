import React from "react"
import { ModalContainer, ModalOverlay, ModalFormContainer, Title } from "./index.styled"
import SmallFormComponent from "./form"

const ContactModalComponent = ({ lang, open, closeModal, sendMail }) => (
  <ModalContainer open={open}>
    <ModalOverlay onClick={closeModal} />
    <ModalFormContainer>
      <Title>
        {
          lang === 'es'
            ? 'Contáctanos'
            : 'Contact us'
        }
      </Title>
      <SmallFormComponent lang={lang} sendMail={sendMail} />
    </ModalFormContainer>
  </ModalContainer>
)

export default ContactModalComponent
