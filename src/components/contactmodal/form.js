import React from "react"

const SmallFormComponent = () => (
  <form>
    <p><input type='text' name='name' placeholder='Nombre' /></p>
    <p><input type='text' name='phone' placeholder='Teléfono' /></p>
    <p><input type='text' name='email' placeholder='Email' /></p>
    <button type='submit'><span>Enviar</span></button>
  </form>
)

export default SmallFormComponent