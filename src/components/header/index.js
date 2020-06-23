import React, { useState } from "react"
import { ContainerXLarge, Rows, Row } from "../../theme/layout.styled"
import { Header, MenuWrapper, Hamburguer, Menu, Logo, Phone, LanguageSwitch } from "./index.styled"
import LogoImg from "../../theme/images/aldea-umm.png"
import DropdownComponent from "../dropdown"
import phone from "../../theme/images/phone.png"

const HeaderComponent = ({ lang, globalConstants, methods }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    const newMenu = !menu
    setMenu(newMenu)
  }
  const esp = lang === 'es' ? 'Esp' : 'Esp'
  const eng = lang === 'es' ? 'Eng' : 'Eng'
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
                  <li><button onClick={() => methods.scrollTo('viveAldeaUm')}>
                    {
                      lang === 'es' 
                        ? 'Vive en Aldea Umm'
                        : 'Living in Aldea Umm'
                    }
                  </button></li>
                  <li><button onClick={() => methods.scrollTo('mapa')}>
                    {
                      lang === 'es'
                        ? 'Mapa de Ubicación'
                        : 'Location'
                    }
                  </button></li>
                  <li><button onClick={() => methods.scrollTo('galeria')}>
                    {
                      lang === 'es'
                        ? 'Galería'
                        : 'Gallery'
                    }
                  </button></li>
                  <li><button onClick={() => methods.scrollTo('amenidades')}>
                    {
                      lang === 'es'
                        ? 'Amenidades'
                        : 'Amenities'
                    }
                  </button></li>
                  <li><button onClick={() => methods.scrollTo('invierte')}>
                    {
                      lang === 'es'
                        ? 'Invierte en Aldea Umm'
                        : 'Invest in Aldea Umm'
                    }
                  </button></li>
                  <li><button onClick={() => methods.scrollTo('contacto')}>
                    {
                      lang === 'es'
                        ? 'Contacto'
                        : 'Contact us'
                    }
                  </button></li>
                  <li><a href="https://map.aldeaumm.com/">
                    {
                      lang === 'es'
                        ? 'Lotes disponibles'
                        : 'Availability'
                    }
                  </a></li>
                  <li><a href={`https://aldeaumm.com/blog/${lang==='en' ? 'en/' : ''}`}>
                    Blog
                  </a></li>
                  <LanguageSwitch>
                    {
                      lang === 'en'
                        ? (<a href='/'>{esp}</a>)
                        : (<span>{esp}</span>)
                    }
                    <span> | </span>
                    {
                      lang === 'es'
                        ? (<a href='/en'>{eng}</a>)
                        : (<span>{eng}</span>)
                    }
                  </LanguageSwitch>
              </Menu>
            </MenuWrapper>
              <Phone href="tel:+5219982089352">
                <img src={phone} /> <span>
                  {
                    lang === 'es'
                      ? 'Contacta a un asesor '
                      : 'Contact our sales rep '
                  }
                  (998) 208 93 52 </span>
            </Phone>
          </Rows>
        </Row>
        <Row shrink widthM='380px'>
          <Logo><img src={LogoImg} /></Logo>
        </Row>
          <Row shrink widthM='380px'>
            <DropdownComponent
              lang={lang}
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