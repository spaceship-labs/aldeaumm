import React from "react"
import { Section, ContainerLarge, Rows, Row } from "../../theme/layout.styled"
import { Boxes, BoxGreen, BoxWhite, ImageBox } from "./index.styled"
import invest from "../../theme/images/invest.png"
import blueprint from "../../theme/images/blueprint.png"
import img from "../../theme/images/leaf-yellow.png"

const InvestComponent = () => (
  <Section>
    <ContainerLarge>
      <Rows wrap>
        <Boxes className='wow fadeInUpSpace'>
          <BoxGreen>
            <img src={img} />
            <h3 >Invierte en Aldea Umm:</h3>
            <p>Elige tu Lote Residencial</p>
          </BoxGreen>
          <BoxWhite>
            <Rows mobileRow verticalAlign='center'>
              <div><img src={invest} /></div>
              <Row mobileRow>
                <p>Hasta</p>
                <h3><span>48</span> Meses</h3>
                <h3>SIN INTERESES</h3>
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