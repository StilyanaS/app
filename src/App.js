import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/CartWidget/CartWidget';
import {createContext} from 'react';
import {useState} from 'react';
export const CartContext = createContext();
const productoDef = {id:1, name: 'Babolat Pure Strike', price: 100, url:'https://www.tennis-point.es/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwea13ea7d/images/009/048/02700000_000.jpg?q=80&sw=640', description:'descripción corta', categoria:'babolat'}
function App() {
  const [producto, setProduct] = useState(productoDef);

  return (
    <div className="App">
    <CartContext.Provider value={producto}>
    <Router>
    <NavBar></NavBar>
       <Switch>
       <Route exact path='/' component={ItemListContainer}/>     
    <Route exact path='/categoria/:category' component={ItemListContainer}/>
    <Route exact path='/products/:id' component={ItemDetailContainer} />
    <Route exact path='/contacto' component={Contacto} />
    <Route exact path='/cart' component={Cart} />
      </Switch>
    </Router>
    </CartContext.Provider>
     </div>
  );
}

export default App;
