 import {useParams} from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
 import ItemCount from '../../ItemCount/ItemCount'

function ItemDetail({product}) {
const {id} = useParams();
const {addItem, clear} = useContext(CartContext);

    
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
            <ItemCount props={custData}/>
            <button className='primary' onClick={clear}>Vaciar carrito</button>

        </div>
    )
}



export default ItemDetail