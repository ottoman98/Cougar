import { useState } from 'react'
import useFetch from '../../hooks/useFetch'

function ProductForm () {
  const url = 'https://sport-elite-back.onrender.com/product'

  const { setNombre, setCantidad, setPrecio, setCategoria, setColores, setTallas, setDescuento, handleImagenesChange, handleSubmit } = useFetch(url, 'POST')

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <label>
        Nombre:
        <input type='text' required onChange={event => setNombre(event.target.value)} />
      </label>
      <br />
      <label>
        Cantidad:
        <input type='number' required onChange={event => setCantidad(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        Precio:
        <input type='number' required onChange={event => setPrecio(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        Categoría:
        <input type='text' required onChange={event => setCategoria(event.target.value)} />
      </label>
      <br />
      <label>
        Colores:
        <input type='text' required onChange={event => setColores(event.target.value.split(','))} />
      </label>
      <br />
      <label>
        Tallas:
        <input type='text' required onChange={event => setTallas(event.target.value.split(','))} />
      </label>
      <br />
      <label>
        Descuento:
        <input type='number' onChange={event => setDescuento(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        Imágenes:
        <input type='file' accept='.png, .jpg, .gif, .bmp' required multiple onChange={handleImagenesChange} />
      </label>
      <br />
      <button type='submit'>Guardar</button>
    </form>
  )
}

export default ProductForm
