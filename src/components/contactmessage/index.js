import React from "react"
import { ModalContainer, ModalOverlay} from "../contactmodal/index.styled"
import { ModalMessage } from "./index.styled"
import { GoldButton } from "../../theme/layout.styled"

const ContactMessageComponent = ({ open, message, closeModal}) => (
  <ModalContainer open={open}>
    <ModalOverlay onClick={closeModal} />
    <ModalMessage>
      {message === 'success' && (<p>Gracias por enviar tu solicitud, nos estaremos poniendo en contacto contigo a la brevedad.</p>)}
      {message === 'error' && (<p>Ocurrió un error al enviar su mensaje, favor de volver a intentar.</p>)}
      <p><GoldButton onClick={closeModal}><span>Aceptar</span></GoldButton></p>
    </ModalMessage>
  </ModalContainer>
)

export default ContactMessageComponent