import {useEffect, useState} from 'react';
import {tarea} from '../../utils/promises';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
//import Spinner from 'react-bootstrap/Spinner';
const ItemListContainer = () => {

  const [products,setProducts] = useState([]);
  const {category} = useParams();
 // const [loading, setLoaded] = useState(true);

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
        //   <>
        //   {loading && <h2><Spinner animation="border" role="status">
        //  <span className="visually-hidden">Loading...</span>
        //    </Spinner></h2>}
        // {!loading && 
        //   <ItemList products={products}/>, setLoaded(false)}
        //   </>
        )
     }


  export default ItemListContainer