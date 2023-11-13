import React, { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0)

    const onAdd =(cantidadAdd)=>{
        setCantidad(cantidadAdd)
    }
  return (
    <article className='detalleCam'>
        <h4>Equipo: {item.equipo}</h4>
        <p>Año: {item.año}</p>
        <p>Precio: ${item.precio}</p>
        {cantidad? (
            <Link to={`item/${item.id}`} className="adetalle">Ver {cantidad} productos en carrito</Link>
        ): (
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>  
        )} 
    </article>
  );
};

export default ItemDetail