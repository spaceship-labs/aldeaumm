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

const HomeContainer = () => <Layout render={({ methods }) => (
  <React.Fragment>
    <BannerComponent openModal={methods.openModal} />
    <SmallTextComponent />
    <ZoneComponent openModal={methods.openModal} />
    <InvestLargeComponent />
    <MapComponent />
    <GallerySectionComponent openModal={methods.openModal} />
    <AmenitiesComponent openContactModal={methods.openModal} />
    <FeatsComponent />
    <InvestComponent />
    <ContactComponent sendMail={methods.sendMail} />
  </React.Fragment>
) } />

export default HomeContainer