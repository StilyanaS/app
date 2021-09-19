import { createContext} from 'react';


export const CartContext = createContext('default');



// export const CartContextProvider = ({children}) => {
//     const  [cart, setCart] = useState([]);
//     const addItem = (item, quantity) => {
//         if (isInCart(item.id)) {
//             const updateCart = [...cart];
//             updateCart.forEach((element)=> {
//                 if (element.item.id === item.id) {
//                     element.quantity = element.quantity + quantity;
//                 }
//             })
//             setCart(updateCart);
//         } else {
//         setCart([...cart,{item, quantity}]);
//         }
//     }
//     const isInCart = () => {
//         return cart.find(element=> element.item.id===id)
//     }

//     const clear = () => setCart([]);

//     const removeItem = (productId) => {
//         const cartFilter = cart.filter(element => element.product.id === productId);
//         return setCart(cartFilter);
//     }

//     return (
//         <CartContext.Provider value={addItem, clear, removeItem}>
//             {children}
//         </CartContext.Provider>
//     )
// }

//const [product, setProduct] = useState ([]);

//<AppContext.Provider value={product} />