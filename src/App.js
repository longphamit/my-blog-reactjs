import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/client/home.js';
import Blog from './pages/admin/blog';
import Admin from './pages/admin/home';
import AuthenRouter from './router/AuthenRouter';
import Login from './pages/admin/login';
import LayoutAdmin from './pages/admin/layout';
import BlogDetail from './pages/client/blog_detail';
import Contact from './pages/client/contact';
import Memo from './pages/client/memo.js';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/login" exact={true} component={Login}></Route>
      <Route path="/contact" exact={true} component={Contact}></Route>
      <Route path="/blog-detail" exact={true} component={BlogDetail}></Route>
      <Route path="/memo" exact={true} component={Memo}></Route>
      <AuthenRouter path="/admin" exact={true} component={()=><LayoutAdmin page="ADMIN"/>}/>
      <AuthenRouter path="/blog" exact={true} component={()=><LayoutAdmin page="BLOG"/>}/> 
      <AuthenRouter path="/admin/memo-add" exact={true} component={()=><LayoutAdmin page="MEMO_ADD"/>}/>
      <AuthenRouter path="/admin/memo" exact={true} component={()=><LayoutAdmin page="MEMO"/>}/>
    </Switch>
  </Router>
  );
}

export default App;
