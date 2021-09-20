//import Button from 'react-bootstrap/Button';
//import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../../context/CartContext';

function Cart() {
  
    const {cart, clear, totalPrice} = useCartContext();
    return (
       <>
       
        {cart.map(pro => <div>
        <p>{pro.product.name}</p>
        <p>{pro.quantity}</p>
        </div>
        )}
        
        <button onClick={clear}>Eliminar productos</button>
        {totalPrice}
        </>
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