import React from "react"
import { ContainerCommon, Rows, Section } from "../../theme/layout.styled"
import { BoxText, BoxMap } from "./index.styled"
import img from "../../theme/images/map.png"

const MapComponent = () => (
  <Section id='mapa'>
    <ContainerCommon>
      <Rows verticalAlign='center'>
        <BoxText className='wow fadeInUpSpace'>
          <h3>Mapa de <em>Ubicación</em></h3>
        </BoxText>
        <BoxMap className='wow fadeInUpSpace' data-wow-delay='0.2s'>
          <img src={img} />
        </BoxMap>
      </Rows>
    </ContainerCommon>
  </Section>
)

export default MapComponent