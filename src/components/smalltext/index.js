import React from "react"
import { SectioPadding, ContainerSmall } from "../../theme/layout.styled"
import { TextWrapper, OverlapImageContainer } from "./index.styled"
import img from "../../theme/images/leaf.png"

const SmallTextComponent = ({ lang }) => (
  <SectioPadding id='viveAldeaUm'>
    <ContainerSmall>
      <OverlapImageContainer>
        <img alt='' src={img} />
      </OverlapImageContainer>
      <TextWrapper className='wow fadeInUpSpace'>
        <p>
          {
            lang === 'es'
              ? 'Vive en completa sincronía con la naturaleza, a 5 minutos de la playa, en el corazón de la Riviera Maya.'
              : 'Live in complete harmony with nature, 5 minutes from the beach… In the heart of Riviera Maya.'
          }
        </p>
        <h3>
          {
            lang === 'es'
              ? '¡Vive en Aldea Umm!'
              : 'Live in Aldea Umm!'
          }
        </h3>
      </TextWrapper>
    </ContainerSmall>
  </SectioPadding>
)

export default SmallTextComponent