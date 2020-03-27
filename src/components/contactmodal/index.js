import React from "react"
import { ModalContainer, ModalOverlay, ModalFormContainer, Title } from "./index.styled"
import SmallFormComponent from "./form"

const ContactModalComponent = ({ open, closeModal, sendMail }) => (
  <ModalContainer open={open}>
    <ModalOverlay onClick={closeModal} />
    <ModalFormContainer>
      <Title>Contáctanos</Title>
      <SmallFormComponent sendMail={sendMail} />
    </ModalFormContainer>
  </ModalContainer>
)

export default ContactModalComponent
