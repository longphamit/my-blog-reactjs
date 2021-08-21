import { Button, Col, Input, Row, Steps, message } from "antd";
import React, { useState, useEffect } from "react";
import ChatBox from "../../../components/client/chat_box";
import Header from "../../../components/client/header";
import "./styles.css";
const { Step } = Steps;
const steps = [
  {
    title: "Set Name",
    content: "First-content",
  },
  {
    title: "Chat",
    content: "Second-content",
  },
];
function ChatPage(props) {
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [botMessage, setBotMessage] = useState([]);
  const [current, setCurrent] = useState(0);

  const next = () => {
    console.log(name)
    if(!name){
      message.error(name+"Name must not empty!")
      return
    }
    setCurrent(current + 1);
    message.success("Processing complete!")
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <Header />
      
        <Row>
          <Col span={6} />
          <Col span={6} className="form">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            {current !=1 ? (
              <>
                <Input onChange={e=>setName(e.target.value)} />
                <Button style={{marginTop:30}} onClick={()=>next()}>Set Name</Button>
              </>
            ) : null}
          </Col>
          <Col span={6} />
        </Row>
      

      {current == 1 ? (
        <Row type="flex" style={{alignItems: "center"}}>
          <Col span={6} />
          <Col span={12}  style={{marginTop:20,textAlign:"center",alignItems:"center"}}>
            <Row style={{margin:0}}>
              <Col span={12}>
              <ChatBox chatWith="author" name={name} />
              </Col>
              <Col span={12}>
              <ChatBox chatWith="bot" name={name} /></Col>
            </Row>
          </Col>
          <Col span={6}></Col>
        </Row>
      ) : null}
      <Row />
    </>
  );
}

export default ChatPage;
