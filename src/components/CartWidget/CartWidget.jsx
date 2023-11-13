import React from 'react';
import { BiCart } from "react-icons/bi";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className='cart'>
            <BiCart/>
            <p>0</p>
        </div>
    );
};

export default CartWidget;