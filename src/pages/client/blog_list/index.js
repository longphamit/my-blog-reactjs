import { Card, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import "./styles.css";
import request from "../../../connect/AxiosConfig";
import { useHistory } from "react-router";

const { Meta } = Card;
const BlogList = (props) => {
  const [data, setData] = useState("");
  const fetchBlog = async () => {
    const res = await request.get("/blog/category/" + props?.match?.params?.id || "");
    setData(res.data);
  };
  const history = useHistory();
  useEffect(() => {
    fetchBlog();
  }, []);
  const redirectBlogDetail = (item) => {
    history.push({pathname:"/blog-detail",search:"?id="+item.id});
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
                          description=""
                        />
                      </Card>
                      {/* <Row style={{ marginTop: 10 }}>
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
                      </Row> */}
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
