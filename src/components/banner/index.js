import React from "react"
import { Section, ContainerXLarge } from "../../theme/layout.styled"
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
      <ContainerXLarge>
        <Banner>
          <BoxRows mobileRow className=''>
            {boxes.map(box => <BoxItemComponent key={box.title} {...box} />)}
          </BoxRows>
          <Button onClick={methods.openModal} className=''><span>Invierte hoy</span></Button>
        </Banner>
      </ContainerXLarge>
    </Section>
  )
}

export default BannerComponent