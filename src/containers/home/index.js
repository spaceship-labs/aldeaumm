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

const HomeContainer = () => <Layout render={({ methods }) => (
  <React.Fragment>
    <BannerComponent methods={methods} />
    <SmallTextComponent />
    <ZoneComponent />
    <MapComponent />
    <GallerySectionComponent />
    <AmenitiesComponent />
    <FeatsComponent />
    <InvestComponent />
    <ContactComponent />
  </React.Fragment>
) } />

export default HomeContainer