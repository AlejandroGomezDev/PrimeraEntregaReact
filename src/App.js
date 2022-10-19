import { Fragment } from 'react';
import NavBar from "./components/NavBar";
import ItemlistContainer from './components/ItemlistContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <ItemlistContainer msg="Bienvenido a mi pagina de compra y ventas de VideoJuegos"/>
    </Fragment>
  );
}

export default App;
