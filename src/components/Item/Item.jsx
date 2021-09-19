import {NavLink} from 'react-router-dom';
//import React, {useContext} from 'react';
//import CartContext from '../../context/CartContext';
function Item ({product}) {
//const custData = useContext(CartContext);
    return (
        <div key={product.id} className='card w-50'>
        <div className='card-header'>{product.name}</div>
        <div className='card-body'><img src={product.url} alt='imagen' className='w-25' /></div>
        <div className="card-footer">{`precio ${product.price}`}</div>
        <NavLink to={`/products/${product.id}`}>
        <button className="btn btn-outline-primary">Detalle</button>
        </NavLink>
        </div> 
     
    )
}

export default Item
