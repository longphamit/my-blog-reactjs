import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/client/home.js';
import Blog from './components/admin/blog';
import Admin from './pages/admin/home';
import AuthenRouter from './router/AuthenRouter';
import Login from './pages/admin/login';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/home" exact={true} component={Home}></Route>
      <Route path="/blog" exact={true} component={Blog}></Route>
      <Route path="/login" exact={true} component={Login}></Route>
      <AuthenRouter path="/admin" exact={true} component={Admin}></AuthenRouter>
    </Switch>
  </Router>
  );
}

export default App;
