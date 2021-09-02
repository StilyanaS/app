import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <ItemDetailContainer />
      </Switch>
    <NavBar><CartWidget /></NavBar>
    <Route exact path='/'>
    <div><ItemListContainer titulo='hola'/></div>
          </Route>
     <ItemCount /> 
     </div>
    </Router>
  );
}

export default App;
