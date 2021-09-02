import { Card, Col, PageHeader, Row, notification } from "antd";
import React, { useState, useEffect } from "react";
import Header from "../../../components/client/header";
import { Menu } from "antd";
import "./styles.css";
import { HeartOutlined, SendOutlined } from "@ant-design/icons";
import request from "../../../connect/AxiosConfig";
import { useHistory } from "react-router";
const { SubMenu } = Menu;
const { Meta } = Card;
const BlogList = (props) => {
  const [data, setData] = useState("");
  const fetchBlog = async () => {
    const res = await request.get("/blog");
    setData(res.data);
  };
  const history = useHistory();
  useEffect(() => {
    fetchBlog();
    notification["success"]({
      message: "Phạm Càn Long",
      placement: "bottomRight",
      style: { background: "#d2ffc7" },
      description: "Welcome to my blog! Have a nice day!",
    });
  }, []);
  const redirectBlogDetail = (item) => {
    localStorage.setItem("BLOG_SELECTED", JSON.stringify(item));
    history.push("/blog-detail");
  };
  return (
    <>
      <div className="body">
        <Row gutter={16}>
          {data
            ? data.map((item) => {
                return (
                  <Col className="gutter-row" span={6}>
                    <div className="divCard">
                      <Card
                        hoverable
                        className="card"
                        cover={
                          <img
                            style={{ height: 300 }}
                            alt="example"
                            src={item.imageShow}
                          />
                        }
                        onClick={() => redirectBlogDetail(item)}
                      >
                        <Meta
                          title={item.title}
                          description="www.instagram.com"
                        />
                      </Card>
                      <Row style={{ marginTop: 10 }}>
                        <Col span={12}>
                          <HeartOutlined
                            style={{ fontSize: 30, color: "#f56747" }}
                          />
                        </Col>
                        <Col span={12}>
                          <SendOutlined
                            style={{
                              fontSize: 30,
                              justifyContent: "flex-end",
                              color: "#2f7dc2",
                            }}
                          />
                        </Col>
                      </Row>
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

export default BlogList;
