import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

function onAdd() {
  console.log('');
}

  return (
    <div className="App">
    <Router>
    <NavBar><CartWidget /></NavBar>
       <Switch>
        <Route exact path='/hola'>
        <ItemDetailContainer />
        </Route>
    <Route exact path='/'>
      <div><ItemListContainer titulo='hola'/></div>
    </Route>
      </Switch>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
     
    </Router>
     </div>
  );
}

export default App;
