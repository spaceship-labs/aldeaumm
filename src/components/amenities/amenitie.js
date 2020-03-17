import React from "react"
import { AmenitieItem } from "./index.styled"

const AmenitieComponent = ({ img, title, delay }) => (
  <AmenitieItem
    className='wow fadeInLeft'
    width='50%'
    widthSm='33%'
    widthM='25%'
    data-wow-delay={delay||'0s'}
  >
    <img src={img} />
    <h4>{title}</h4>
  </AmenitieItem>
)

export default AmenitieComponent