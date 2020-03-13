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

const BannerComponent = () => {
  return (
    <Section>
      <Container>
        <Banner>
          <BoxRows mobileRow>
            {boxes.map(box => <BoxItemComponent {...box} />)}
          </BoxRows>
          <Button>Invierte hoy</Button>
        </Banner>
      </Container>
    </Section>
  )
}

export default BannerComponent