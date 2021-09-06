import {useEffect, useState} from 'react';
import {tarea} from '../../utils/promises';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [products,setProducts] = useState([]);
  
  useEffect (() => {
        
        tarea.then((resp)=> setProducts(resp))
      
        },[])
console.log(products)
        return (
          <ItemList products={products}/>
        )
        }
  //   useEffect(() => {

  //     if(category===undefined){
  //         tarea
  //         .then((resp)=> setItems(resp) )     //guardar en el estado
  //      }else{
  //          tarea
  //          .then((resp)=> setItems(resp.filter( r => category===r.categoria)) ) 
  //     }
  // }, [category])


  export default ItemListContainer