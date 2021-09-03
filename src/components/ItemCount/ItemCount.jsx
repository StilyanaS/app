import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

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
        }
        
        
return (
    <div className='w-50'>
    <Button variant="primary" onClick={whenIncr}>+</Button>
    <label>{count}</label>
    <Button variant="primary" onClick={whenDecr}>-</Button>
    <Button variant="primary" onClick={handlerOnAdd}>Agregar</Button>
    </div>
)
}
export default ItemCount