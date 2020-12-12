
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/navbar"
import Inicio from "./components/inicio"
import Monitoreo from "./components/monitoreo"
import Seguridad from "./components/seguridad"
import VentasApp from "./components/ventasApp"
import Ventas from "./components/ventas"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App m-0 p-0" style={{ height: "100vh" }}>
      <Header /> 
      <Route exact path="/" component={Inicio} />
      <Route path="/monitoreo" component={Monitoreo} />
      <Route path="/seguridad" component={Seguridad} />
      <Route path="/ventasApp" component={VentasApp} />
      <Route path="/ventas" component={Ventas} />
    </div>
    </Router>
  );
}

export default App;
