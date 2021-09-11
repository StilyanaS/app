import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/CartWidget/CartWidget'
function App() {

function onAdd() {
  console.log('');
}

  return (
    <div className="App">
    <Router>
    <NavBar></NavBar>
       <Switch>
       <Route exact path='/' component={ItemListContainer}/>     
    <Route exact path='/categoria/:category' component={ItemListContainer}/>
    <Route exact path='/products/:id' component={ItemDetailContainer} />
    <Route exact path='/contacto' component={Contacto} />
    <Route exact path='/cart' component={Cart} />
      </Switch>

      <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
    </Router>
     </div>
  );
}

export default App;
