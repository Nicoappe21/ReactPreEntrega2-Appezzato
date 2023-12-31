import React from 'react';
import "./Item.css"
import { Link } from 'react-router-dom';


const Item = ({equipo, año, precio, detalle, stock, id}) => {
  return (
    <article className='card'>
        <h4>Equipo: {equipo}</h4>
        <p>Año: {año}</p>
        <p>Precio: ${precio}</p>
        <Link to={`/item/${id}`} className='detalle'> Detalle </Link>
    </article>
  )
}

export default Item