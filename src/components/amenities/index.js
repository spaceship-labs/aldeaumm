import React from "react"
import { Container, ContainerCommon, Rows } from "../../theme/layout.styled"
import { Section, AmenitiesBox, Overlap } from "./index.styled"
import img1 from "../../theme/images/aldea-umm-alberca.png"
import img2 from "../../theme/images/aldea-umm-juegos.png"
import img3 from "../../theme/images/aldea-umm-pet-friendly.png"
import img4 from "../../theme/images/aldea-umm-jardin.png"
import img5 from "../../theme/images/aldea-umm-gimnacio.png"
import img6 from "../../theme/images/aldea-umm-cancha.png"
import img7 from "../../theme/images/aldea-umm-fuentes.png"
import img8 from "../../theme/images/aldea-umm-casa-club.png"
import AmenitieComponent from "./amenitie"

const amenities = [
  {
    img: img1,
    title: 'Alberca',
  },
  {
    img: img2,
    title: 'Juegos infantiles'
  },
  {
    img: img3,
    title: 'Parque pet friendly'
  },
  {
    img: img4,
    title: 'Jardín de arte'
  },
  {
    img: img5,
    title: 'Gimnacio al aire libre'
  },
  {
    img: img6,
    title: 'Cancha deportiva'
  },
  {
    img: img7,
    title: 'Parque de fuentes'
  },
  {
    img: img8,
    title: 'Casa club con gimnacio'
  },
]

const AmenitiesComponent = () => (
  <Section>
    <ContainerCommon style={{zIndex:1}}>
      <AmenitiesBox>
        <h3 className='wow fadeInLeft'>Amenidades</h3>
        <Rows align='center' wrap mobileRow>
          {amenities.map((amenitie,index) => <AmenitieComponent key={amenitie.title} delay={`${.3*index}s`} {...amenitie} /> )}
        </Rows>
      </AmenitiesBox>
    </ContainerCommon>
    <Container style={{ zIndex: 0 }}>
      <Overlap>
        <h3 className='wow fadeInLeft'><em>Invierte en</em> <br /> Puerto Morelos</h3>
      </Overlap>
    </Container>
  </Section>
)

export default AmenitiesComponent