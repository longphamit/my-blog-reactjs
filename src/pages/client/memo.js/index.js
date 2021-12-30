import React, { useState, useEffect, memo } from "react";
import { Card, Col, PageHeader, Row, notification, Modal } from "antd";
import Header from "../../../components/client/header";
import request from "../../../connect/AxiosConfig";
import { HeartOutlined, SendOutlined } from "@ant-design/icons";
import "./styles.css"
const { Meta } = Card;
function Memo(props) {
  const [memos, setMemos] = useState([]);
  const [memoSelected, setMemoSelected] = useState();
  const [visible, setVisible] = useState(false);
  const fetchMemo = async () => {
    const res = await request.get("/memo");
    setMemos(res.data);
  };

  useEffect(() => {
    fetchMemo();
    return () => {};
  }, []);

  return (
    <>
      <Row>
        {memos
          ? memos.map((item) => {
              return (
                <Col className="gutter-row" xl={6} xs={12} span={6}>
                  <div className="divCard">
                    <Card
                      onClick={() => {setMemoSelected(item);setVisible(true)}}
                      hoverable
                      className="card"
                      cover={
                        <img
                          style={{ height: 300 }}
                          alt="example"
                          src={item.image}
                        />
                      }
                    >
                      <Meta description={item.content} />
                      <Meta title={item.year} />
                    </Card>
                  </div>
                </Col>
              );
            })
          : null}
      </Row>
      <Modal
        title={memoSelected?.content||""}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        { memoSelected?<img class="memo_modal" alt="example" src={memoSelected.image} />:null}
      </Modal>
    </>
  );
}

export default Memo;
