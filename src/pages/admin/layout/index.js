
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router";
import { logoutAction } from "../../../redux/action/UserAction";
import "./styles.css";

import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined,OrderedListOutlined,LogoutOutlined,HomeOutlined,FileImageOutlined,ContactsOutlined,MessageOutlined } from '@ant-design/icons';
import { Footer } from "antd/lib/layout/layout";


import Admin from "../home/index"
import Blog from "../blog";
import MemoAdd from "../memo_add";
import MemoAdmin from "../memo";
import ContactAdmin from "../contact";
import CategoryAdmin from "../category";
import BlogUpdate from "../blog_update";

const { Header, Sider, Content } = Layout;
function LayoutAdmin(props) {
  const [collapsed, setCollapsed] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    console.log("---logout---");
    localStorage.removeItem("ADMIN");
    dispatch(logoutAction());
    history.push("/login");
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <Layout className="layout">
        <Sider
          style={{backgroundColor:"#86b6c2"}}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu  style={{backgroundColor:"#86b6c2",color:"#fff"}} mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />} onClick={()=>{history.replace('/admin')}}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            
            <Menu.Item key="4" icon={<OrderedListOutlined />}  onClick={()=>{history.replace('/admin/category')}}>
              Category
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />} onClick={()=>{history.replace('/blog')}}>
              Blog
            </Menu.Item>
            <Menu.Item key="6" icon={<FileImageOutlined />} onClick={()=>{history.replace('/admin/memo')}}>
              Memo
            </Menu.Item>
            <Menu.Item key="7" icon={<ContactsOutlined />} onClick={()=>{history.replace('/admin/contact')}}>
              Contact
            </Menu.Item>
            <Menu.Item key="8" icon={<LogoutOutlined />} onClick={()=>logout()}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
             {
                 props?
                 props.page==="ADMIN"?<Admin/>:
                 props.page==="BLOG"?<Blog/>:
                 props.page==="BLOG_UPDATE"?<BlogUpdate/>:
                 props.page==="MEMO_ADD"?<MemoAdd/>:
                 props.page==="MEMO"?<MemoAdmin/>:
                 props.page==="CONTACT"?<ContactAdmin/>:
                 props.page==="CATEGORY"?<CategoryAdmin/>: <Admin/>:<Admin/>
             }
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            DevMon System
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default withRouter(LayoutAdmin) ;
