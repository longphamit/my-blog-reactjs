import { Card, Col, PageHeader, Row, notification } from "antd";
import React, { useState, useEffect } from "react";
import Header from "../../../components/client/header";
import { Menu } from "antd";
import "./styles.css";
import TrackingCovid from "../../../components/client/recom/TrackingCovid";
import { HeartOutlined, SendOutlined } from "@ant-design/icons";
import request from "../../../connect/AxiosConfig";
import { useHistory } from "react-router";
const { SubMenu } = Menu;
const { Meta } = Card;
const Home = (props) => {
  const [data, setData] = useState("");
  const fetchBlog = async () => {
    const res = await request.get("/blog");
    setData(res.data);
  };
  const history = useHistory();
  useEffect(() => {});
  const redirectBlogList = () => {
    history.push("/blog-list");
  };
  return (
    <>
      <TrackingCovid />
      <div className="body">
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Tech</h2>
        <Row gutter={16}>
          <Col className="gutter-row" span={6} onClick={()=>{redirectBlogList()}}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    width="300"
                    height="300"
                    alt="example"
                    src={require('../../../assets/image/spring_boot_image.jpg').default}
                  />
                }
              >
                <Meta title="Spring boot" description="Blog about spring boot" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    height="300"
                    alt="example"
                    src={require('../../../assets/image/dotnet_image.png').default}
                  />
                }
              >
                <Meta title=".NET" description="Blog about .NET" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    height="300"
                    alt="example"
                    src={require('../../../assets/image/javascript_image.png').default}
                  />
                }
              >
                <Meta title=".NET" description="Blog about .NET" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    height="300"
                    alt="example"
                    src={require('../../../assets/image/node_js_image.jpg').default}
                  />
                }
              >
                <Meta title="NodeJS" description="Blog about NodeJS" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    height="300"
                    alt="example"
                    src={require('../../../assets/image/sql_image.png').default}
                  />
                }
              >
                <Meta title="SQL" description="Blog about SQL" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    height="300"
                    alt="example"
                    src={require('../../../assets/image/docker_image.png').default}
                  />
                }
              >
                <Meta title="Docker" description="Blog about Docker" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    height="300"
                    alt="example"
                    src={require('../../../assets/image/react_image.png').default}
                  />
                }
              >
                <Meta title="React" description="Blog about React" />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
