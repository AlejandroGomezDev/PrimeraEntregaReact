import NavBar from "./components/NavBar";
import ItemlistContainer from './components/ItemlistContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemlistContainer msg="Bienvenido a mi Landing Page"/>
    </div>
  );
}

export default App;
