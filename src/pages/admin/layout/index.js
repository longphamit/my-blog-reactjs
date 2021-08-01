import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router";
import { logoutAction } from "../../../redux/action/UserAction";
import "./styles.css";

import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined,LogoutOutlined,HomeOutlined,FileImageOutlined } from '@ant-design/icons';
import { Footer } from "antd/lib/layout/layout";


import Admin from "../home/index"
import Blog from "../blog";
const { Header, Sider, Content } = Layout;

function LayoutAdmin(props) {
  const [collapsed, setCollapsed] = useState("");
  const location = useLocation();
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

  const toggle = () => {
    setCollapsed(!collapsed);
  };
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
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={()=>{history.replace('/blog')}}>
              Blog
            </Menu.Item>
            <Menu.Item key="4" icon={<FileImageOutlined />} onClick={()=>{history.replace('/blog')}}>
              Memo
            </Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />} onClick={()=>logout()}>
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
                 props.page==="BLOG"?<Blog/>:null:null
             }
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default withRouter(LayoutAdmin) ;
