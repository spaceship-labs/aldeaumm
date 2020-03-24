import React from "react"
import { Rows, Container } from "../../theme/layout.styled"
import { Section, FeatsRows, VideoRow, FeatItem } from "./index.styled"

import img1 from "../../theme/images/plusvalia.png"
import img2 from "../../theme/images/ruta-de-los-cenotes.png"
import img3 from "../../theme/images/barrera-de-arrecifes.png"
import img4 from "../../theme/images/plaza-comercial.png"

import video from "../../theme/videos/video-promocional-aldea-umm.mp4"

const feats = [
  {
    img: img1,
    title: '20% de la plusvalía',
    subtitle: 'Incremento anual del',
  },
  {
    img: img2,
    title: 'Ruta de los Cenotes',
    subtitle: 'A 5 min. de la entrada de la',
  },
  {
    img: img3,
    title: 'arrecifes más larga del mundo',
    subtitle: 'La segunda barrera de',
  },
  {
    img: img4,
    title: 'Plaza comercial más grande de méxico',
    subtitle: 'A 3 min. de la segunda',
  },
]

const FeatsComponent = () => (
  <Section>
    <Container>
      <Rows align='space-between' wrap>
        <FeatsRows widthM='50%' className='wow fadeInUpSpace'>
          {
            feats.map((feat, index) => (
              <FeatItem key={feat.title}>
                <img src={feat.img} />
                <p>{feat.subtitle}</p>
                <h3>{feat.title}</h3>
              </FeatItem>
              )
            )
          }
        </FeatsRows>
        <VideoRow widthM='50%'>
          {<video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>}
        </VideoRow>
      </Rows>
    </Container>
  </Section>
)

export default FeatsComponent