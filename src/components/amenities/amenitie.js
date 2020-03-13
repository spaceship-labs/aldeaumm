import React from "react"
import { AmenitieItem } from "./index.styled"

const AmenitieComponent = ({ img, title }) => (
  <AmenitieItem width='50%' widthSm='33%' widthM='25%'>
    <img src={img} />
    <h4>{title}</h4>
  </AmenitieItem>
)

export default AmenitieComponent