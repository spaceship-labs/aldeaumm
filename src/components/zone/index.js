import React from "react"
import { ContainerCommon, Rows } from "../../theme/layout.styled"
import { SectioPadding, BoxText, BoxImage, Button } from "./index.styled"
import img from "../../theme/images/aldea-umm-aerial.jpg"

const ZoneComponent = ({ lang, openModal }) => (
  <SectioPadding>
    <ContainerCommon>
      <Rows verticalAlign='center'>
        <BoxText className='wow fadeInUpSpace' >
          <h3>
            {
              lang === 'es'
                ? 'Zona con alta plusvalía y ubicación privilegiada:'
                : 'High appreciation due to privileged location:'
          }
          </h3>
          <ul>
            <li><span>23</span> {lang === 'es' ? 'minutos de' : 'minutes from'} Cancún</li>
            <li><span>25</span> {lang === 'es' ? 'minutos de' : 'minutes from'} Playa del Carmen</li>
            <li><span>15</span> {lang === 'es' ? 'minutos del aeropuerto de Cancún' : 'minutes from Cancun Airport'}</li>
          </ul>
        </BoxText>
        <BoxImage className='wow fadeInUpSpace' data-wow-delay="0.2s">
          <img src={img} />
        </BoxImage>
      </Rows>
      <Button className='wow fadeInUpSpace' onClick={openModal}><span>
        {
          lang === 'es'
            ? 'Quiero saber más'
            : 'I’d like more information'
        }
      </span></Button>
    </ContainerCommon>
  </SectioPadding>
)

export default ZoneComponent