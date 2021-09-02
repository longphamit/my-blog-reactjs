import { Avatar, Button, Col, Input, List, Row } from "antd";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { connectServerSocketNodeJs } from "../../../connect/SocketConfig";
import "./styles.css";
function ChatAdmin(props) {
  const [state, setState] = useState("");
  const [userSelected, setUserSelected] = useState("");
  const [socket,setSocket]=useState("")
  const connectSocket=async()=>{
      const socketTemp = await connectServerSocketNodeJs();
      console.log(socketTemp)
      setSocket(socketTemp)
  }
  useEffect(() => {
    connectSocket()
    
    return () => {};
  }, []);
  if(socket){
    console.log("sâsas")
    socket.on("room",(socket)=>console.log(socket))
  }
  const data = [
    
  ];
  return (
    <>
      <Row>
        <Col span={6} className="listChatBox">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://robohash.org/12134" />}
                  title={item.name}
                  onClick={() => {
                    setUserSelected(item);
                  }}
                />
              </List.Item>
            )}
          />
          ,
        </Col>

        <Col span={17}>
          <div>
            <Avatar src="https://robohash.org/12134" />
            <p>{userSelected.name}</p>
            <div className="chatBoxAdmin"></div>
            <Row>
              <Col span={12}>
                <Input.TextArea />
              </Col>
              <Col span={6}>
                <Button>Send</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ChatAdmin;
