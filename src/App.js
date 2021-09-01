import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import  CartWidget from './components/CartWidget/CartWidget';

function App() {
const [count, setCount] = useState(0);
const handlerClick = () => {
  setCount(count + 1);
};


  return (
    <div className="App">
    <NavBar><CartWidget /></NavBar>
    <div><Header /></div>
    <button onClick={handlerClick}>click</button>
    </div>
  );
}

export default App;
