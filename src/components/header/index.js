import React from "react"
import { ContainerXLarge, Rows, Row } from "../../theme/layout.styled"
import { Header, Hamburguer, Logo, Phone } from "./index.styled"
import LogoImg from "../../theme/images/aldea-umm.png"
import DropdownComponent from "../dropdown"
import phone from "../../theme/images/phone.png"

const HeaderComponent = ({ globalConstants, methods }) => <Header>
  <ContainerXLarge>
    <Rows align='space-between' verticalAlign='center' mobileRow>
      <Row shrink>
        <Rows verticalAlign='center' mobileRow>
          <Hamburguer >
            <span className="lineTop"></span>
            <span className="lineMiddle"></span>
            <span className="lineBottom"></span>
          </Hamburguer>
          <Phone href="tel:9988 776 655">
            <img src={phone} /> <span>9988 776 655</span>
          </Phone>
        </Rows>
      </Row>
      <Row shrink>
        <Logo><img src={LogoImg} /></Logo>
      </Row>
      <Row shrink>
        <DropdownComponent
          open={globalConstants.dropdown}
          toggleDropdown={methods.toggleDropdown}
        />
      </Row>
    </Rows>
  </ContainerXLarge>
</Header>

export default HeaderComponent