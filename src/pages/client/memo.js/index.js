import React, { useState, useEffect } from 'react';
import { Card, Col, PageHeader, Row, notification } from "antd";
import Header from "../../../components/client/header";
import request from '../../../connect/AxiosConfig';
import { HeartOutlined, SendOutlined } from "@ant-design/icons";
const { Meta } = Card;
function Memo(props) {
    const [memos, setMemos] = useState([]);
    const fetchMemo=async()=>{
        const res=await request.get('/memo');
        setMemos(res.data)        
    }
    useEffect(() => {
        fetchMemo()
        return () => {

        }
    }, []);

    return (
        <>
            <Header/>
            <Row>
                {
                    memos?memos.map(item=>{
                        return (
                            <Col className="gutter-row" span={6}>
                    <div className="divCard">
                      <Card
                        hoverable
                        className="card"
                        cover={
                          <img
                          style={{height:300}}
                            alt="example"
                            src= {item.image}
                          />
                        }
                        
                      >
                        <Meta
                          title={item.year}
                          description={item.detail}
                        />
                      </Card>
                      <Row style={{ marginTop: 10 }}>
                        <Col span={12}>
                          <HeartOutlined
                            style={{ fontSize: 30, color: "#f56747" }}
                          />
                        </Col>
                        <Col span={12}>
                          <SendOutlined
                            style={{
                              fontSize: 30,
                              justifyContent: "flex-end",
                              color: "#2f7dc2",
                            }}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                        )
                    }):null
                }
            </Row>
        </>
    )
}

export default Memo;