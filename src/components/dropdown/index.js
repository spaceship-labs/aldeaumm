import React, { useState } from "react"
import { DropdownWrap, DropdownAction, DropdownScreen } from "./index.styled"
import img from "../../theme/images/information.png"

const DropdownComponent = () => {
  const [ toggle, setToggle ] = useState(false)
  const handleClick = () => {
    const newToggle = !toggle
    setToggle( newToggle )
  }
  return (
    <DropdownWrap>
      <DropdownAction onClick={handleClick}>
        <img src={img} />
        <span className='info'>Quiero más información</span>
        <span className='icon-arrow' />
      </DropdownAction>
      <DropdownScreen open={toggle}>
        <form>
          <p><input type='text' name='name' placeholder='Nombre' /></p>
          <p><input type='text' name='phone' placeholder='Teléfono' /></p>
          <p><input type='text' name='email' placeholder='Email' /></p>
          <button type='submit'>Enviar</button>
        </form>
      </DropdownScreen>
    </DropdownWrap>
  )
}

export default DropdownComponent