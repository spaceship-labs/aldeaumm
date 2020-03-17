import React, { Component } from "react"
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/theme';
import HeaderComponent from "../components/header"
import { Content } from "../theme/layout.styled"
import FooterComponent from "../components/footer";
import WOW from 'wowjs';

//const Layout = ({ children }) => {
class Layout extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //const wow = WOW.WOW();wow.init();
    new WOW.WOW().init()
  }
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <HeaderComponent />
        <Content>
          {this.props.children}
          <FooterComponent />
        </Content>
      </ThemeProvider>
    )
  }
}

export default Layout