import React from "react"
import { ModalContainer, ModalOverlay, ModalFormContainer, Title } from "./index.styled"
import SmallFormComponent from "./form"

const ContactModalComponent = ({ open, closeModal }) => (
  <ModalContainer open={open}>
    <ModalOverlay onClick={closeModal} />
    <ModalFormContainer>
      <Title>Contáctanos</Title>
      <SmallFormComponent />
    </ModalFormContainer>
  </ModalContainer>
)

export default ContactModalComponent
