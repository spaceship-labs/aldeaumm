import React, { Component } from "react"
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/theme';
import HeaderComponent from "../components/header"
import { Content } from "../theme/layout.styled"
import FooterComponent from "../components/footer";
import ContactModalComponent from "../components/contactmodal"
import WOW from 'wowjs';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//const Layout = ({ children }) => {
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      dropdown: true,
    }
  }
  componentDidMount() {
    //const wow = WOW.WOW();wow.init();
    new WOW.WOW().init()
  }
  openModal = () => {
    this.setState({
      modal: true,
      dropdown: false
    })
  }
  closeModal = () => {
    this.setState({
      modal: false,
      dropdown: true,
    })
  }
  toggleDropdown = () => {
    const newToggle = !this.state.dropdown
    this.setState({ dropdown: newToggle })
  }
  render() {
    const methods = {
      openModal: this.openModal,
      closeModal: this.closeModal,
      toggleDropdown: this.toggleDropdown,
    }
    return (
      <ThemeProvider theme={Theme}>
        <HeaderComponent
          globalConstants={this.state}
          methods={methods}
        />
        <Content>
          {/*this.props.children*/}
          {this.props.render({
            globalConstants: this.state,
            methods: methods
          })}
          <FooterComponent />
          <ContactModalComponent open={this.state.modal} closeModal={this.closeModal} />
        </Content>
      </ThemeProvider>
    )
  }
}

export default Layout