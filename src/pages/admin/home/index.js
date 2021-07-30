import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import "./styles.css";
function Admin(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Row>
        <Col span={6}>
          <div className="feature">
            <p>Blog</p>
          </div>
        </Col>
        <Col span={6}>
          <div className="feature">
            <p>Chat</p>
          </div>
        </Col>
        <Col span={6}>
          <div className="feature">
            <p>Logout</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Admin;
