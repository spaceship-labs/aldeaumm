import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import { Modal, Container, SliderWrapper, Overlay, SliderItem, Close } from "./index.styled";

const ModalGalleryComponent = ({ open, fullScreen, amenitie, closeModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    //lazyLoad: true,
  }
  const [gallery, setGallery] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => {
      const newGallery = <Slider {...settings} >
        {amenitie.images && amenitie.images.map((img, index) =>
          <SliderItem fullScreen={fullScreen} key={`image-gallery-${index}`}>
            <img src={img} />
          </SliderItem>
        )}
      </Slider>
      setGallery(newGallery)
    }, 500);
    return () => clearTimeout(timeout);
  })
  return (
    <Modal open={open}>
      <Overlay onClick={closeModal} />
      <Close onClick={closeModal}>x</Close>
      <Container>
        <SliderWrapper>
          {amenitie.title ? (<h3>{amenitie.title}</h3>) : ''}
          { open && amenitie && amenitie.images.length > 0 && gallery }
        </SliderWrapper>
      </Container>
    </Modal>
  )
}

export default ModalGalleryComponent