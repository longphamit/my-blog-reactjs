import { Avatar, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  PictureOutlined,
  MailOutlined,
  CodeOutlined,
  UserOutlined
} from "@ant-design/icons";
import "./styles.css";
import { useHistory } from "react-router";
const Header = (props) => {
  const [chooseHome, setChooseHome] = useState(true);
  const [chooseMemo, setChooseMemo] = useState(false);
  const [chooseProject, setChooseProject] = useState(false);
  const [chooseContact, setChooseContact] = useState(false);
  const [chooseChat, setChooseChat] = useState(false);
  const [chooseProfile, setChooseProfile] = useState(false);
  const history=useHistory();
  useEffect(() => {
    return () => {};
  }, []);
  const redirectPage=(page)=>{
    setChoose()
    history.push(page)
  }
  const setChoose=()=>{
    setChooseHome(false)
    setChooseMemo(false)
    setChooseProject(false)
    setChooseChat(false)
    setChooseProfile(false)
    setChooseContact(false)
  }
  return (
    <>
      <Row>
        <Col span={4}>
          <div className="colChild"  onClick={()=>{redirectPage("/home");setChooseHome(true)}}>
            <img src="/home.png" style={{width:40,height:40}}/>
            <p className="titleHeader">Home</p>
          </div>
        </Col>
        <Col span={4}>
          <div className="colChild">
          <img src="/memo.png" style={{width:40,height:40}}/>
            <p className="titleHeader">Memo</p>
          </div>
        </Col>
        <Col span={4}>
          <div className="colChild">
          <img src="/project.png" style={{width:40,height:40}}/>
            <p className="titleHeader">Project</p>
          </div>
        </Col>
        <Col span={4}>
          <div className="colChild" onClick={()=>{redirectPage("/contact")}}>
          <img src="/contact.png" style={{width:40,height:40}}/>
            <p className="titleHeader">Contact</p>
          </div>
        </Col>
        <Col span={4}>
          <div className="colChild">
          <img src="/chat.png" style={{width:40,height:40}}/>
            <p className="titleHeader">Chat with my bot</p>
          </div>
        </Col>
        
        <Col span={4}>
          <div className="colAvatar">
          <Avatar size={80} src="https://avatars.githubusercontent.com/u/77977221?s=400&u=e4a797cb6e88b4e5e5c909d43b70aa30b6f92a5d&v=4" />
            <p className="titleHeader"> About me</p>
            
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
