import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom" ;
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/404'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route  component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
