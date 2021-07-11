import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import SideMenu from "./components/SideMenu";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import MenuItem from "./components/MenuItem";
import hospitals from "./components/hospitals";
import { Container } from "react-bootstrap";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}

        />
        <div className={`side-content ${inactive ? 'inactive':""}`}>
        <Switch>
          <Route path={'/overview'} exact component={MenuItem}/>
          <Route path={'/hospital'} exact component={hospitals}/>
        </Switch>
        </div>
        </Router>

       </div>
  );
}

export default App;
