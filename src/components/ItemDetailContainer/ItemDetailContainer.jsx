import { useState } from 'react';
import {useEffect} from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


//const prod = {id:928, descripcion: 'descr', price: 23, name: 'babolat pure'};
const getProducts = new Promise ((resolve)=>{
    setTimeout(()=> {
    resolve(product)

    },5000)
  })//api

function ItemDetailContainer() {
    const [product, setProduct] = useState({})

useEffect (() =>{
    getProducts.then(resolve => setProduct(resolve));
},[]);

return (
    <ItemDetail producto={producto}/>
)

}

export default ItemListContainer