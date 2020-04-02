import React from "react"
import { ModalContainer, ModalOverlay} from "../contactmodal/index.styled"
import { ModalMessage } from "./index.styled"
import { GoldButton } from "../../theme/layout.styled"

const success = {
  es: 'Gracias por enviar tu solicitud, nos estaremos poniendo en contacto contigo a la brevedad.',
  en: 'Thank you for sending your request, we will be contacting you shortly'
}

const error = {
  es: 'Ocurrió un error al enviar su mensaje, favor de volver a intentar.',
  en: 'An error occurred while sending your message, please try again.'
}

const ContactMessageComponent = ({ lang, open, message, closeModal}) => (
  <ModalContainer open={open}>
    <ModalOverlay onClick={closeModal} />
    <ModalMessage>
      {message === 'success' && (<p>{success[lang]}</p>)}
      {message === 'error' && (<p>{error[lang]}</p>)}
      <p><GoldButton onClick={closeModal}><span>Aceptar</span></GoldButton></p>
    </ModalMessage>
  </ModalContainer>
)

export default ContactMessageComponent