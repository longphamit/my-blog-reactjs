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
                          description={item.content}
                        />
                         <Meta
                          title={item.year}
                        />
                      </Card>
                      
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