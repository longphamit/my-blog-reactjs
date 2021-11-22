import { Card, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import { Menu } from "antd";
import "./styles.css";
import request from "../../../connect/AxiosConfig";
import { useHistory } from "react-router";
import { notify_success } from "../../../util/Notify";
const { Meta } = Card;
const Home = (props) => {
  const [data, setData] = useState();
  const fetchCategory = async () => {
    const res = await request.get("/category");
    console.log(res);
    setData(res.data);
  };
  const history = useHistory();
  useEffect(() => {
    fetchCategory();
    notify_success("Welcome to Long's blog! Have a nice day!");
    return () => {};
  }, []);
  const redirectBlogList = (id) => {
    history.push("/blog-list/" + id);
  };
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      {/* <TrackingCovid /> */}
      <div className="body">
        
        <Row gutter={16}>
          {data
            ? data.map((i) => {
                return (
                  <Col
                    className="gutter-row"
                    span={6}
                    onClick={() => {
                      redirectBlogList(i.id);
                    }}
                  >
                    <div className="divCard">
                      <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src={i.image} />}
                      >
                        <Meta title={i.name} />
                      </Card>
                    </div>
                  </Col>
                );
              })
            : null}
        </Row>
      </div>
    </>
  );
};

export default Home;
