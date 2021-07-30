import { Card, Col, PageHeader, Row,notification } from "antd";
import React, { useState, useEffect } from "react";
import Header from "../../../components/client/header";
import { Menu } from "antd";
import "./styles.css";
import TrackingCovid from "../../../components/client/recom/TrackingCovid";
import { HeartOutlined, SendOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Meta } = Card;
const Home = (props) => {
  const [state, setState] = useState("");

  useEffect(() => {
    notification["success"]({
      message: 'Phạm Càn Long',
      placement:"bottomRight",
      style:{background:"#d2ffc7"},
      description:
        'Welcome to my blog! Have a nice day!',
    });
  }, []);

  return (
    <>
      <Header />
      <TrackingCovid />
      <div className="body">
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Spring</h2>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Swagger with Spring"
                  description="www.instagram.com"
                />
              </Card>
              <Row style={{ marginTop: 10 }}>
                <Col span={12}>
                  <HeartOutlined style={{ fontSize: 30,color:"#f56747" }} />
                </Col>
                <Col span={12}>
                  <SendOutlined
                    style={{ fontSize: 30, justifyContent: "flex-end",color:"#2f7dc2" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                className="card"
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="How to config Spring DB"
                  description="www.instagram.com"
                />
              </Card>
              <Row style={{ marginTop: 10 }}>
                <Col span={12}>
                  <HeartOutlined style={{ fontSize: 30,color:"#f56747" }} />
                </Col>
                <Col span={12}>
                  <SendOutlined
                    style={{ fontSize: 30, justifyContent: "flex-end",color:"#2f7dc2" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
