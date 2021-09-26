import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext'


function App() {

  return (
    
    <div className="App">
      <CartContextProvider>
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
    </CartContextProvider>
     </div>
   
  );
}

export default App;
