
import { CartContext } from '../../../context/CartContext'
 import ItemCount from '../../ItemCount/ItemCount';
 import {useContext} from 'react';


function ItemDetail({product}) {
 const {cart,addItem, changedCart} = useContext(CartContext);


    const onAdd = (product, count) => {
        addItem(product, count);
        changedCart(cart);
    }
    return (
        
        <div className='card'>
            <div className='card-header'>
                <label>{product.name}</label>
            </div>
            <div className='card-body'>
                <img src={product.url} alt="" />
                <label>{product.description}</label>

            </div>
            <div className='card-footer'>
                <label>{product.price}</label>
            </div>
            <ItemCount initial = {1} stock = {5} onAdd = {onAdd} />
           

        </div>
    )
}



export default ItemDetail