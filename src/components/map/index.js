import React from "react"
import { ContainerCommon, Rows, Section } from "../../theme/layout.styled"
import { BoxText, BoxMap } from "./index.styled"
import img from "../../theme/images/map.png"

const MapComponent = ({ lang }) => (
  <Section id='mapa'>
    <ContainerCommon>
      <Rows verticalAlign='center'>
        <BoxText className='wow fadeInUpSpace'>
          <h3>
            {
              lang === 'es'
                ? <React.Fragment>Mapa de <em>Ubicación</em></React.Fragment>
                : <em>Location</em>
            }
          </h3>
        </BoxText>
        <BoxMap className='wow fadeInUpSpace' data-wow-delay='0.2s'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29819.2859952909!2d-86.880679!3d20.895788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x537b377d633c0b06!2sAldea%20Umm!5e0!3m2!1ses-419!2smx!4v1585589581961!5m2!1ses-419!2smx"
            height="350"
            frameborder="0" 
            allowfullscreen="" aria-hidden="false" tabindex="0"
          />
        </BoxMap>
      </Rows>
    </ContainerCommon>
  </Section>
)

export default MapComponent