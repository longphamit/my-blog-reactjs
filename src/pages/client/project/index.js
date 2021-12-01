import { Button, Card, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { GithubOutlined, EyeOutlined } from "@ant-design/icons";
function Project(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={{ textAlign: "center" }}>
            <h1>Projects</h1>
            <Row>
              <Col span={12}>
                <div className="ProjectCard">
                  <Row>
                    <Col span={8}>
                      <img
                        src="/contact.png"
                        style={{ width: 100, height: 100 }}
                      />
                    </Col>
                    <Col span={16}>
                      <div style={{ marginLeft: 20, textAlign: "left" }}>
                        <h4>Flappy Bird</h4>
                        <p>
                          Project simulate Flappy Bird Game. Using Java swing to
                          build UI
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                      <Col span={6}/>
                    
                    <Col>
                      <Button
                        style={{
                          margin: 20,
                          color: "#ffff",
                          background: "#000",
                          borderRadius: 10,
                        }}
                      >
                        <GithubOutlined style={{ fontSize: 25 }} />
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          margin: 20,
                          color: "#ffff",
                          background: "blue",
                          borderRadius: 10,
                        }}
                      >
                        <EyeOutlined style={{ fontSize: 25 }} />
                      </Button>
                    </Col>
                    <Col span={6}/>
                  </Row>
                </div>
              </Col>
              <Col span={12}>
                <div className="ProjectCard">
                  <h4>Fake NotePad</h4>
                  <Row>
                    <Col>Github</Col>
                    <Col>Detail</Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={6}></Col>
        </Row>
      </div>
    </>
  );
}

export default Project;
