import React, { useState, useEffect } from "react";
import { Button, Checkbox, Col, Input, Row, Form, notification } from "antd";

import Header from "../../../components/client/header";
import { SendOutlined } from "@ant-design/icons";
import "./styles.css";
import request from "../../../connect/AxiosConfig";
function Contact(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);
  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await request.post("/contact", values);
    if (res.status == 200) {
      notification["success"]({
        message: "System",
        placement: "bottomRight",
        style: { background: "#d2ffc7" },
        description: "Send contact success!",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Header />
      <Row>
        <Col span={6}></Col>
        <Col className="form" span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 12,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type:"email",
                  message: "Please input email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Content"
              name="content"
              rules={[
                {
                  required: true,
                  message: "Please input your content!",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <Button
                htmlType="submit"
                style={{
                  marginTop: 20,
                  color: "#ffff",
                  background: "#ed8872",
                  borderRadius: 10,
                }}
              >
                <SendOutlined />
                Send
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
}

export default Contact;