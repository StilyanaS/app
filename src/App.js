import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import Prueba from './components/Prueba/Prueba';
//const productoDef = {id:1, name: 'Babolat Pure Strike', price: 100, url:'https://www.tennis-point.es/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwea13ea7d/images/009/048/02700000_000.jpg?q=80&sw=640', description:'descripción corta', categoria:'babolat'}
function App() {
 // const [producto, setProduct] = useState(productoDef);

  return (
    <CartContextProvider>
    <div className="App">
    <Router>
    <NavBar></NavBar>
       <Switch>
       <Route exact path='/' component={ItemListContainer}/>     
    <Route exact path='/categoria/:category' component={ItemListContainer}/>
    <Route exact path='/products/:id' component={ItemDetailContainer} />
    <Route exact path='/contacto' component={Contacto} />
    <Route exact path='/cart' component={Cart} />
    <Route exact path='/prueba' component={Prueba} />  
      </Switch>
    </Router>
     </div>
     </CartContextProvider>
  );
}

export default App;
