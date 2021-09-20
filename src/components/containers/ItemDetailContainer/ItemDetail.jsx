
import useCartContext from '../../../context/CartContext'
 import ItemCount from '../../ItemCount/ItemCount';


function ItemDetail({product}) {

 const {addItem, clear, cart, removeItem, setAddedProduct} = useCartContext();

    const onAdd = (quant, product) => {
        console.log(quant);
        addItem(product, quant);
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
            <ItemCount initial = {1} stock = {5} onAdd = {onAdd}/>
            {/* <button className='primary' onClick={clear}>Vaciar carrito</button> */}

        </div>
    )
}



export default ItemDetail