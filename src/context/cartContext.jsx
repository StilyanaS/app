import {createContext} from 'react';

import {useState, useContext} from 'react'

export const AppContext = createContext();

export const cartContext = createContext();

export const CartContextProvider = ({children}) => {
    const  [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const updateCart = [...cart];
            updateCart.forEach((element)=> {
                if (element.item.id === item.id) {
                    element.quantity = element.quantity + quantity;
                }
            })
            setCart(updateCart);
        } else {
        setCart([...cart,{item, quantity}]);
        }
    }
    const isInCart = () => {
        return cart.find(element=> element.item.id===id)
    }

    const clear = () => setCart([]);

    return (
        <CartContext.Provider value={addItem}>
            {children}
        </CartContext.Provider>
    )
}

// function cartContext() {

// const [product, setProduct] = useState ([]);
// return(
// <AppContext.Provider value={product} />

// )}