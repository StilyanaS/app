
function Item ({product}) {

    return (
        <div key={product.id} className='card w-50'>
        <div className='card-header'>{product.name}</div>
        <div className='card-body'><img src={product.url} alt='imagen' className='w-25' /></div>
        <div className="card-footer">{`precio ${product.price}`}</div>
        <button className="btn btn-outline-primary">Detalle</button>
        </div> 
     
    )
}

export default Item
