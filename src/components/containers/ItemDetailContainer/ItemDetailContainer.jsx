import { useState, useEffect } from 'react';
import {getProduct} from '../../../utils/promises';
import ItemDetail from './ItemDetail';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
   // const [productDetail, setProductDetail] =useState({});
    //const id = props.match.params.id;
    const {id} = useParams();
    

useEffect (() => {
   
getProduct.then(resolve => {
    setProduct(resolve.find(i => id = i.id )); 
    setLoading(false);
});
},[id]);



return (
   <> {loading ?
       <h2> Cargando productos</h2>
       :
        <ItemDetail product={product} />
    }
    <NavLink to='/'>
        Volver
    </NavLink>
    </>
)
    }