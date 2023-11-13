import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({list}) =>{
    return(
        <div className="card-container">
        {list.map((camiseta)=>(
            <Item key={camiseta.id} {...camiseta}/>
        ))}
        </div>
        
    )
};

export default ItemList
