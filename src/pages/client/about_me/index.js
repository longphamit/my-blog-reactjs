import { Col, Row, Steps } from "antd";
import React, { useState, useEffect } from "react";
import { MailFilled, PhoneFilled, GithubFilled,LinkedinFilled, HomeFilled } from "@ant-design/icons";
import "./styles.css";
function AboutMe(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);
  const { Step } = Steps;
  return (
    <>
      <div >
        <Row>
          <Col xl={6} xs={0} span={6}></Col>
          <Col style={{background:"#fff"}} className="about-me-card" xl={12} xs={24} span={12}>
            <Row style={{paddingTop:20,paddingBottom:20}}>
              <Col xs={24} xl={14} span={14}>
                <Row>
                  <div style={{ color: "#000", fontWeight: "bold",fontSize:"20" }}>
                    PHAM CAN LONG
                  </div>
                </Row>
                <div style={{marginTop:10}}>
                  <Row>
                    <div className="sub-info"><PhoneFilled style={{color:"#5a9464"}}/> +84705799900</div>
                  </Row>
                  <Row>
                    <div className="sub-info"><MailFilled style={{color:"#d44646"}}/> longphamjustdoit@gmail.com</div>
                  </Row>
                  
                  <Row>
                    <div className="sub-info"><HomeFilled style={{color:"#ed8c8c"}}/> Hồ Chí Minh city</div>
                  </Row>
                  <Row>
                    <div className="sub-info" ><GithubFilled style={{color:"#000"}}/> <a style={{color:"blue"}} href="https://github.com/longphamit">GitHub</a> </div>
                  </Row>
                  <Row>
                    <div className="sub-info" ><LinkedinFilled style={{color:"#000"}}/> <a style={{color:"blue"}} href="https://www.linkedin.com/in/can-long-pham-32aa46207/">Linkedin</a> </div>
                  </Row>
                </div>
              </Col>
              <Col xs={24} xl={10} span={10}>
                <div style={{marginLeft:10,fontSize:12}}>
                  <Steps progressDot direction="vertical" current={1} >
                    <Step title="FPT University" description="2018-2022 Student" />
                    <Step
                     
                      title="Long Van System Solution"
                      description="2020-Present Fullstack-Developer"
                    />
                  </Steps>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} xs={0} span={6}></Col>
        </Row>
      </div>
    </>
  );
}

export default AboutMe;
