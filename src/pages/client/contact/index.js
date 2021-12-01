import React, { useState, useEffect } from "react";
import { Button, Col, Input, Row, Form } from "antd";

import { SendOutlined } from "@ant-design/icons";
import "./styles.css";
import request from "../../../connect/AxiosConfig";
import { notify_success } from "../../../util/Notify";
function Contact(props) {
  const [state, setState] = useState("");
  useEffect(() => {
    return () => {};
  }, []);
  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await request.post("/contact", values);
    if (res.status == 200) {
      notify_success("Thanks for your contact! I will connect with you soon!")
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{height:500}}>
      <Row style={{marginTop:200}}>
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
    </div>
  );
}

export default Contact;
