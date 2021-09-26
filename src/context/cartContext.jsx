import {createContext} from 'react';
import {useState} from 'react';
export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

// Ultimo añadido
    // setea el array del Carrito
    const  [cart, changedCart] = useState([{id: '1', name: 'raqueta HEAD', price: 100}]);


    const addItem = (product, quantity) => {
        const isInCart = cart.findIndex(i => i.product.id === product.id);
            if (isInCart(product.id)) {
                const updateCart = [...cart];
                updateCart.forEach((product)=> {
                    if (product.cart.id === cart.id) {
                        product.quantity = product.quantity + quantity;
                    }
                })
                changedCart(updateCart);
            } else {
            changedCart([...cart,{product, quantity}]);
            }
        }
        
            // vaciar carrito
            const clear = () => changedCart([]); 
    

// Ultimo añadido

    return (
        <CartContext.Provider value={{
            
             clear,
             cart,
             changedCart,
             addItem
             }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider