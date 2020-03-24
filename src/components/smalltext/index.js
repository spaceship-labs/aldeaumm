import React from "react"
import { SectioPadding, ContainerSmall } from "../../theme/layout.styled"
import { TextWrapper, OverlapImageContainer } from "./index.styled"
import img from "../../theme/images/leaf.png"

const SmallTextComponent = () => (
  <SectioPadding>
    <ContainerSmall>
      <OverlapImageContainer>
        <img alt='' src={img} />
      </OverlapImageContainer>
      <TextWrapper className='wow fadeInUpSpace'>
        <p>Vive en completa sincría con la naturaleza, a 5 minutos de la playa, en el corazón de la Riviera Maya:</p>
        <h3>¡Vive en Aldea Umm!</h3>
      </TextWrapper>
    </ContainerSmall>
  </SectioPadding>
)

export default SmallTextComponent