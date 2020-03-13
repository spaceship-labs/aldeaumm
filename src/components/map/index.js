import React from "react"
import { ContainerCommon, Rows, SectioPadding } from "../../theme/layout.styled"
import { BoxText, BoxMap } from "./index.styled"
import img from "../../theme/images/map.png"

const MapComponent = () => (
  <SectioPadding>
    <ContainerCommon>
      <Rows verticalAlign='center'>
        <BoxText>
          <h3>Mapa de <em>Ubicación</em></h3>
        </BoxText>
        <BoxMap>
          <img src={img} />
        </BoxMap>
      </Rows>
    </ContainerCommon>
  </SectioPadding>
)

export default MapComponent