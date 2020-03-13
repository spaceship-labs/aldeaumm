import React from "react"
import { Container, Rows, Row } from "../../theme/layout.styled"
import { Header, Hamburguer, Logo } from "./index.styled"
import LogoImg from "../../theme/images/aldea-umm.png"
import DropdownComponent from "../dropdown"

const HeaderComponent = ({ sidebarToggle, handleToggleSidebar }) => <Header>
  <Container>
    <Rows align='space-between' verticalAlign='center' mobileRow>
      <Row shrink>
          <Hamburguer open={sidebarToggle} onClick={handleToggleSidebar}>
              <span className="lineTop"></span>
              <span className="lineMiddle"></span>
              <span className="lineBottom"></span>
        </Hamburguer>
      </Row>
      <Row shrink>
        <Logo><img src={LogoImg} /></Logo>
      </Row>
      <Row shrink><DropdownComponent /></Row>
    </Rows>
  </Container>
</Header>

export default HeaderComponent