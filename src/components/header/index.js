import React, { useState } from "react"
import { ContainerXLarge, Rows, Row } from "../../theme/layout.styled"
import { Header, MenuWrapper, Hamburguer, Menu, Logo, Phone } from "./index.styled"
import LogoImg from "../../theme/images/aldea-umm.png"
import DropdownComponent from "../dropdown"
import phone from "../../theme/images/phone.png"

const HeaderComponent = ({ globalConstants, methods }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    const newMenu = !menu
    setMenu(newMenu)
  }
  return (
  <Header>
    <ContainerXLarge>
      <Rows align='space-between' verticalAlign='center' mobileRow>
        <Row shrink>
          <Rows verticalAlign='center' mobileRow>
            <MenuWrapper>
              <Hamburguer onClick={toggleMenu} >
                <span className="lineTop"></span>
                <span className="lineMiddle"></span>
                <span className="lineBottom"></span>
              </Hamburguer>
                <Menu open={menu}>
                  <li><button onClick={() => methods.scrollTo('viveAldeaUm')}>Vive en Aldea Umm</button></li>
                  <li><button onClick={() => methods.scrollTo('mapa')}>Mapa de Ubicación</button></li>
                  <li><button onClick={() => methods.scrollTo('galeria')}>Galería</button></li>
                  <li><button onClick={() => methods.scrollTo('amenidades')}>Amenidades</button></li>
                  <li><button onClick={() => methods.scrollTo('invierte')}>Invierte en Aldea Umm</button></li>
                  <li><button onClick={() => methods.scrollTo('contacto')}>Contacto</button></li>
                  <li><a href="https://map.aldeaumm.com/">Lotes disponibles</a></li>
              </Menu>
            </MenuWrapper>
            <Phone href="tel:+5219988022151">
                <img src={phone} /> <span>Contacta a un asesor (998) 802 21 51</span>
            </Phone>
          </Rows>
        </Row>
        <Row shrink widthM='380px'>
          <Logo><img src={LogoImg} /></Logo>
        </Row>
          <Row shrink widthM='380px'>
          <DropdownComponent
            open={globalConstants.dropdown}
            sendMail={methods.sendMail}
            toggleDropdown={methods.toggleDropdown}
          />
        </Row>
      </Rows>
    </ContainerXLarge>
  </Header>
  )
}

export default HeaderComponent