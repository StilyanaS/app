import { useState, createContext, useContext} from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const  [cart, setCart] = useState([]);
    
    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            const updateCart = [...cart];
            updateCart.forEach((element)=> {
                if (element.cart.id === cart.id) {
                    element.quantity = element.quantity + quantity;
                }
            })
            setCart(updateCart);
        } else {
        setCart([...cart,{product, quantity}]);
        }
    }
    const isInCart = () => {
        return cart.find(element=> element.cart.id===cart.id)
    }

    const iconCart = () => {
        return cart.reduce( (acum, i) => acum + i.quantity, 0)
    }

    const clear = () => setCart([]);

    const removeItem = (productId) => {
        const cartFilter = cart.filter(element => element.product.id !== productId);
        return setCart([...cartFilter]);
    }

    const totalPrice = () => {
        return cart.reduce( (acum, valor) => (acum + (valor.quantity * valor.item.price)), 0)
    }

    return (
        <CartContext.Provider value={{cart, clear, iconCart,totalPrice, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext