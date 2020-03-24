import React from "react"
import { Arrow } from "./index.styled"
import svg from "../../theme/images/arrow.svg"

const ArrowComponent = (props,) => {
  const { className, style, onClick, direction } = props;
  return (
    <Arrow
      direction={direction}
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img src={svg} />
    </Arrow>
  )
}

export default ArrowComponent