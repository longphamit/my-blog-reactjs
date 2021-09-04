import { Card, Col, PageHeader, Row, notification } from "antd";
import React, { useState, useEffect } from "react";
import Header from "../../../components/client/header";
import { Menu } from "antd";
import "./styles.css";
import TrackingCovid from "../../../components/client/recom/TrackingCovid";
import { HeartOutlined, SendOutlined } from "@ant-design/icons";
import request from "../../../connect/AxiosConfig";
import { useHistory } from "react-router";
import Item from "antd/lib/list/Item";
import { notify_success } from "../../../util/Notify";
const { SubMenu } = Menu;
const { Meta } = Card;
const Home = (props) => {
  const [data, setData] = useState();
  const fetchCategory = async () => {
    const res = await request.get("/category");
    console.log(res)
    setData(res.data);
  };
  const history = useHistory();
  useEffect(() => {
    fetchCategory()
    notify_success("Welcome to Long's blog! Have a nice day!")
    return () => {};
  }, []);
  const redirectBlogList = (id) => {
    history.push("/blog-list/"+id);
  };
  return (
    <>
      {/* <TrackingCovid /> */}
      <div className="body">
        <Row gutter={16}>
          {
            data?data.map(i=>{return (
              <Col className="gutter-row" span={6} onClick={()=>{redirectBlogList(i.id)}}>
            <div className="divCard">
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    
                    alt="example"
                    src={i.image}
                  />
                }
              >
                <Meta title={i.name} />
              </Card>
            </div>
          </Col>
            )}):null
          }
        </Row>
      </div>
    </>
  );
};

export default Home;
