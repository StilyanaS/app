import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
function ItemCount (){

        const [count, setCount] = useState(0);
        const [date, setDate] = useState(Date());
        const whenIncr = () => {
          setCount(count + 1);
          setDate(Date());
        };
        const whenDecr = () => {
            setCount(count - 1);
          };
        
return (
    <>
    <label>{count}</label><br />
    <label>{date}</label><br />
    <Button variant="primary" onClick={whenIncr}>+</Button>
    <Button variant="primary" onClick={whenDecr}>-</Button>
    </>
)
}
export default ItemCount