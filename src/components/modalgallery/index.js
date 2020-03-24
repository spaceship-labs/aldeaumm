import React, { useState } from "react"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Modal, Container, SliderWrapper, Overlay, SliderItem, Close } from "./inedx.styled";

const ModalGalleryComponent = ({ open, amenitie, closeModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  }
  const gallery = <Slider {...settings} >
    {amenitie.images && amenitie.images.map((img, index) => <SliderItem key={`image-gallery-${index}`}><img src={img} /></SliderItem>)}
  </Slider>
  return (
    <Modal open={open}>
      <Overlay onClick={closeModal} />
      <Close onClick={closeModal}>x</Close>
      <Container>
        <SliderWrapper>
          <h3>{amenitie.title}</h3>
          { open && amenitie && amenitie.images.length > 0 && gallery }
        </SliderWrapper>
      </Container>
    </Modal>
  )
}

export default ModalGalleryComponent