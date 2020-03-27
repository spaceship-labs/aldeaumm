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
import ContactMessageComponent from "../components/contactmessage";

//const Layout = ({ children }) => {
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      dropdown: true,
      messageModal: false,
      message: 'success'
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
  scrollTo = (id) => {
    const element = document.getElementById(id)
    window.scroll({ top: element.offsetTop -50, let: 0, behavior: "smooth" })
  }
  closeAll = () => {
    this.setState({
      modal: false,
      dropdown: false,
      messageModal: false,
    })
  }
  sendMail = (e) => {
    e.preventDefault()
    this.setState({
      modal: false,
      dropdown: false,
      messageModal: true,
    })
  }
  render() {
    const methods = {
      openModal: this.openModal,
      closeModal: this.closeModal,
      toggleDropdown: this.toggleDropdown,
      scrollTo: this.scrollTo,
      sendMail: this.sendMail,
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
          <ContactModalComponent open={this.state.modal} sendMail={this.sendMail} closeModal={this.closeModal} />
          <ContactMessageComponent open={this.state.messageModal} message={this.state.message} closeModal={this.closeAll} />
        </Content>
      </ThemeProvider>
    )
  }
}

export default Layout