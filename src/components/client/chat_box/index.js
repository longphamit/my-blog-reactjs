import { Button, Col, Input, Row } from "antd";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import SockJsClient from 'react-stomp';
import { connectServerSocketNodeJs } from "../../../connect/SocketConfig";
import request from "../../../connect/AxiosConfig";
import { v4 as uuidv4 } from 'uuid';
function ChatBox({ chatWith, name }) {
  const [state, setState] = useState("");
  const [message, setMessage] = useState({
    content:"",
    name:name,
    id:uuidv4()

  });
  const [messageArray, setMessageArray] = useState([]);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    //connect()
    return () => {};
  }, []);
  const SOCKET_URL = 'http://localhost:8080/api/ws-message';
  // const connect=async()=>{
  //   const socketTemp = await connectServerSocketNodeJs();
  //   console.log("connected"+name)
  //   if(socketTemp){
  //     socketTemp.io.on("add_room",(e)=>console.log("12121"))
  //     setSocket(socketTemp)
  //   }
  // }
  // const onSendData = async() => {
  //   if (message) {
  //     setMessage("");
  //     setMessageArray([...messageArray, message]);
  //   }
  let onConnected = () => {
    console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
    console.log('--------receive message-----')
    console.log(msg)
  }
  const sendMessage=async()=>{
    console.log(message)
    await request.post("/chat/send",message)
    //socket.sendMessage('/topic/message',"aaaaaaaaaaaaaaaaaaaaa")
  }
  return (
    <>
    <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/message/'+message.id]}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={msg => onMessageReceived(msg)}
        ref={(client)=>{setSocket(client)}}
        debug={false}
      />
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
                        <div style={{wordBreak:"break-all"}}>{mess}</div>
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
                        <div>{mess}</div>
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
                setMessage({...message, content: e.target.value });
              }}
            />
          </Col>
          <Col>
            <Button onClick={()=>sendMessage()}>Send</Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ChatBox;
