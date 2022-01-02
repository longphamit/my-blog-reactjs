import React, { useState, useEffect } from "react";
import { Card, Col, Row, Modal, Image } from "antd";
import request from "../../../connect/AxiosConfig";
import "./styles.css";
const { Meta } = Card;
function Memo(props) {
  const [memos, setMemos] = useState([]);

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
                  <div className="divMemoCard">
                    <Image key={item.id} src={item.image} />

                    <p className="titleCard">
                      {item.content}
                    </p>

                    <Meta style={{ fontSize: 11 }} description={item.year} />
                  </div>
                </Col>
              );
            })
          : null}
      </Row>
    </>
  );
}

export default Memo;
