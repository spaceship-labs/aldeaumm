import React, { Component } from "react"
import { Container, ContainerCommon, Rows } from "../../theme/layout.styled"
import { Section, AmenitiesBox, Overlap } from "./index.styled"
import AmenitieComponent from "./amenitie"

import Amenities from "./amenitiesobj"
import ModalGalleryComponent from "../modalgallery"

class AmenitiesComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      amenitie: {},
    }
  }
  openModal = (amenitie) => {
    this.setState({
      modal: true,
      amenitie: amenitie,
    })
  }
  closeModal = () => {
    this.setState({
      modal: false,
      amenitie: {},
    })
  }
  render() {
    return (
      <Section>
        <ContainerCommon style={{ zIndex: 1 }}>
          <AmenitiesBox className='wow fadeInLeft'>
            <h3 className='wow fadeInLeft'>Amenidades</h3>
            <Rows align='center' wrap mobileRow>
              {Amenities.map(amenitie =>
                <AmenitieComponent
                  openModal={() => this.openModal(amenitie)}
                  key={amenitie.title}
                  {...amenitie}
                />
              )}
            </Rows>
          </AmenitiesBox>
        </ContainerCommon>
        <Container style={{ zIndex: 0 }}>
          <Overlap>
            <h3 className='wow fadeInLeft'><em>Invierte en</em> <br /> Puerto Morelos</h3>
          </Overlap>
        </Container>
        <ModalGalleryComponent
          open={this.state.modal}
          amenitie={this.state.amenitie}
          closeModal={this.closeModal}
        />
      </Section>
    )
  }
}

export default AmenitiesComponent