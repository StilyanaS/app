

function ItemDetail() {


    return (
        <div className='card'>
            <div className='card-header'>
                <label>{producto.name}</label>
            </div>
            <div className='card-body'>
                <label>{producto.descripcion}</label>
            </div>
            <div className='card-footer'>
                <label>{producto.price}</label>
            </div>

        </div>
    )
}



export default ItemDetail



