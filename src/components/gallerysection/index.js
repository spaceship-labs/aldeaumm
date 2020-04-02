import React, { Component } from "react"
import Slider from "react-slick";
import { SliderWrapper, SliderItem } from "./index.styled";
import { SectioPadding, ContainerCommon, ButtonGreenLighter } from "../../theme/layout.styled";

import img1 from "../../theme/images/amenities/casa-club-alberca.jpg"
import img2 from "../../theme/images/amenities/casa-club-acceso.jpg"
import img3 from "../../theme/images/amenities/casa-club-cancha.jpg"
import img4 from "../../theme/images/top.jpg"
import ArrowComponent from "./arrow";
import ModalGalleryComponent from "../modalgallery"

const ArrowLeft = <ArrowComponent direction='left' />
const ArrowRight = <ArrowComponent direction='right' />
const images = [img1, img2, img3, img4]

class GallerySectionComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      amenitie: {},
    }
  }
  openGalleryModal = () => {
    this.setState({
      modal: true,
      amenitie: {
        images
      },
    })
  }
  closeGalleryModal = () => {
    this.setState({
      modal: false,
      amenitie: {},
    })
  }
  render(){
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
    return (
      <SectioPadding id='galeria'>
        <ContainerCommon>
          <SliderWrapper>
            <ButtonGreenLighter onClick={this.props.openModal}>
              <span>
                {
                  this.props.lang === 'es'
                    ? 'Conoce más'
                    : 'Learn more'
                }
              </span>
            </ButtonGreenLighter>
            <Slider {...settings} >
              {images.map((img, index) =>
                <SliderItem
                  onClick={this.openGalleryModal}
                  key={`image-single-gallery-${index}`}>
                  <img src={img} />
                </SliderItem>
              )}
            </Slider>
          </SliderWrapper>
        </ContainerCommon>
        <ModalGalleryComponent
          fullScreen={true}
          open={this.state.modal}
          amenitie={this.state.amenitie}
          closeModal={this.closeGalleryModal}
        />
      </SectioPadding>

    )
  }
}

export default GallerySectionComponent