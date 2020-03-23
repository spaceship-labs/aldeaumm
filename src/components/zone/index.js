import React from "react"
import { ContainerCommon, Rows } from "../../theme/layout.styled"
import { SectioPadding, BoxText, BoxImage } from "./index.styled"
import img from "../../theme/images/aldea-umm-aerial.jpg"

const ZoneComponent = () => (
  <SectioPadding>
    <ContainerCommon>
      <Rows verticalAlign='center'>
        <BoxText className='wow fadeInLeft' >
          <h3>Zona con alta plusvalía y ubicación privilegiada:</h3>
          <ul>
            <li><span>23</span> minutos de Cancún</li>
            <li><span>25</span> minutos de Playa del Carmen</li>
            <li><span>15</span> minutos del aeropuerto de Cancún</li>
          </ul>
        </BoxText>
        <BoxImage className='wow fadeInLeft' data-wow-delay="0.5s">
          <img src={img} />
        </BoxImage>
      </Rows>
    </ContainerCommon>
  </SectioPadding>
)

export default ZoneComponent