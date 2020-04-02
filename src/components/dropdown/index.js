import React from "react"
import { DropdownWrap, DropdownAction, DropdownScreen } from "./index.styled"
import img from "../../theme/images/information.png"
import SmallFormComponent from "../contactmodal/form"

const DropdownComponent = ({ lang, open, toggleDropdown, sendMail }) => {
  return (
    <DropdownWrap>
      <DropdownAction onClick={toggleDropdown}>
        <img src={img} />
        <span className='info'>
          {
            lang === 'es'
              ? 'Quiero más información'
              : 'I’d like more information'
          }
        </span>
        <span className='icon-arrow' />
      </DropdownAction>
      <DropdownScreen open={open}>
        <SmallFormComponent lang={lang} sendMail={sendMail} />
      </DropdownScreen>
    </DropdownWrap>
  )
}

export default DropdownComponent