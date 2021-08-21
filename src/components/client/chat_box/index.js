import { Button, Col, Input, Row } from "antd";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import io from "socket.io-client";
import SockJsClient from "react-stomp";
function ChatBox({ chatWith, name }) {
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [messageArray, setMessageArray] = useState([]);
  const [socket, setSocket] = useState(null);
  const SOCKET_URL = "http://localhost:8080/ws-message";

  const createClientChat = () => {};
  const connectServerSocketNodeJs = async () => {
    const socket = io("http://localhost:5000", {
      transports: ["websocket", "polling", "flashsocket"],
      credentials: true,
    });
    socket.on("client", (message) => console.log(message));
    setSocket(socket);
  };
  useEffect(() => {
    return () => {};
  }, []);

  const onSendData = () => {
    if (message) {
      setMessage("");
      setMessageArray([...messageArray, message]);
    }

    // if(!socket){
    //   connectServerSocketNodeJs();
    // }
    // socket.emit("client",message)
  };
  return (
    <>
      <div style={{ height: 30, margin: 20 }}>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          Chat with {chatWith}
        </div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>Name: {name}</div>
        <div className="chatBox">
          {messageArray
            ? messageArray.map((mess) => {
                return mess.name != "bot" ? (
                  <Row>
                    <Col span={12} />
                    <Col span={12}>
                      <div
                        style={{
                          textAlign: "left",
                          margin: 10,
                          background: "#387ccf",
                          color: "#ffff",
                          padding: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          borderBottomLeftRadius: 10,
                          
                        }}
                      >
                        <div>{mess.name}</div>
                        <div style={{wordBreak:"break-all"}}>{mess.content}</div>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col span={12}>
                      <div
                        style={{
                          textAlign: "left",
                          margin: 10,
                          background: "#387ccf",
                          color: "#ffff",
                          padding: 10,
                        }}
                      >
                        <div>{mess.name}</div>
                        <div>{mess.content}</div>
                      </div>
                    </Col>
                    <Col span={12} />
                  </Row>
                );
              })
            : null}
        </div>
        <Row>
          <Col>
            <Input.TextArea
              value={message.content}
              onChange={(e) => {
                setMessage({ name: name, content: e.target.value });
              }}
            />
          </Col>
          <Col>
            <Button onClick={() => onSendData()}>Send</Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ChatBox;
