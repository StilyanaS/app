

const products = [
    {id:1, name: 'Babolat Pure Strike', price: 100 },
    {id:2, name: 'Babolat Pure Aero', price: 100},
    {id:3, name: 'Babolat Evoke', price: 100},
    {id:4, name: 'Babolat Pure Drive', price: 100},
    {id:5, name:'Wilson Clash', price: 100},
    {id:6, name:'Wilson Blade', price: 100}
]

function getProducts(id){
    if (id===undefined){
        return products
    } else {
        return products.find(product=>product.id===id)
    }
}

       export let tarea = new Promise((resolve) => {
            setTimeout(() => {
                resolve(getProducts());        
            }, 3000);  
        });
      
        
        