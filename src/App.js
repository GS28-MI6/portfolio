import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/navbar";
import Inicio from "./pages/start";
import Monitoreo from "./pages/monitoreo";
import Tecnologias from "./pages/monitoreo";
import Seguridad from "./pages/seguridad";
import VentasApp from "./pages/ventasApp";
import Ventas from "./pages/ventas";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App m-0 p-0" style={{ width:"100vw", overflow: "hidden", maxWidth: "100%" }}>
        <Header />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/tecnologias" component={Tecnologias} />
        <Route exact path="/monitoreo" component={Monitoreo} />
        <Route exact path="/seguridad" component={Seguridad} />
        <Route exact path="/ventasApp" component={VentasApp} />
        <Route exact path="/ventas" component={Ventas} />
      </div>
    </Router>
  );
}

export default App;
