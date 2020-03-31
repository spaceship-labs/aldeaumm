import React, { useState } from "react"

const SmallFormComponent = ({ sendMail }) => {
  const [data, setData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  })
  const inputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    const newData = { ...data, [name]: value }
    setData(newData)
  }
  return (
    <form onSubmit={(e) => sendMail(e, data)}>
      <input type='text' name='nombre' onChange={inputChange} placeholder='Nombre' />
      <input type='text' name='telefono' onChange={inputChange} placeholder='Teléfono' />
      <input type='email' name='email' onChange={inputChange} placeholder='Email' />
      <button type='submit'><span>Enviar</span></button>
    </form>
  )
}

export default SmallFormComponent