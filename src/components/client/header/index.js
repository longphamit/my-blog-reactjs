import { Avatar, Col, notification, Row } from "antd";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { useHistory } from "react-router";
import { notify_warning } from "../../../util/Notify";
import { PRIMARY_COLOR } from "../../../assets/constant/color";
const Header = (props) => {
  const history = useHistory();
  useEffect(() => {
    return () => {};
  }, []);
  const redirectPage = (page) => {
    history.push(page);
  };

  const notiProcessing = () => {
    notify_warning("This Item is being built");
  };
  return (
    <>
      <header style={{backgroundColor:PRIMARY_COLOR}} class="w3-container w3-center w3-padding-32">
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <h1>
          <b style={{color:"#fff"}}>DevMon Blog</b>
        </h1>
        <p>
          Welcome to the blog of <span class="w3-tag">DevMon</span>
        </p>
      </header>
      <Row>
        <Col span={4}>
          <div
            className="colChild"
            onClick={() => {
              redirectPage("/");
            }}
          >
            <img src="/home.png" style={{ width: 40, height: 40 }} />
            <p className="titleHeader">Home</p>
          </div>
        </Col>
        <Col span={4}>
          <div
            className="colChild"
            onClick={() => {
              redirectPage("/memo");
            }}
          >
            <img src="/memo.png" style={{ width: 40, height: 40 }} />
            <p className="titleHeader">Memo</p>
          </div>
        </Col>
        {/* <Col span={4}>
          <div className="colChild" onClick={() => {
              redirectPage("/projects");
            }}>
            <img src="/project.png" style={{ width: 40, height: 40 }} />
            <p className="titleHeader">Project</p>
          </div>
        </Col> */}
        <Col span={4}>
          <div
            className="colChild"
            onClick={() => {
              redirectPage("/contact");
            }}
          >
            <img src="/contact.png" style={{ width: 40, height: 40 }} />
            <p className="titleHeader">Contact</p>
          </div>
        </Col>
        {/* <Col span={4}>
          <div
            className="colChild"
            onClick={() => {
              redirectPage("/chat");
            }}
          >
            <img src="/chat.png" style={{ width: 40, height: 40 }} />
            <p className="titleHeader">Chat</p>
          </div>
        </Col> */}
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}>
          <div className="colAvatar" onClick={() => {
              redirectPage("/about-me");
            }}>
            <Avatar
              size={80}
              src="https://avatars.githubusercontent.com/u/77977221?s=400&u=e4a797cb6e88b4e5e5c909d43b70aa30b6f92a5d&v=4"
            />
            <p className="titleHeader"> About me</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
