import "./App.css";
import InfoBMI from "./components/InfoBMI";
import CalculateBMI from "./components/CalculateBMI";
import DietPlan from "./components/DietPlan";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <div>
          <div>
            <Route path="/info" component={InfoBMI} />
          </div>
          <div>
            <Route path="/" exact  component={CalculateBMI} />
          </div>
          <div>
            <Route path="/dietplan" component={DietPlan} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
