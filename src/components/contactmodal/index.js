import React from "react"
import { ModalContainer, ModalOverlay, ModalFormContainer, Title, Close } from "./index.styled"
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
      <Close onClick={closeModal}>X</Close>
      <SmallFormComponent lang={lang} sendMail={sendMail} />
    </ModalFormContainer>
  </ModalContainer>
)

export default ContactModalComponent
