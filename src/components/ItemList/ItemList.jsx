import React from 'react'
import Item from '../Item/Item'

function ItemList({products}) {
    
    return (
    <>
    <ul>
    { products.map((product) => <Item product = {product} /> ) }
    
    </ul>
    </>
    
)

}
export default ItemList