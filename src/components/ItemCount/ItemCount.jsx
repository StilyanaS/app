import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import {useContext} from 'react'

const ItemCount =  ({initial, stock, onAdd, product}) => {
  const [changeButton, setButton] = useState(true);
  const {addItem} = useContext(CartContext);

        const [count, setCount] = useState(initial);
        const whenIncr = () => {
          if(count<stock)
            {
              setCount(count + 1);
            }
        };
        const whenDecr = () => {
            if (count > initial){
                setCount(count - 1);
            }
          };   
          const handlerOnAdd = (count) => {
            onAdd(count);
            setCount(initial);
            setButton(false);
            addItem()
        }  

         
return (
    <div className='w-50'>
      <div>
    <Button variant="primary" onClick={whenIncr}>+</Button>
    <label>{count}</label>
      <Button variant="primary" onClick={whenDecr}>-</Button>
      </div>
      <div>
      { changeButton ?
    <>
    <Link to={`/cart`}>
    <Button variant="primary">Carrito</Button>
      </Link>
      <Button variant="primary" onClick={handlerOnAdd(product,count)}>Comprar</Button>
    </>:
      <Button variant="primary" onClick={handlerOnAdd(count)}>Comprar</Button>
     } 
     </div>
    </div>
  )
}
export default ItemCount