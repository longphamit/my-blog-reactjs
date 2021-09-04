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
import ChatPage from "./pages/client/chatbot"
import BlogList from './pages/client/blog_list';
import LayOutClient from './pages/client/layout';
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact={true} component={()=><LayOutClient page="HOME"/>}></Route>
      <Route path="/login" exact={true} component={Login}></Route>
      <Route path="/contact" exact={true} component={()=><LayOutClient page="CONTACT"/>}></Route>
      <Route path="/blog-list/:id" exact={true} component={(props)=><LayOutClient page="BLOG_LIST" {...props}/>}></Route>
      <Route path="/blog-detail" exact={true} component={()=><LayOutClient page="BLOG_DETAIL"/>}></Route>
      <Route path="/memo" exact={true} component={()=><LayOutClient page="MEMO"/>}></Route>
      <Route path="/chat" exact={true} component={ChatPage}></Route>
      <AuthenRouter path="/admin" exact={true} component={()=><LayoutAdmin page="ADMIN"/>}/>
      <AuthenRouter path="/blog" exact={true} component={()=><LayoutAdmin page="BLOG"/>}/> 
      <AuthenRouter path="/blog/update" exact={true} component={()=><LayoutAdmin page="BLOG_UPDATE"/>}/> 
      <AuthenRouter path="/admin/memo-add" exact={true} component={()=><LayoutAdmin page="MEMO_ADD"/>}/>
      <AuthenRouter path="/admin/memo" exact={true} component={()=><LayoutAdmin page="MEMO"/>}/>
      <AuthenRouter path="/admin/chat" exact={true} component={()=><LayoutAdmin page="CHAT"/>}/>
      <AuthenRouter path="/admin/contact" exact={true} component={()=><LayoutAdmin page="CONTACT"/>}/>
      <AuthenRouter path="/admin/category" exact={true} component={()=><LayoutAdmin page="CATEGORY"/>}/>
    </Switch>
  </Router>
  );
}

export default App;
