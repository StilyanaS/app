import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const ItemCount =  ({initial, stock, onAdd}) => {
  const [changeButton, setButton] = useState(false);

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
            onAdd(count)
            setCount(initial)
            setButton(false);
        }  
         
return (
    <div className='w-50'>
    <Button variant="primary" onClick={whenIncr}>+</Button>
    <label>{count}</label>
      <Button variant="primary" onClick={whenDecr}>-</Button>
      { changeButton ?
    <Button variant="primary" onClick={handlerOnAdd}>Agregar</Button>:
    
    <Link to={`/cart`}>
    <Button variant="primary" >Carrito</Button>
      </Link>
      }
    </div>
  )
}
export default ItemCount