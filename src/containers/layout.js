import React from "react"
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/theme';
import HeaderComponent from "../components/header"
import { Content } from "../theme/layout.styled"
import FooterComponent from "../components/footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <HeaderComponent />
      <Content>
        {children}
        <FooterComponent />
      </Content>
    </ThemeProvider>
  )
}

export default Layout