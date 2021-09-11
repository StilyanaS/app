//import {useParams} from 'react-router-dom';

function ItemDetail({product}) {

    
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

        </div>
    )
}



export default ItemDetail