import Button from 'react-bootstrap/Button';
//import ItemCount from '../ItemCount/ItemCount';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Cart() {
 const {cart, changedCart, clear} = useContext(CartContext);
   console.log(cart);
   console.log(changedCart);
    return (
        <div>
           
         {cart.map((pro) => (
       <div>
        <p>{pro.name}</p>
        <p>{pro.quantity}</p>
        </div>
         )
        )
         }
        <Button onClick={clear}>Eliminar todo</Button> 
    </div>
        
    //     
    //     {totalPrice} 
   
        )
}

export default Cart

 // {
        // cart.length > 0 && (cart.map(element => {
        // return (
        // <>
        // <h1>{element.product.title}</h1>
        // <ItemCount />
        // <Button onClick={removeItem(element.product.id)}>Borrar del carrito</Button>
        // </>