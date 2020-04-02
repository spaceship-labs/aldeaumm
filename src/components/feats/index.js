import React from "react"
import { Rows, Container } from "../../theme/layout.styled"
import { Section, FeatsRows, VideoRow, FeatItem } from "./index.styled"

import img1 from "../../theme/images/plusvalia.png"
import img2 from "../../theme/images/ruta-de-los-cenotes.png"
import img3 from "../../theme/images/barrera-de-arrecifes.png"
import img4 from "../../theme/images/plaza-comercial.png"

import video from "../../theme/videos/video-promocional-aldea-umm.mp4"

const feats = {
  es: [
    {
      img: img1,
      subtitle: 'Incremento anual del',
      title: '20% de la plusvalía.',
    },
    {
      img: img2,
      subtitle: 'A 5 min. de la entrada de la',
      title: 'Ruta de los Cenotes.',
    },
    {
      img: img3,
      subtitle: 'La segunda barrera de',
      title: 'arrecifes más larga del mundo.',
    },
    {
      img: img4,
      subtitle: 'A 3 min. de la segunda',
      title: 'plaza comercial más grande de México.',
    },
  ],
  en: [
    {
      img: img1,
      subtitle: 'Annual appreciation',
      title: 'rate of 20%.',
    },
    {
      img: img2,
      subtitle: '5 minutes from',
      title: 'the Cenotes Route.',
    },
    {
      img: img3,
      subtitle: 'The second largest',
      title: 'coral reef barrier system in the world.',
    },
    {
      img: img4,
      subtitle: '3 minutes from',
      title: 'Mexico’s largest mall.',
    },
  ]
}

const FeatsComponent = ({ lang }) => (
  <Section>
    <Container>
      <Rows align='space-between' wrap>
        <FeatsRows widthM='50%' className='wow fadeInUpSpace'>
          {
            feats[lang].map((feat, index) => (
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