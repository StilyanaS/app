//import Button from 'react-bootstrap';
//import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../App';
import {useContext} from 'react';
function Cart() {
    const useCartContext = useContext(CartContext);
    console.log(useCartContext);
    return (
        <p>Hola</p>
        // {
        // Cart.length > 0 && (cart.map(element => {
        // return (
        // <>
        // <h1>{element.product.title}</h1>
        // <ItemCount />
        // <Button onClick={removeItem(element.product.id)}>Borrar del carrito</Button>
        // </>
        )
}

export default Cart