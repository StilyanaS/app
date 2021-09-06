
const Item = (product) => {

    return (
        <div key={product.id} className='card w-50'>
        <div className='card-header'>{product.name}</div>
        <div className='card-body'>{product.price}</div>
        </div>  
    )
}

export default Item
