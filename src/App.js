import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css'
import Home from './Components/Home/Home'
import AccountDetails from './Components/Account/AccountDetails'


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/:nomeuser">
          <AccountDetails/>
        </Route>
      </Switch>
      </Router>
      

    </div>
  );
}

export default App;


// "javascript.inlayHints.parameterNames.enabled": "all"