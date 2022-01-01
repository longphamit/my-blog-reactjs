import { Card, Col, Image, Row } from "antd";
import React, { useState, useEffect } from "react";
import "./styles.css";
import request from "../../../connect/AxiosConfig";
import { useHistory } from "react-router";

const { Meta } = Card;
const BlogList = (props) => {
  const [data, setData] = useState("");
  const fetchBlog = async () => {
    const res = await request.get(
      "/blog/category/" + props?.match?.params?.id || ""
    );
    setData(res.data);
  };
  const history = useHistory();
  useEffect(() => {
    fetchBlog();
  }, []);
  const redirectBlogDetail = (item) => {
    history.push({ pathname: "/blog-detail", search: "?id=" + item.id });
  };
  return (
    <>
      <div className="body">
        <Row gutter={16}>
          {data
            ? data.map((item) => {
                return (
                  <Col className="gutter-row" xl={6} xs={12} span={6}>
                    <div className="divCard">
                      <Image
                        key={item.id}
                        src={item.imageShow}
                        preview={false}
                        onClick={() => redirectBlogDetail(item)}
                      />

                      <p className="titleCard">
                        {item.title}
                      </p>
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
