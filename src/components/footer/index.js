import React from "react"
import { Rows } from "../../theme/layout.styled"
import { Footer, SocialItems } from "./index.styled"

import facebook from "../../theme/images/facebook.png"
import youtube from "../../theme/images/youtube.png"
import instagram from "../../theme/images/instagram.png"

const FooterComponent = () => (
  <Footer>
    <Rows align='center' mobileRow>
      <SocialItems href='/'><img alt='' src={facebook} /></SocialItems>
      <SocialItems href='/'><img alt='' src={youtube} /></SocialItems>
      <SocialItems href='/'><img alt='' src={instagram} /></SocialItems>
    </Rows>
    <p>Copyright ©2020. Aldea Umm All rights reserved.</p>
  </Footer>
)

export default FooterComponent