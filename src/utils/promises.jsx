const products = [
    {id:1, name: 'Babolat Pure Strike', price: 100, url:'https://www.tennis-point.es/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwea13ea7d/images/009/048/02700000_000.jpg?q=80&sw=640'},
    {id:2, name: 'Babolat Pure Aero', price: 100, url: 'https://www.tennispro.es/media/catalog/product/cache/7/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/0/101354_2_11.jpg'},
    {id:3, name: 'Babolat Evoke', price: 100, url: 'https://www.tennispro.es/media/catalog/product/cache/7/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/2/121220_1.jpg'},
    {id:4, name: 'Babolat Pure Drive', price: 100, url:'https://www.tennispro.es/media/catalog/product/cache/7/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/0/101334_1_5.jpg'},
    {id:5, name:'Wilson Clash', price: 100, url:'https://www.tennis-point.es/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbea6d27d/images/007/046/03393000_000.jpg?q=80&sw=2000'},
    {id:6, name:'Wilson Blade', price: 100, url: 'https://www.tennis-point.es/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw52eda80f/images/007/047/03474000_000.jpg?q=80&sw=640'}
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
      

        export const getProduct = new Promise ((resolve)=>{
            setTimeout(()=> {
            resolve(products)
        
            },5000)
          })
        
        