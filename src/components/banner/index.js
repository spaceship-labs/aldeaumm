import React from "react"
import { Section, Container } from "../../theme/layout.styled"
import { Banner, Button, BoxRows } from "./index.styled"
import BoxItemComponent from "./boxitem"

const boxes = [
  {
    title: 'Apártalo',
    amount: '$20',
    suffix: '',
    footer: 'Mil pesos',
  },
  {
    title: 'Desde',
    amount: '$799',
    suffix: '',
    footer: 'Mil pesos',
  },
  {
    title: 'Hasta',
    amount: '48',
    suffix: 'Meses sin',
    footer: 'Intereses',
  }
]

const BannerComponent = ({ methods }) => {
  return (
    <Section>
      <Container>
        <Banner>
          <BoxRows mobileRow className='wow fadeInLeft'>
            {boxes.map(box => <BoxItemComponent key={box.title} {...box} />)}
          </BoxRows>
          <Button onClick={methods.openModal} className='wow fadeInLeft' data-wow-delay='1.5ss'><span>Invierte hoy</span></Button>
        </Banner>
      </Container>
    </Section>
  )
}

export default BannerComponent