import React from "react"
import Layout from "../layout"
import BannerComponent from "../../components/banner"
import SmallTextComponent from "../../components/smalltext"
import ZoneComponent from "../../components/zone"
import MapComponent from "../../components/map"
import AmenitiesComponent from "../../components/amenities"
import FeatsComponent from "../../components/feats"
import ContactComponent from "../../components/contact"
import InvestComponent from "../../components/invest"
import GallerySectionComponent from "../../components/gallerysection"
import InvestLargeComponent from "../../components/invest/large"

const HomeContainer = ({ lang }) => <Layout lang={lang} render={({ methods }) => (
  <React.Fragment>
    <BannerComponent openModal={methods.openModal} lang={lang} />
    <SmallTextComponent lang={lang} />
    <ZoneComponent openModal={methods.openModal} lang={lang} />
    <InvestLargeComponent lang={lang} />
    <MapComponent lang={lang} />
    <GallerySectionComponent openModal={methods.openModal} lang={lang} />
    <AmenitiesComponent openContactModal={methods.openModal} lang={lang} />
    <FeatsComponent lang={lang} />
    <InvestComponent lang={lang} />
    <ContactComponent sendMail={methods.sendMail} lang={lang} />
  </React.Fragment>
) } />

export default HomeContainer