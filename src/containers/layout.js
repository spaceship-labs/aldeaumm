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
    if (window && window.location.hash) {
      const hash = window.location.hash
      setTimeout(() => {
        this.scrollTo(hash.replace('#', ''))
      }, 1500);
    }
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
  sendMail = (e,data) => {
    e.preventDefault()
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      alert(`Favor de agregar un email válido \npor ejemplo juan@gmail.com`)
      return
    }
    console.log('DATA', data)
    fetch("https://aldeaumm.com/envio2.php", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {
      console.log('RESPONSE', response)
      this.setState({
        modal: false,
        dropdown: false,
        messageModal: true,
        message: response.ok ? 'success' : 'error',
      })
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