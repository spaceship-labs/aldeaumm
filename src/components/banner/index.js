import React from "react"
import { Section, ContainerXLarge } from "../../theme/layout.styled"
import { Banner, Button, BoxRows, Title } from "./index.styled"
import BoxItemComponent from "./boxitem"

const boxes = {
  es: [
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
  ],
  en: [
    {
      title: 'Down payment',
      amount: '$20',
      suffix: '',
      footer: 'MXN',
    },
    {
      title: 'Property lots from',
      amount: '$799',
      suffix: '',
      footer: 'MXN',
    },
    {
      title: 'Pay in',
      amount: '48',
      suffix: 'months with',
      footer: 'no interest rates',
    }
  ]
}

const BannerComponent = ({ lang, openModal }) => {
  return (
    <Section>
      <ContainerXLarge>
        <Banner>
          <Title>
            {
              lang === 'es'
              ? 'Invierte en un terreno, construye la casa de tus sueños'
              : 'Invest in a land property & build the house of your dreams'
            }
          </Title>
          <BoxRows mobileRow className=''>
            {boxes[lang].map(box => <BoxItemComponent key={box.title} {...box} />)}
          </BoxRows>
          <Button onClick={openModal} className=''><span>
            {
              lang === 'es'
                ? 'Invierte hoy'
                : 'Invest today'
            }
          </span></Button>
        </Banner>
      </ContainerXLarge>
    </Section>
  )
}

export default BannerComponent