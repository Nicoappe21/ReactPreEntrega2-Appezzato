import React, {useState} from 'react';
import "./ItemCount.css"



const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const sumar =()=>{
        if(count < stock){
            setCount(count+1)
        }
    };

    const restar =()=>{
        if(count > initial){
            setCount(count-1)
        }
    };
  return (
    <div className='contador'>
        <button onClick={restar} disabled={count == initial}>
            -
            </button>
            <p>Stock: {stock}</p>
            <p>Cantidad: {count}</p>
            <button onClick={sumar} disabled={count == stock}>
            +
            </button>
            <button onClick={()=>onAdd(count)}>Agregar</button>
    </div>
  )
}

export default ItemCount