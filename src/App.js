import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './componenets/pages/Home';
import About from './componenets/pages/About';
import Navbar from './componenets/layouts/Navbar';
import Adduser from './componenets/pages/Adduser';
import Edituser from './componenets/pages/Edituser';
import View from './componenets/pages/View';
import NotFound from './componenets/layouts/NotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/adduser" component={Adduser} />
          <Route exact path="/edituser/:id" component={Edituser} />
          <Route exact path="/user/:id" component={View} />
          <Route   component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
