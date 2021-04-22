import "./styles.css";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <Route path="/Homepage" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}
