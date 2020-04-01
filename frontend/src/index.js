import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../src/style.scss';
import authAPI from './services/authAPI';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUpBranis';
import login from './components/Login/login';
import NavBar from './components/NavBar/navbar';
import Login from './components/Login/login';

const App = () => {
  authAPI.setup();
  //demander a APIAUTH SI CONNECYER
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  console.log(isAuthenticated);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavBar isAuthenticated={isAuthenticated} onLogout={setIsAuthenticated}></NavBar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Inventory' component={Inventory} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/login' render={props => <Login onLogin={setIsAuthenticated} />} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
