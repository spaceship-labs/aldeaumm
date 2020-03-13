import React from "react"
import { ContainerCommon, Rows } from "../../theme/layout.styled"
import { SectioPadding, BoxText, BoxImage } from "./index.styled"
import img from "../../theme/images/aldea-umm-park.png"

const ZoneComponent = () => (
  <SectioPadding>
    <ContainerCommon>
      <Rows verticalAlign='center'>
        <BoxText>
          <h3>Zona con alta plusvalía y ubicación privilegiada:</h3>
          <ul>
            <li><span>23</span> minutos de Cancún</li>
            <li><span>25</span> minutos de Playa del Carmen</li>
            <li><span>15</span> minutos del aeropuerto de Cancún</li>
          </ul>
        </BoxText>
        <BoxImage>
          <img src={img} />
        </BoxImage>
      </Rows>
    </ContainerCommon>
  </SectioPadding>
)

export default ZoneComponent