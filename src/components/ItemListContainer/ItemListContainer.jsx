import React, {useState, useEffect} from "react";
import ItemList from  "../ItemList/ItemList"
import "`./ItemListContainer.css`"
import { useParams } from "react-router-dom";



const ItemListContainer = ({mensaje}) => {
    const [camisetas, setCamisetas] = useState([])
    const {categoryId} = useParams()
    
    useEffect(()=>{
        const getCamisetas = ()=>{
            return fetch("/data/camisetas.json")
            .then((response)=> response.json())
            .then((data)=>{
                if(categoryId){
                    const filterProducts = data.filter(p=>p.equipo== categoryId)
                    setCamisetas(filterProducts)
                } else{
                    setCamisetas(data)
                }
            })
            .catch((error)=>console.log(error))
        }
        getCamisetas()
    },[categoryId])
        

    return(
        <>
        <h1 className="titulo">{mensaje}</h1>
        <div className="camisetas">
        {camisetas.length ? <ItemList list={camisetas}/> : <p>No hay casacas</p>}
        </div> 
        </>
        
    )
}

export default ItemListContainer