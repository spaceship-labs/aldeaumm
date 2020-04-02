import React from "react"
import { Section, ContainerLarge, Rows, Row } from "../../theme/layout.styled"
import { Boxes, BoxGreen, BoxWhite, ImageBox } from "./index.styled"
import invest from "../../theme/images/invest.png"
import blueprint from "../../theme/images/blueprint.png"
import img from "../../theme/images/leaf-yellow.png"

const InvestComponent = ({ lang }) => (
  <Section id='invierte'>
    <ContainerLarge>
      <Rows wrap>
        <Boxes className='wow fadeInUpSpace'>
          <BoxGreen>
            <img src={img} />
            <h3>
              {
                lang === 'es'
                  ? 'Invierte en '
                  : 'Invest in'
              }
              Aldea Umm:</h3>
            <p>
              {
                lang === 'es'
                  ? 'Elige tu Lote Residencial'
                  : 'Choose your property lot'
              }
            </p>
          </BoxGreen>
          <BoxWhite>
            <Rows mobileRow verticalAlign='center'>
              <div><img src={invest} /></div>
              <Row mobileRow>
                <p>
                  {
                    lang === 'es'
                      ? 'Hasta'
                      : 'Pay in'
                  }
                </p>
                <h3><span>48</span> {lang === 'es' ? 'Meses' : 'months'}</h3>
                <h3>
                  {
                    lang === 'es'
                      ? 'SIN INTERESES'
                      : 'AT NO INTEREST RATE'
                  }
                </h3>
              </Row>
            </Rows>
          </BoxWhite>
        </Boxes>
        <ImageBox><img className='wow fadeInUpSpace' data-wow-delay='.2s' src={blueprint} /></ImageBox>
      </Rows>
    </ContainerLarge>
  </Section>
)

export default InvestComponent