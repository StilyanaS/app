import {useEffect, useState} from 'react';
import {tarea} from '../../utils/promises';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
const ItemListContainer = () => {

  const [products,setProducts] = useState([]);
  const {category} = useParams();

  useEffect (() => {
    if (category===undefined){
      tarea.then((resolve)=>setProducts(resolve))
    } else {
      tarea.then((resolve)=>
      setProducts(resolve.filter(catAct=> category===catAct.categoria)))
    }
  },[category])
        
       console.log(category)
        return (
          <ItemList products={products}/>
        )
        }


  export default ItemListContainer