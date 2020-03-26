import React, { useState } from "react"
import Slider from "react-slick";
import { SliderWrapper, SliderItem } from "./index.styled";
import { Section, ContainerCommon } from "../../theme/layout.styled";

import img1 from "../../theme/images/amenities/casa-club-alberca.jpg"
import img2 from "../../theme/images/amenities/casa-club-acceso.jpg"
import img3 from "../../theme/images/amenities/casa-club-cancha.jpg"
import img4 from "../../theme/images/top.jpg"
import ArrowComponent from "./arrow";

const ArrowLeft = <ArrowComponent direction='left' />
const ArrowRight = <ArrowComponent direction='right' />

const GallerySectionComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ArrowRight,
    prevArrow: ArrowLeft,
  }
  const images = [img1, img2, img3, img4]
  return (
    <Section id='galeria'>
      <ContainerCommon>
        <SliderWrapper>
          <Slider {...settings} >
            {images.map((img, index) =>
              <SliderItem key={`image-single-gallery-${index}`}><img src={img} /></SliderItem>
            )}
          </Slider>
        </SliderWrapper>
      </ContainerCommon>
    </Section>

  )
}

export default GallerySectionComponent