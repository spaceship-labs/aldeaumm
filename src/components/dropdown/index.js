import React from "react"
import { DropdownWrap, DropdownAction, DropdownScreen } from "./index.styled"
import img from "../../theme/images/information.png"
import SmallFormComponent from "../contactmodal/form"

const DropdownComponent = ({ open, toggleDropdown, sendMail }) => {
  return (
    <DropdownWrap>
      <DropdownAction onClick={toggleDropdown}>
        <img src={img} />
        <span className='info'>Quiero más información</span>
        <span className='icon-arrow' />
      </DropdownAction>
      <DropdownScreen open={open}>
        <SmallFormComponent sendMail={sendMail} />
      </DropdownScreen>
    </DropdownWrap>
  )
}

export default DropdownComponent