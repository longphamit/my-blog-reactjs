import {Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import "./styles.css";
import {ClockCircleOutlined,UserOutlined } from "@ant-design/icons";
import request from "../../../connect/AxiosConfig";
const BlogDetail = (props) => {
  const [data, setData] = useState("");
  const setBlogToState = async () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let id = params.get('id');
    let res=await request.get("/blog/"+id)
    console.log(res)
    setData(res.data);
  };
  useEffect(() => {
    setBlogToState();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: 30 }}>{data.title}</h1>
      <div className="info">
        <div style={{marginRight:30}}><ClockCircleOutlined style={{marginRight:10,color:"#4263f5"}}/>{new Date(data.createdAt).toLocaleDateString()}</div>
        <div style={{marginLeft:30}}><UserOutlined style={{marginRight:10,color:"#ff7154"}}/>{data.author}</div>
      </div>

      <div className="content">
        <Row>
          <Col span={4}></Col>
          <Col span={15}>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </>
  );
};

export default BlogDetail;
