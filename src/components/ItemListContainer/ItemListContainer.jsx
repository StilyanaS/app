import {useEffect, useState} from 'react';
import {tarea} from '../../utils/promises';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [products,setProducts] = useState([]);
  
  useEffect (() => {
        
        tarea.then((resp)=> setProducts(resp))
      
        },[])
        return (
          <ItemList products={products}/>
        )
        }


  export default ItemListContainer