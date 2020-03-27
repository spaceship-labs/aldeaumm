import React from "react"

const SmallFormComponent = ({ sendMail }) => (
  <form onSubmit={sendMail}>
    <input type='text' name='name' placeholder='Nombre' />
    <input type='text' name='phone' placeholder='Teléfono' />
    <input type='text' name='email' placeholder='Email' />
    <button type='submit'><span>Enviar</span></button>
  </form>
)

export default SmallFormComponent