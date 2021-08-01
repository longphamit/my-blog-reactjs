import React, { useState, useEffect } from "react";
import { Button, Checkbox, Col, Input, Row,Form } from "antd";


import Header from "../../../components/client/header";
import { SendOutlined } from "@ant-design/icons";
import "./styles.css"
function Contact(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Header />
      <Row>
        <Col  span={6}></Col>
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
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Content"
              name="Content"
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <Checkbox>Remember me</Checkbox>
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
        <Col  span={6}></Col>
      </Row>
    </>
  );
}

export default Contact;
