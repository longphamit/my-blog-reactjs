
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenRouter from './router/AuthenRouter';
import Login from './pages/admin/login';
import LayoutAdmin from './pages/admin/layout';
import ChatPage from "./pages/client/chatbot"
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
      <Route path="/projects" exact={true} component={()=><LayOutClient page="PROJECT"/>}></Route>
      <Route path="/chat" exact={true} component={ChatPage}></Route>
      <Route path="/about-me" exact={true} component={()=><LayOutClient page="ABOUT_ME"/>}></Route>

      <AuthenRouter path="/admin" exact={true} component={()=><LayoutAdmin page="ADMIN"/>}/>
      <AuthenRouter path="/blog" exact={true} component={()=><LayoutAdmin page="BLOG"/>}/> 
      <AuthenRouter path="/blog/update" exact={true} component={()=><LayoutAdmin page="BLOG_UPDATE"/>}/> 
      <AuthenRouter path="/admin/memo-add" exact={true} component={()=><LayoutAdmin page="MEMO_ADD"/>}/>
      <AuthenRouter path="/admin/memo" exact={true} component={()=><LayoutAdmin page="MEMO"/>}/>
      <AuthenRouter path="/admin/contact" exact={true} component={()=><LayoutAdmin page="CONTACT"/>}/>
      <AuthenRouter path="/admin/category" exact={true} component={()=><LayoutAdmin page="CATEGORY"/>}/>
    </Switch>
  </Router>
  );
}

export default App;
