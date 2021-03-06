import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useState, useEffect } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../redux/action/UserAction";
import { useHistory } from "react-router";
function Login(props) {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const UserReducer = useSelector((state) => state.UserReducer);
  if (localStorage.getItem("ADMIN")) {
    console.log("redirect admin");
    history.replace("/admin");
  }
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(loginAction(values));
  };
  if (UserReducer.data) {
    localStorage.setItem("ADMIN", UserReducer.data);
    history.replace("/admin");
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Row>
        <Col span={8}></Col>
        <Col span={8} className="form">
          <h2>MonEv Login</h2>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
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
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button
                style={{
                  marginTop: 20,
                  color: "#ffff",
                  background: "#ed8872",
                  borderRadius: 10,
                }}
              >
                <GoogleOutlined />
                Login By Google
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
}

export default Login;
