import React, { useState, useEffect } from "react"
import { SectioPadding, ContainerLarge, Rows, Row } from "../../theme/layout.styled"
import { ImagesBox, ImageItem, BoxGold } from "./index.styled"
import playa from "../../theme/images/playapuerto.jpg"
import arecife from "../../theme/images/arrecife.jpg"
import img from "../../theme/images/leaf-beige.png"

const InvestLargeComponent = ({ lang }) => {
  const [image, setImage] = useState(false)
  useEffect(() => {
    let interval = setInterval(() => {
      const newImate = !image
      setImage(newImate)
    }, 5000);
    return () => clearInterval(interval);
  })
  return (
    <SectioPadding>
      <ContainerLarge>
        <Rows wrap>
          <ImagesBox widthM='50%' grow>
            <ImageItem show={image} src={playa} />
            <ImageItem show={!image} src={arecife} />
          </ImagesBox>
          <BoxGold widthM='50%'>
            <img src={img} />
            <h3>
              {
                lang === 'es'
                  ? '¡Invierte en Puerto Morelos!'
                  : 'Invest in Puerto Morelos!'
              }
            </h3>
            <p>
              {
                lang === 'es'
                  ? 'Vive en completa sincronía con la naturaleza, a 5 minutos de la playa, en el corazón de la Riviera Maya.'
                  : 'Live in complete harmony with nature, 5 minutes from the beach… in the heart of Riviera Maya.'
              }
            </p>
          </BoxGold>
        </Rows>
      </ContainerLarge>
    </SectioPadding>
  )
}

export default InvestLargeComponent