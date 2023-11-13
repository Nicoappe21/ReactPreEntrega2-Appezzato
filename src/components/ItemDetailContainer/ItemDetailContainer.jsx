import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [camiseta, setCamiseta] = useState(null)

    const{itemId} = useParams();
    
    useEffect(()=>{
        const getCamiseta = ()=> {
            return fetch("/data/camisetas.json")
            .then((response)=>response.json())
            .then((data)=> {
                const foundProduct = data.find((item)=> item.id == itemId)
                setCamiseta(foundProduct)
            })
            .catch((error)=>console.log(error))
        }
        getCamiseta()
    },[itemId])
       
  return (
    <section className='titulo'>
        {camiseta ? <ItemDetail item={camiseta}/> : <p>Buscando...</p>}
    </section>
  )
}

export default ItemDetailContainer