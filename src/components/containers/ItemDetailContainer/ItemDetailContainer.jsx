import { useState, useEffect } from 'react';
import {getProduct} from '../../../utils/promises';
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    
useEffect (() =>{
    getProduct
    .then(resolve => {
    setProduct(resolve);
   setLoading(false);
})
}, [])
console.log(`Esto es el producto ${product}`);
return (
   <> {loading ?
       <h2> Cargando productos</h2>
       :
       <ItemDetail product={product} />
    }
    </>
)

}

export default ItemDetailContainer
