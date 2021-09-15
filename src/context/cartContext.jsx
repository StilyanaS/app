import {createContext} from 'react';

import {useState, useContext} from 'react'

export const AppContext = createContext();

export const cartContext = createContext();

export const CartContextProvider = ({children}) => {
    const  [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        setCart([...cart,{item, quantity}]);
    }
    return (
        <CartContext.Provider value={custData}>
            {children}
        </CartContext.Provider>
    )
}

// function cartContext() {

// const [product, setProduct] = useState ([]);
// return(
// <AppContext.Provider value={product} />

// )}